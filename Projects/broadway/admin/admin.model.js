import mongoose from "mongoose";

// set schema
const adminSchema = new mongoose.Schema({
    password: {
        type: String,
        required: true,
        trim: true,
    },
    firstname: {
        type: String,
        required: true,
        maxlength: 30,
        trim: true,
        lowercase: true,
    },
    lastname: {
        type: String,
        required: true,
        maxlength: 30,
        trim: true,
        lowercase: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        maxlength: 55,
        lowercase: true,
    },
});

// create table
const Admin = mongoose.model("Admin", adminSchema);

export default Admin;
