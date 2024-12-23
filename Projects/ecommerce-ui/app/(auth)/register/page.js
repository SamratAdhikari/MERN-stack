"use client";

import { registerUserValidationSchema } from "@/validation/register.user.validation.schema";
import {
    Box,
    Button,
    FormControl,
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
        <Box>
            <Formik
                initialValues={{
                    email: "",
                    password: "",
                    confirmPassword: "",
                    firstname: "",
                    lastname: "",
                    gender: "",
                    role: "",
                }}
                validationSchema={registerUserValidationSchema}
                onSubmit={(values) => {
                    console.log(values);
                }}
            >
                {(formik) => {
                    return (
                        <form
                            onSubmit={formik.handleSubmit}
                            className="flex flex-col w-[400px] mt-6 bg-slate-100 rounded-e-lg p-6 gap-4 rounded-lg shadow-lg"
                        >
                            <Typography
                                variant="h4"
                                className="text-blue-950 self-center"
                            >
                                Register
                            </Typography>
                            <FormControl>
                                <TextField
                                    label="Email"
                                    {...formik.getFieldProps("email")}
                                />
                                {formik.touched.email && formik.errors.email ? (
                                    <p className="text-red-500 text-xs">
                                        {formik.errors.email}
                                    </p>
                                ) : null}
                            </FormControl>
                            <FormControl>
                                <TextField
                                    label="Password"
                                    type="password"
                                    {...formik.getFieldProps("password")}
                                />
                                {formik.touched.password &&
                                formik.errors.password ? (
                                    <p className="text-red-500 text-xs">
                                        {formik.errors.password}
                                    </p>
                                ) : null}
                            </FormControl>
                            <FormControl>
                                <TextField
                                    label="Confirm Password"
                                    type="password"
                                    {...formik.getFieldProps("confirmPassword")}
                                />
                                {formik.touched.confirmPassword &&
                                formik.errors.confirmPassword ? (
                                    <p className="text-red-500 text-xs">
                                        {formik.errors.confirmPassword}
                                    </p>
                                ) : null}
                            </FormControl>
                            <FormControl>
                                <TextField
                                    label="Firstname"
                                    {...formik.getFieldProps("firstname")}
                                />
                                {formik.touched.firstname &&
                                formik.errors.firstname ? (
                                    <p className="text-red-500 text-xs">
                                        {formik.errors.firstname}
                                    </p>
                                ) : null}
                            </FormControl>
                            <FormControl>
                                <TextField
                                    label="Lastname"
                                    {...formik.getFieldProps("lastname")}
                                />
                                {formik.touched.lastname &&
                                formik.errors.lastname ? (
                                    <p className="text-red-500 text-xs">
                                        {formik.errors.lastname}
                                    </p>
                                ) : null}
                            </FormControl>
                            <FormControl>
                                <InputLabel id="demo-simple-select-label">
                                    Gender
                                </InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    {...formik.getFieldProps("gender")}
                                    label="Gender"
                                >
                                    <MenuItem value={"male"}>Male</MenuItem>
                                    <MenuItem value={"female"}>Female</MenuItem>
                                    <MenuItem value={"others"}>Others</MenuItem>
                                </Select>
                            </FormControl>
                            <FormControl>
                                <InputLabel id="demo-simple-select-label">
                                    Role
                                </InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    {...formik.getFieldProps("role")}
                                    label="Role"
                                    defaultValue="seller"
                                >
                                    <MenuItem value={"seller"}>Seller</MenuItem>
                                    <MenuItem value={"buyer"}>Buyer</MenuItem>
                                </Select>
                            </FormControl>
                            <Button
                                type="submit"
                                variant="contained"
                                color="info"
                            >
                                register
                            </Button>
                        </form>
                    );
                }}
            </Formik>
        </Box>
    );
};

export default page;
