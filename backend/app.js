const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();


const authRoutes = require("./routes/authRoutes");
const listingRoutes = require("./routes/listingRoutes");

const app = express();

// middleware

app.use(cors());
app.use(express.json());

// test route
app.get("/", (req, res) => {
  res.send("Server is working");
});

// MongoDB connection
mongoose
  .connect("mongodb+srv://travel-experience-platform:iDYvSbuOgJHVrttm@cluster0.wtfex6d.mongodb.net/travel-platform?retryWrites=true&w=majority")
  .then(() => {
    console.log("MongoDB Connected");

    app.listen(5000, () => {
      console.log("Server running on port 5000");
    });
  })
  .catch((err) => {
    console.log("MongoDB connection error:", err);
  });