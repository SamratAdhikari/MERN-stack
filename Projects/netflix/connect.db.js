import mongoose from "mongoose";

const dbUserName = "Ubermensch";
const dbPassword = encodeURIComponent("MongoDB0330");
const dbHost = "cluster0.pvq6igq.mongodb.net";
const dbName = "training";

const connectDB = async () => {
    try {
        await mongoose.connect(
            `mongodb+srv://${dbUserName}:${dbPassword}@${dbHost}/${dbName}?retryWrites=true&w=majority&appName=Cluster0`
        );
        console.log("DB connection established ...");
    } catch (error) {
        console.log("DB connection failed ...");
        console.log(error.message);
    }
};

export default connectDB;
