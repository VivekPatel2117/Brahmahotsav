import React, { useState } from "react";
import axios from "axios";
import styles from "./fileUpload.module.css";
import { toast } from "react-toastify";

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [fileType, setFileType] = useState("");
  const [fileCategory, setFileCategory] = useState("");
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [message, setMessage] = useState("");

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (!selectedFile) return;

    setFile(selectedFile);
    setFileType(selectedFile.type);

    // Generate preview
    if (selectedFile.type.startsWith("image/") || selectedFile.type.startsWith("video/") || selectedFile.type.startsWith("audio/")) {
      setPreview(URL.createObjectURL(selectedFile));
    } else {
      setPreview(null);
    }
  };

  const handleUpload = async () => {
    const loadingToast = toast.loading("Uploading file...");
    if (!file) {
      setMessage("Please select a file first.");
      return;
    }
    if (!fileCategory) {
      setMessage("Please select a file category.");
      return;
    }

    setUploading(true);
    setProgress(0);
    setMessage("");

    const formData = new FormData();
    formData.append("file", file);
    formData.append("fileType", fileType);
    formData.append("fileCategory", fileCategory);

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/api/upload`,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
          onUploadProgress: (progressEvent) => {
            const percent = Math.round((progressEvent.loaded * 100) / progressEvent.total);
            setProgress(percent);
          },
        }
      );
      if (response.status !== 200) {
        throw new Error("Upload failed");
      }
      toast.update(loadingToast, {
        type: "success",
        render: "File uploaded successfully!",
        isLoading: false,
        autoClose: 2000,
      });
      setMessage("File uploaded successfully!");
    } catch (error) {
      setMessage("Upload failed. Please try again.");
      toast.update(loadingToast, {
        type: "error",
        render: "Upload failed",
        isLoading: false,
        autoClose: 2000,})
    } finally {
      setUploading(false);
      toast.dismiss();
    }
  };

  return (
    <div className={styles.uploadWrapper}>
      <div className={styles.container}>
        <h2>Upload File</h2>
        <input type="file" onChange={handleFileChange} className={styles.input} />

        {/* Preview for images, videos, and audio */}
        {preview && fileType.startsWith("image/") && <img src={preview} alt="Preview" className={styles.preview} />}
        {preview && fileType.startsWith("video/") && (
          <video controls className={styles.preview}>
            <source src={preview} type={fileType} />
            Your browser does not support the video tag.
          </video>
        )}
        {preview && fileType.startsWith("audio/") && (
          <audio controls className={styles.audio}>
            <source src={preview} type={fileType} />
            Your browser does not support the audio tag.
          </audio>
        )}

        {/* Display preview for other files */}
        {!preview && file && (
          <p className={styles.fileName}>
            <a href={URL.createObjectURL(file)} target="_blank" rel="noopener noreferrer">
              {file.name}
            </a>
          </p>
        )}

        {/* Dropdowns */}
        <div className={styles.selectContainer}>
          <label>File Type:</label>
          <select value={fileType} onChange={(e) => setFileType(e.target.value)} disabled>
            <option value={fileType}>{fileType || "Select a file first"}</option>
          </select>
        </div>

        <div className={styles.selectContainer}>
          <label>File Category:</label>
          <select value={fileCategory} onChange={(e) => setFileCategory(e.target.value)}>
            <option value="">Select Category</option>
            <option value="HAR_GHAR_ZULA">Har Ghar Zula</option>
            <option value="VRAT_DIXA">Vrat Dixa</option>
            <option value="BAL_PRABHU_POOJAN">Bal Prabhu Poojan</option>
            <option value="PRAGATYOTSAV">Pragatyotsav</option>
            <option value="MAHA_ABHISHEK">Maha Abhishek</option>
            <option value="EVENT_OPENING">Event Opening</option>
          </select>
        </div>

        <button onClick={handleUpload} className={styles.button} disabled={uploading}>
          {uploading ? `Uploading... ${progress}%` : "Upload"}
        </button>

        {message && <p className={styles.message}>{message}</p>}
      </div>
    </div>
  );
};

export default FileUpload;
