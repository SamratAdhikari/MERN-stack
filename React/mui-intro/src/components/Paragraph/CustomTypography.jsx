import { Box, Typography } from "@mui/material";
import React from "react";

const CustomTypography = () => {
    return (
        <Box>
            <span>Typography</span>
            <Typography variant="h1">Typography h1</Typography>
            <Typography variant="h2">Typography h2</Typography>
            <Typography variant="h3">Typography h3</Typography>
            <Typography variant="h4">Typography h4</Typography>
            <Typography variant="h5">Typography h5</Typography>
            <Typography variant="h6">Typography h6</Typography>
            <Typography>Typography Paragraph</Typography>
        </Box>
    );
};

export default CustomTypography;
