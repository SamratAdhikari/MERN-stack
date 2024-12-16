import { Box, Button, Stack, Typography } from "@mui/material";
import { useState } from "react";

const Actor = () => {
    const [heros, setHeros] = useState([
        {
            id: 1,
            name: "Cilian Murphy",
        },
        {
            id: 1,
            name: "Johnny Depp",
        },
        {
            id: 1,
            name: "Robert Pattinson",
        },
    ]);
    return (
        <Box>
            <Typography variant="h2" gutterBottom>
                Hero List
            </Typography>
            {heros.map((item) => {
                return (
                    <Stack
                        key={item.id}
                        gutterBottom
                        direction="row"
                        gap={4}
                        sx={{ marginBottom: 2 }}
                    >
                        <Typography variant="h5" gutterBottom>
                            {item.name}
                        </Typography>
                        <Button
                            variant="contained"
                            color="error"
                            onClick={() => {
                                const itemToDelete = item.id;
                                const newArray = heros.filter((hero) => {
                                    return hero.id !== itemToDelete;
                                });
                                setHeros(newArray);
                            }}
                        >
                            Delete
                        </Button>
                    </Stack>
                );
            })}
        </Box>
    );
};

export default Actor;
