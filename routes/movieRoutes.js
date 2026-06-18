const express = require("express");
const router = express.Router();

const protect = require("../middleware/authMiddleware");
const upload = require("../middleware/uploadMiddleware");
const {
  createMovie,
  getAllMovies,
  getMovieById,
  updateMovie,
  deleteMovie
} = require("../controllers/movieController");



router.get("/", getAllMovies);

router.get("/:id", getMovieById);

router.post(
  "/",
  protect,
  upload.single("poster"),
  createMovie
);
router.put("/:id", protect, updateMovie);

router.delete("/:id", protect, deleteMovie);

module.exports = router;