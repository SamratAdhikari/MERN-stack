"use client";

import { productCategories } from "@/constants/general.constants";
import { productDataValidationSchema } from "@/validation/product.validation.schema";
import {
    Button,
    Checkbox,
    FormControl,
    FormControlLabel,
    FormHelperText,
    InputLabel,
    MenuItem,
    Select,
    TextField,
    Typography,
} from "@mui/material";
import { Formik } from "formik";
import React from "react";

const page = () => {
    return (
        <div className="w-full min-h-screen flex flex-col justify-center items-center bg-gray-100 py-4">
            <Formik
                initialValues={{
                    name: "",
                    price: 1,
                    brand: "",
                    quantity: 1,
                    category: "",
                    freeShipping: false,
                    description: "",
                }}
                validationSchema={productDataValidationSchema}
                onSubmit={(values) => {
                    console.log(values);
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
                                Add Product
                            </Typography>

                            <FormControl>
                                <TextField
                                    label="Name"
                                    {...formik.getFieldProps("name")}
                                />
                                {formik.touched.name && formik.errors.name ? (
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
                                {formik.touched.brand && formik.errors.brand ? (
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
                                {formik.touched.price && formik.errors.price ? (
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
                                    {productCategories.map((item, index) => (
                                        <MenuItem
                                            key={index}
                                            value={item}
                                            className="capitalize"
                                        >
                                            {item}
                                        </MenuItem>
                                    ))}
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
                                            defaultChecked
                                            {...formik.getFieldProps(
                                                "freeShipping"
                                            )}
                                        />
                                    }
                                />
                            </FormControl>

                            <Button
                                variant="contained"
                                color="primary"
                                type="submit"
                            >
                                Submit
                            </Button>
                        </form>
                    );
                }}
            </Formik>
        </div>
    );
};

export default page;
