const express = require("express");
const multer = require("multer");
const { createClient } = require("@supabase/supabase-js");
const mongoose = require("mongoose");
require("dotenv").config();
const Upload = require("../models/Uploads"); // Import the Mongoose model
const router = express.Router();
// Supabase setup
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY);
// Configure multer to store files in memory
const storage = multer.memoryStorage();
const upload = multer({ storage });

// API endpoint for file upload
router.post("/", upload.single("file"), async (req, res) => {
  try {
    // Validate file
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    // Validate required fields
    const { fileType, fileCategory } = req.body;
    if (!fileType || !fileCategory) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Define file path
    const filePath = `uploads/${fileCategory}/${fileType}/${Date.now()}_${req.file.originalname}`;

    // Debugging logs
    console.log("Uploading File...");
    console.log("Supabase URL:", process.env.SUPABASE_URL);
    console.log("Supabase Bucket:", process.env.SUPABASE_BUCKET);
    console.log("File Path:", filePath);
    console.log("File Name:", req.file.originalname);
    console.log("File Type:", req.file.mimetype);
    console.log("File Size:", req.file.size);
    console.log("File Buffer Length:", req.file.buffer.length);

    // Check if SUPABASE_BUCKET is defined
    if (!process.env.SUPABASE_BUCKET) {
      return res.status(500).json({ message: "Supabase bucket is not defined" });
    }

    // Upload file to Supabase
    const { data, error: uploadError } = await supabase.storage
      .from(process.env.SUPABASE_BUCKET)
      .upload(filePath, req.file.buffer, { contentType: req.file.mimetype });

    if (uploadError) {
      console.error("Upload Error:", uploadError);
      return res.status(500).json({ message: "Upload failed", error: uploadError.message });
    }

    console.log("File uploaded successfully:", data);

    // Generate public URL for the uploaded file
    const fileUrl = `${process.env.SUPABASE_URL}/storage/v1/object/public/${process.env.SUPABASE_BUCKET}/${filePath}`;

    // Save file details in MongoDB
    const newUpload = new Upload({
      fileName: req.file.originalname,
      fileType: req.file.mimetype,
      fileCategory: fileCategory,
      fileSize: req.file.size,
      fileUrl: fileUrl,
    });

    await newUpload.save();
    console.log("File saved in database:", newUpload);

    res.json({
      message: "File uploaded successfully",
      fileUrl: fileUrl,
    });
  } catch (error) {
    console.error("Unexpected Error:", error);
    res.status(500).json({ message: "Upload failed", error: error.message });
  }
});

// API to fetch paginated files
router.get("/files", async (req, res) => {
  try {
    let { page = 1, limit = 20 } = req.query;

    // Convert to numbers
    page = parseInt(page);
    limit = parseInt(limit);

    // Validate inputs
    if (isNaN(page) || page < 1) page = 1;
    if (isNaN(limit) || limit < 1 || limit > 100) limit = 20; // Limit max to 100

    const skip = (page - 1) * limit;

    // Fetch total count
    const totalFiles = await Upload.countDocuments();
    const totalPages = Math.ceil(totalFiles / limit);

    // Fetch paginated files
    const files = await Upload.find().sort({ createdAt: -1 }).skip(skip).limit(limit);

    if (!files.length) {
      return res.status(404).json({ message: "No files found" });
    }

    // Process files and generate signed URLs
    const filesWithSignedUrls = await Promise.all(
      files.map(async (file) => {
        // Extract file path from stored public URL
        const filePath = file.fileUrl.replace(
          `${process.env.SUPABASE_URL}/storage/v1/object/public/${process.env.SUPABASE_BUCKET}/`,
          ""
        );

        // Generate a pre-signed URL (valid for 60 seconds)
        const { data: signedUrlData, error: signedUrlError } = await supabase.storage
          .from(process.env.SUPABASE_BUCKET)
          .createSignedUrl(filePath, 60);

        return {
          _id: file._id,
          fileName: file.fileName,
          fileType: file.fileType,
          fileSize: file.fileSize,
          fileCategory: file.fileCategory,
          createdAt: file.createdAt,
          fileUrl: signedUrlError ? null : signedUrlData.signedUrl, // If error, return null URL
        };
      })
    );

    res.json({
      message: "Files retrieved",
      page,
      limit,
      totalFiles,
      totalPages,
      files: filesWithSignedUrls,
    });
  } catch (error) {
    console.error("Unexpected Error:", error);
    res.status(500).json({ message: "Failed to fetch files", error: error.message });
  }
});

module.exports = router;
