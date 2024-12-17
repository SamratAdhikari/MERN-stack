import {
    Box,
    Button,
    FormControl,
    FormHelperText,
    TextField,
    Typography,
} from "@mui/material";
import { Formik } from "formik";
import * as Yup from "yup";

const UserForm = () => {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                bgcolor: "white",
                margin: "5rem",
                padding: "5rem",
                borderRadius: "1rem",
            }}
        >
            <Typography variant="h3" gutterBottom sx={{ color: "black" }}>
                User Data Collection
            </Typography>

            <Formik
                initialValues={{
                    name: "",
                }}
                validationSchema={Yup.object({
                    name: Yup.string()
                        .required("Name field is required.")
                        .trim()
                        .max(55, "Name should be at max 55 characters"),
                })}
                onSubmit={(values) => {
                    console.log(values);
                }}
            >
                {(formik) => {
                    return (
                        <form
                            onSubmit={formik.handleSubmit}
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                flexDirection: "column",
                                gap: "1rem",
                            }}
                        >
                            <FormControl>
                                <TextField
                                    label="Username"
                                    {...formik.getFieldProps("name")}
                                    sx={{ width: "20rem" }}
                                    color="success"
                                />

                                {formik.touched.name && formik.errors.name ? (
                                    <FormHelperText error>
                                        {formik.errors.name}
                                    </FormHelperText>
                                ) : null}
                            </FormControl>

                            <Button
                                variant="contained"
                                color="success"
                                type="submit"
                                onClick={() => {    
                                    formik.isValid && alert("Submitted!!");
                                }}
                            >
                                Submit
                            </Button>
                        </form>
                    );
                }}
            </Formik>
        </Box>
    );
};

export default UserForm;
