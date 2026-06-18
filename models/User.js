const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
{
    name: {
        type: String,
        required: true,
        trim: true
    },

    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },

    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },

    password: {
        type: String,
        required: true
    },

    profilePicture: {
        type: String,
        default: ""
    },

    role: {
        type: String,
        enum: ["admin", "user"],
        default: "user"
    },

    favoriteGenre: {
        type: String,
        default: "Fantasy"
    },

    isActive: {
        type: Boolean,
        default: true
    }
},
{
    timestamps: true
}
);

module.exports = mongoose.model("User", userSchema);