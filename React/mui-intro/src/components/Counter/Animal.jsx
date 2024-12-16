import { Box, TextField, Typography } from "@mui/material";
import { useState } from "react";

const Animal = () => {
    const [text, setText] = useState("Text");
    const [password, setPassword] = useState("Empty");

    return (
        <Box>
            <Typography variant="h3" gutterBottom>
                {text}
            </Typography>
            <TextField
                color="success"
                label="Type Something"
                sx={{ marginBottom: 10 }}
                onChange={(event) => {
                    setText(event.target.value);
                }}
            />

            <Typography variant="h3" gutterBottom>
                {password}
            </Typography>
            <TextField
                color="success"
                label="Type Password"
                type="password"
                sx={{ marginBottom: 10 }}
                onChange={(event) => {
                    setPassword(event.target.value);
                }}
            />
        </Box>
    );
};

export default Animal;
