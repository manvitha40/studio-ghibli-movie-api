const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
const path = require("path");
const movieRoutes = require("./routes/movieRoutes");

const connectDB = require("./config/db");



connectDB();

const app = express();


app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use(
  "/uploads",
  express.static(
    path.join(__dirname, "uploads")
  )
);
app.use("/api/movies", movieRoutes);

app.get("/", (req, res) => {
    res.json({
        message: "Studio Ghibli Movie API Running"
    });
});


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});