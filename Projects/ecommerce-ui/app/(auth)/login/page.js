"use client";

import $axios from "@/lib/axios/axios.instance";
import { loginUserValidationSchema } from "@/validation/login.user.validation.schema";
import {
    Box,
    Button,
    FormControl,
    LinearProgress,
    TextField,
    Typography,
} from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import { Formik } from "formik";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const Page = () => {
    const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            router.push("/");
        }
    }, [router]);

    const { isLoading, error, mutate } = useMutation({
        mutationKey: ["login-user"],
        mutationFn: async (values) => {
            const response = await $axios.post("/user/login", values);
            return response.data; // Return the data for further processing
        },
        onSuccess: (data) => {
            localStorage.setItem("token", data.accessToken);
            localStorage.setItem("userRole", data.userDetails.role);
            localStorage.setItem("firstname", data.userDetails.firstname);
            router.push("/");
        },
    });

    return (
        <Box className="flex justify-center items-center flex-col w-[400px] bg-slate-100 rounded-e-lg p-6 gap-6">
            {isLoading && <LinearProgress color="secondary" />}
            <Typography variant="h4" className="text-black">
                Login
            </Typography>

            <Formik
                initialValues={{
                    email: "",
                    password: "",
                }}
                validationSchema={loginUserValidationSchema}
                onSubmit={(values) => {
                    mutate(values); // Pass form values to the mutation function
                }}
            >
                {(formik) => (
                    <form
                        onSubmit={formik.handleSubmit}
                        className="flex flex-col gap-4 w-full"
                    >
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
                        <Button
                            type="submit"
                            variant="contained"
                            color="secondary"
                            disabled={isLoading}
                        >
                            Login
                        </Button>
                        <div className="text-xs text-gray-500 self-center hover:text-blue-500">
                            <Link href={"/register"}>New here? Register</Link>
                        </div>
                    </form>
                )}
            </Formik>
        </Box>
    );
};

export default Page;
