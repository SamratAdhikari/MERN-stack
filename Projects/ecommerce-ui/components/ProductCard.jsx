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
// import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { Box } from "@mui/material";
import { useRouter } from "next/navigation";
import DeleteProductDialog from "./DeleteProductDialog";

export default function ProductCard(props) {
    const [role, setRole] = useState(null);
    const router = useRouter();

    useEffect(() => {
        const userRole = localStorage.getItem("userRole");
        setRole(userRole);
    }, []);

    return (
        <Card
            sx={{
                width: 350,
                height: 400,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
            }}
        >
            <CardMedia
                sx={{ height: 200 }}
                image={props.image}
                title={props.name}
            />
            <CardContent sx={{ flexGrow: 1, paddingBottom: 0 }}>
                <Typography variant="h6" component="div">
                    {props.name}
                </Typography>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginY: 1,
                    }}
                >
                    <Typography variant="body1" sx={{ color: "gray" }}>
                        {props.brand}
                    </Typography>
                    <Typography variant="body1" sx={{ color: "orange" }}>
                        ${props.price}
                    </Typography>
                </Box>
                <Typography
                    variant="body2"
                    sx={{
                        color: "text.secondary",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        display: "-webkit-box",
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: "vertical",
                        wordWrap: "break-word",
                        height: 60,
                    }}
                >
                    {props.description}
                </Typography>
            </CardContent>
            <CardActions
                sx={{
                    display: "flex",
                    justifyContent: "space-between",

                    margin: 2,
                }}
            >
                {role === "seller" && (
                    <Button
                        size="small"
                        variant="contained"
                        color="success"
                        startIcon={<Edit />}
                        onClick={() =>
                            router.push(`/product/edit/${props._id}`)
                        }
                    >
                        Edit
                    </Button>
                )}

                <Button
                    size="small"
                    variant="contained"
                    color="info"
                    startIcon={<RemoveRedEyeOutlinedIcon />}
                    onClick={() => {
                        router.push(`/product/details/${props._id}`);
                    }}
                >
                    View
                </Button>

                {role === "seller" && (
                    <DeleteProductDialog productId={props._id} />
                )}
            </CardActions>
        </Card>
    );
}
