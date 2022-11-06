const express = require("express");
const app = express();
const cors = require("cors");
const { default: mongoose } = require("mongoose");
const path = require("path");
app.use(express.json());
app.use(cors());
const adminRoutes = require("./routes/adminRouts");
app.get("/", (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "/h.html"));
});
app.use("/api/v1/admin/", adminRoutes);

module.exports = app;
