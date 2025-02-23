const express = require("express");
const cors = require("cors");
const connectDB = require("./db/mongodb");
const adminRoutes = require("./routes/adminRoute");
const uploadRoute = require("./routes/upload");
const editables = require("./routes/Editable");
require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors({
  origin: '*',
}));
// Connect to MongoDB
connectDB();

// Admin routes
app.use("/api/admin", adminRoutes);
app.use("/api/upload", uploadRoute); 
app.use("/admin",editables);
// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
