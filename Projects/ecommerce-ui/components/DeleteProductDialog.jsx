"use client";

import $axios from "../lib/axios/axios.instance";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import CircularProgress from "@mui/material/CircularProgress";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import * as React from "react";

const DeleteProductDialog = (props) => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const queryClient = useQueryClient();

    const { isLoading, mutate } = useMutation({
        mutationKey: ["delete-product"],
        mutationFn: async () => {
            console.log(props.productId);
            return await $axios.delete(`/product/delete/${props.productId}`);
        },
        onSuccess: () => {
            queryClient.refetchQueries("seller-product-list");
        },
        onError: (error) => {
            console.error(error);
        },
    });

    return (
        <React.Fragment>
            <Button
                size="small"
                onClick={handleClickOpen}
                color="error"
                variant="contained"
                startIcon={<DeleteOutlineOutlinedIcon />}
            >
                Delete
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    Are you sure you want to delete this product?
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Deleting this product is a permanent action and cannot
                        be undone. Please confirm if you wish to proceed.
                    </DialogContentText>
                    {isLoading && (
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                marginTop: 20,
                            }}
                        >
                            <CircularProgress />
                        </div>
                    )}
                </DialogContent>
                <DialogActions>
                    <Button
                        onClick={handleClose}
                        variant="contained"
                        color="success"
                        disabled={isLoading}
                    >
                        No
                    </Button>
                    <Button
                        onClick={() => {
                            mutate();
                            handleClose();
                        }}
                        autoFocus
                        color="error"
                        variant="contained"
                        disabled={isLoading}
                    >
                        Yes
                    </Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
};

export default DeleteProductDialog;
