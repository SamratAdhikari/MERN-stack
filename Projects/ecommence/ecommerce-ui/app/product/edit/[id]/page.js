"use client";

import { productCategories } from "@/constants/general.constants";
import $axios from "@/lib/axios/axios.instance";
import { productDataValidationSchema } from "@/validation/product.validation.schema";
import {
    Button,
    Checkbox,
    CircularProgress,
    FormControl,
    FormControlLabel,
    FormHelperText,
    InputLabel,
    LinearProgress,
    MenuItem,
    Select,
    TextField,
    Typography,
} from "@mui/material";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Formik } from "formik";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const page = () => {
    const [token, setToken] = useState("");
    const router = useRouter();

    useEffect(() => {
        const userToken = localStorage.getItem("token");
        if (!userToken) {
            router.push("/login");
        }

        const userRole = localStorage.getItem("userRole");
        if (userRole === "buyer") {
            router.push("/");
        }

        setToken(userToken);
    }, [router]);

    const params = useParams();
    const productId = params?.id;

    const { data, isPending } = useQuery({
        queryKey: ["get-product-details"],
        queryFn: async () => {
            return await $axios.get(`/product/detail/${productId}`);
        },
    });

    const productDetail = data?.data?.productDetail;

    console.log("prod details", productDetail);

    const { isPending: editPending, mutate } = useMutation({
        mutationKey: ["edit-product"],
        mutationFn: async (values) => {
            const response = await $axios.put(
                `/product/update/${productId}`,
                values
            );
            return response.data;
        },

        onSuccess: (res) => {
            // console.log(res);
            router.push(`/product/details/${productId}`);
        },

        onError: (error) => {
            console.log(error);
        },
    });

    return (
        <div className="w-full min-h-screen flex flex-col justify-center items-center bg-gray-100 py-4">
            <div>
                {isPending && <CircularProgress />}
                {isPending && <LinearProgress color="secondary" />}
            </div>
            {!isPending && (
                <Formik
                    initialValues={{
                        name: productDetail?.name,
                        price: productDetail?.price,
                        brand: productDetail?.brand,
                        quantity: productDetail?.quantity,
                        category: productDetail?.category,
                        freeShipping: productDetail?.freeShipping,
                        description: productDetail?.description,
                    }}
                    validationSchema={productDataValidationSchema}
                    onSubmit={(values) => {
                        mutate(values);
                    }}
                >
                    {(formik) => {
                        return (
                            <form
                                onSubmit={formik.handleSubmit}
                                className="flex flex-col gap-4 w-[40%] h-auto p-4 bg-white shadow-lg rounded-lg"
                            >
                                <Typography
                                    variant="h4"
                                    className="text-black self-center"
                                >
                                    Edit Product
                                </Typography>

                                <FormControl>
                                    <TextField
                                        label="Name"
                                        {...formik.getFieldProps("name")}
                                    />
                                    {formik.touched.name &&
                                    formik.errors.name ? (
                                        <FormHelperText error>
                                            {formik.errors.name}
                                        </FormHelperText>
                                    ) : null}
                                </FormControl>

                                <FormControl>
                                    <TextField
                                        label="Brand"
                                        {...formik.getFieldProps("brand")}
                                    />
                                    {formik.touched.brand &&
                                    formik.errors.brand ? (
                                        <FormHelperText error>
                                            {formik.errors.brand}
                                        </FormHelperText>
                                    ) : null}
                                </FormControl>

                                <FormControl>
                                    <TextField
                                        label="Price"
                                        type="number"
                                        {...formik.getFieldProps("price")}
                                    />
                                    {formik.touched.price &&
                                    formik.errors.price ? (
                                        <FormHelperText error>
                                            {formik.errors.price}
                                        </FormHelperText>
                                    ) : null}
                                </FormControl>

                                <FormControl>
                                    <TextField
                                        label="Quantity"
                                        type="number"
                                        {...formik.getFieldProps("quantity")}
                                    />
                                    {formik.touched.quantity &&
                                    formik.errors.quantity ? (
                                        <FormHelperText error>
                                            {formik.errors.quantity}
                                        </FormHelperText>
                                    ) : null}
                                </FormControl>

                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">
                                        Category
                                    </InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        label="Category"
                                        {...formik.getFieldProps("category")}
                                    >
                                        {productCategories.map(
                                            (item, index) => (
                                                <MenuItem
                                                    key={index}
                                                    value={item}
                                                    className="capitalize"
                                                >
                                                    {item}
                                                </MenuItem>
                                            )
                                        )}
                                    </Select>
                                    {formik.touched.category &&
                                    formik.errors.category ? (
                                        <FormHelperText error>
                                            {formik.errors.category}
                                        </FormHelperText>
                                    ) : null}
                                </FormControl>

                                <FormControl>
                                    <TextField
                                        label="Description"
                                        multiline
                                        rows={6}
                                        {...formik.getFieldProps("description")}
                                    />
                                    {formik.touched.description &&
                                    formik.errors.description ? (
                                        <FormHelperText error>
                                            {formik.errors.description}
                                        </FormHelperText>
                                    ) : null}
                                </FormControl>

                                <FormControl className="text-black">
                                    <FormControlLabel
                                        labelPlacement="start"
                                        className="self-start"
                                        label="Free Shipping"
                                        control={
                                            <Checkbox
                                                label="Free Shipping"
                                                checked={
                                                    formik.values.freeShipping
                                                }
                                                {...formik.getFieldProps(
                                                    "freeShipping"
                                                )}
                                            />
                                        }
                                    />
                                </FormControl>

                                <Button
                                    disabled={isPending}
                                    variant="contained"
                                    color="primary"
                                    type="submit"
                                >
                                    Update
                                </Button>
                            </form>
                        );
                    }}
                </Formik>
            )}
        </div>
    );
};

export default page;
