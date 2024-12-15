import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";

// hooks: react functions which has specific task
// example: useState, useEffect, useRef, useCallback, useMemo
// thir party hooks: redux -> useSelector, useDispatch
// router: useNavigate

const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <Box>
            <Box>
                <Typography variant="h3">Count: {count}</Typography>
                <Button
                    variant="contained"
                    color="success"
                    onClick={() => {
                        setCount(count + 1);
                    }}
                >
                    +
                </Button>

                <Button
                    variant="contained"
                    color="error"
                    onClick={() => {
                        setCount(count - 1);
                    }}
                >
                    -
                </Button>

                <Button
                    variant="contained"
                    color="warning"
                    onClick={() => {
                        setCount(0);
                    }}
                >
                    0
                </Button>
            </Box>

            <Box>
                <Button
                    variant="contained"
                    color="info"
                    onClick={() => {
                        setCount("Clicked");
                    }}
                >
                    Change Value
                </Button>
            </Box>
        </Box>
    );
};

export default Counter;
