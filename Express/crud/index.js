import express from "express";

const app = express();

// ! to make app understand JSON
app.use(express.json());

let studentList = [
    {
        id: 1,
        name: "Samrat",
    },
    {
        id: 2,
        name: "Ubermensch",
    },
];

// ! API

// ? add student
app.post("/student/add", (req, res) => {
    // console.log(req.body);

    const newStudent = req.body;
    studentList.push({ ...newStudent });
    return res.status(200).send({ message: "Adding student..." });
});

// ? get student list
app.get("/student/list", (req, res) => {
    return res.status(200).send(studentList);
});

// ! network port
const PORT = 8080;

app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`);
});
