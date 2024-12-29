"use client";

import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Edit } from "@mui/icons-material";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

export default function ProductCard(props) {
    const [role, setRole] = useState(null);

    useEffect(() => {
        const userRole = localStorage.getItem("userRole");
        setRole(userRole);
    });

    return (
        <Card sx={{ maxWidth: 350 }}>
            <CardMedia
                sx={{ height: 250 }}
                image={props.image}
                title="green iguana"
            />
            <CardContent>
                <Typography variant="h6" component="div">
                    {props.name}
                </Typography>

                <Typography
                    variant="body1"
                    className="text-yellow-600"
                    gutterBottom
                >
                    ${props.price}
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    {props.description}
                </Typography>
            </CardContent>
            <CardActions className="flex justify-between mx-6">
                {role === "seller" && (
                    <Button
                        size="small"
                        variant="contained"
                        color="success"
                        startIcon={<Edit />}
                    >
                        Edit
                    </Button>
                )}
                {role === "buyer" && (
                    <Button
                        size="small"
                        variant="contained"
                        color="info"
                        startIcon={<RemoveRedEyeOutlinedIcon />}
                    >
                        View More
                    </Button>
                )}

                {role === "seller" && (
                    <Button
                        size="small"
                        variant="contained"
                        color="error"
                        startIcon={<DeleteOutlineOutlinedIcon />}
                    >
                        Delete
                    </Button>
                )}
            </CardActions>
        </Card>
    );
}
