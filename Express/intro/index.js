import express from "express";

// app
const app = express();

app.get("/", (req, res) => {
    return res.status(200).send("My first app");
});

app.get("/hello", (req, res) => {
    return res.status(200).send("Hello Samrat");
});

// network port and server
const PORT = 8000;

app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`);
});
