import mongoose from "mongoose";

const connectDB = () => {
    try {
        mongoose.connect(
            `mongodb+srv://Ubermensch:MongoDB0330@cluster0.pvq6igq.mongodb.net/training?retryWrites=true&w=majority&appName=Cluster0`
        );
        console.log(`DB connection established!`);
    } catch (error) {
        console.log(`DB connection failed!`);
        console.log(error.message);
        process.exit();
    }
};

export default connectDB;
