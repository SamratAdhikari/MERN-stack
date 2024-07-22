import mongoose from "mongoose";

// set schema
const songSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    artist: {
        type: String,
        required: true,
    },
    genre: {
        type: String,
        required: true,
    },
    releasedYear: String,
    duration: Number, // in seconds
});

const Song = mongoose.model("Song", songSchema);

export default Song;
