"use client";

import { registerUserValidationSchema } from "@/validation/register.user.validation.schema";
import { Box, Button, FormControl, TextField, Typography } from "@mui/material";
import { Formik } from "formik";
import React from "react";

const page = () => {
    return (
        <Box className="flex justify-center items-center flex-col">
            <Typography variant="h3" color="success">
                Register
            </Typography>

            <Formik
                initialValues={{
                    email: "",
                    password: "",
                    confirmPassword: "",
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
                            className="flex flex-col gap-2 w-[400px] mt-6 bg-slate-100 rounded-e-lg p-6"
                        >
                            <FormControl>
                                <TextField
                                    label="Email"
                                    {...formik.getFieldProps("email")}
                                />
                                {formik.touched.email && formik.errors.email ? (
                                    <p className="text-red-500">
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
                                    <p className="text-red-500">
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
                                    <p className="text-red-500">
                                        {formik.errors.confirmPassword}
                                    </p>
                                ) : null}
                            </FormControl>
                            <Button
                                type="submit"
                                variant="contained"
                                color="secondary"
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
