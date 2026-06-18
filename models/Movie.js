const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema(
{
    title: {
        type: String,
        required: true,
        trim: true
    },

    director: {
        type: String,
        required: true
    },

    releaseYear: {
        type: Number,
        required: true
    },

    genre: {
        type: String,
        required: true
    },

    duration: {
        type: Number,
        required: true
    },

    rating: {
        type: Number,
        min: 0,
        max: 10,
        default: 0
    },

    language: {
        type: String,
        default: "Japanese"
    },

    description: {
        type: String,
        required: true
    },

    poster: {
        type: String,
        default: ""
    },

    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }

},
{
    timestamps: true
});

module.exports = mongoose.model("Movie", movieSchema);