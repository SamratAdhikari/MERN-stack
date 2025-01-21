"use client";

import $axios from "@/lib/axios/axios.instance";
import { registerUserValidationSchema } from "@/validation/register.user.validation.schema";
import {
    Box,
    Button,
    FormControl,
    InputLabel,
    LinearProgress,
    MenuItem,
    Select,
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

    const { isPending, error, mutate } = useMutation({
        mutationKey: ["register-user"],
        mutationFn: async (values) => {
            const response = await $axios.post("/user/register", values);
            return response.data;
        },

        onSuccess: (data) => {
            // localStorage.setItem("token", data.accessToken);
            // localStorage.setItem("userRole", data.userDetails.role);
            // localStorage.setItem("firstname", data.userDetails.firstname);
            router.push("/login");
        },
    });

    return (
        <Box>
            {isPending && <LinearProgress color="secondary" />}
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
                    mutate(values); // Pass form values to mutate
                }}
            >
                {(formik) => {
                    return (
                        <form
                            onSubmit={formik.handleSubmit}
                            className="flex flex-col w-[400px] bg-slate-100 rounded-e-lg p-6 gap-4 rounded-lg shadow-lg"
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
                                <InputLabel id="gender-select-label">
                                    Gender
                                </InputLabel>
                                <Select
                                    labelId="gender-select-label"
                                    id="gender-select"
                                    {...formik.getFieldProps("gender")}
                                    label="Gender"
                                >
                                    <MenuItem value={"male"}>Male</MenuItem>
                                    <MenuItem value={"female"}>Female</MenuItem>
                                    <MenuItem value={"others"}>Others</MenuItem>
                                </Select>
                            </FormControl>
                            <FormControl>
                                <InputLabel id="role-select-label">
                                    Role
                                </InputLabel>
                                <Select
                                    labelId="role-select-label"
                                    id="role-select"
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
                                color="secondary"
                                disabled={isPending}
                            >
                                Register
                            </Button>
                            <div className="text-xs text-gray-500 self-center hover:text-blue-500">
                                <Link href={"/login"}>
                                    Already have an account? Login
                                </Link>
                            </div>
                        </form>
                    );
                }}
            </Formik>
        </Box>
    );
};

export default Page;
