import { Box, TextField, Typography } from "@mui/material";
import { useState } from "react";

const Student = () => {
    const [student, setStudent] = useState({
        name: "Samrat",
        age: 22,
    });

    return (
        <Box>
            <Typography variant="h3" gutterBottom>
                {student.name}
            </Typography>
            <TextField
                sx={{ marginBottom: 10 }}
                onChange={(e) => {
                    const name = e.target.value;
                    setStudent({ ...student, name });
                }}
            />

            <Typography variant="h3" gutterBottom>
                {student.age}
            </Typography>
            <TextField
                type="number"
                sx={{ marginBottom: 10 }}
                onChange={(e) => {
                    const age = e.target.value;
                    setStudent({ ...student, age });
                }}
            />
        </Box>
    );
};

export default Student;
