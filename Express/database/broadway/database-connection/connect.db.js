import mongoose from "mongoose";
import { printPurple, printPink } from "../utils/color.console.js";

const connectDB = async () => {
    try {
        await mongoose.connect(
            `mongodb+srv://Ubermensch:${encodeURIComponent(
                "MongoDB0330"
            )}@cluster0.pvq6igq.mongodb.net/training?retryWrites=true&w=majority&appName=Cluster0`
        );
        printPurple("DB connection established ...");
    } catch (error) {
        printPink("DB connection failed ...");
        printPink(error.message);
        process.exit();
    }
};

export default connectDB;
