import express from "express";
import Song from "./song.model.js";
import mongoose from "mongoose";

const router = express.Router();

// ? POST: add a song
router.post("/song/add", async (req, res) => {
    // extract new song from res.body
    const newSong = req.body;

    // insert song data to the database
    await Song.create(newSong);

    return res
        .status(201)
        .send({ message: `New song ${newSong.title} added!` });
});

// ? GET: get song list
router.get("/song/list", async (req, res) => {
    const songs = await Song.find();

    return res
        .status(200)
        .send({ message: "Showing all the songs ...", songList: songs });
});

// ? GET: get song detail by _id
router.get("/song/byId/:id", async (req, res) => {
    // step1: extract song id from req.params
    const songId = req.params.id;

    // step2: check for mongo id validity
    const isValidId = mongoose.isValidObjectId(songId);

    // step3: if not valid, throw error
    if (!isValidId) {
        return res.status(400).send({ message: "Invalid song Id ..." });
    }

    // step4: find song using songId
    const songDetail = await Song.findOne({
        _id: songId,
    });

    // step5: if not found, throw error
    if (!songDetail) {
        return res.status(400).send({ message: "Song not found ... " });
    }

    return res.status(200).send({
        message: "Song detail retrieved successfully",
        songDetail: songDetail,
    });
});

// ? GET: get song detail by name
router.get("/song/byTitle/:title", async (req, res) => {
    const songTitle = req.params.title;

    const songDetail = await Song.findOne({
        title: songTitle,
    });

    if (!songDetail) {
        return res.status(400).send({ message: "Song not found ... " });
    }

    return res.status(200).send({
        message: "Song detail retrieved successfully",
        songDetail: songDetail,
    });
});

// ? GET: get song(s) detail by artist
router.get("/song/byArtist/:artist", async (req, res) => {
    const artistName = req.params.artist;

    const songs = await Song.find({ artist: artistName });

    // if (songs.length === 0) {
    if (songs.length === 0) {
        return res
            .status(400)
            .send({ message: "No songs found for this artist..." });
    }

    return res.status(200).send({
        message: "Song(s) retrieved successfully",
        songs: songs,
    });
});

// ? DELETE: delete song by _id
router.delete("/song/delete/:id", async (req, res) => {
    const songId = req.params.id;
    const isValidId = mongoose.isValidObjectId(songId);

    if (!isValidId) {
        return res.status(400).send({ message: "Invalid song Id ..." });
    }

    const songDetail = await Song.findByIdAndDelete(songId);

    if (!songDetail) {
        return res.status(400).send({ message: "Song not found ... " });
    }

    return res
        .status(200)
        .send({ message: `Deleted ${songDetail.title} successfully` });
});

// ? PUT: update song detail by _id
router.put("/song/edit/:id", async (req, res) => {
    const songId = req.params.id;
    const isValidId = mongoose.isValidObjectId(songId);

    if (!isValidId) {
        return res.status(400).send({ message: "Invalid song Id ..." });
    }

    const songDetail = await Song.findById(songId);

    if (!songDetail) {
        return res.status(400).send({ message: "Song not found ... " });
    }

    const newData = req.body;
    const updatedSong = await Song.findByIdAndUpdate(songId, newData, {
        new: true,
    });

    return res
        .status(200)
        .send({ message: `Updated ${songDetail.title} data successfully` });
});

export default router;
