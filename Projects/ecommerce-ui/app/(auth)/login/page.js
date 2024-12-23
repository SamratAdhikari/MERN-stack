"use client";

import { loginUserValidationSchema } from "@/validation/login.user.validation.schema";
import { Box, Button, FormControl, TextField, Typography } from "@mui/material";
import axios from "axios";
import { Formik } from "formik";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

// helo
const page = () => {
    const router = useRouter();

    return (
        <Box className="flex justify-center items-center flex-col">
            <Typography variant="h3" color="success">
                Sign in
            </Typography>

            <Formik
                initialValues={{
                    email: "",
                    password: "",
                }}
                validationSchema={loginUserValidationSchema}
                onSubmit={async (values) => {
                    try {
                        const response = await axios.post(
                            "http://localhost:8080/user/login",
                            values
                        );

                        localStorage.setItem(
                            "token",
                            response.data.accessToken
                        );

                        localStorage.setItem(
                            "userRole",
                            response.data.userDetails.role
                        );
                        router.push("/");
                    } catch (err) {
                        console.log(err);
                    }
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
                                    {...formik.getFieldProps("password")}
                                />
                                {formik.touched.password &&
                                formik.errors.password ? (
                                    <p className="text-red-500">
                                        {formik.errors.password}
                                    </p>
                                ) : null}
                            </FormControl>
                            <Button
                                type="submit"
                                variant="contained"
                                color="secondary"
                            >
                                login
                            </Button>
                            <div className="text-xs text-gray-500 justify-self-center">
                                <Link href={"/register"}>
                                    New here? Register
                                </Link>
                            </div>
                        </form>
                    );
                }}
            </Formik>
        </Box>
    );
};

export default page;
