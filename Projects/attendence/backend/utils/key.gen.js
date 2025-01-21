import crypto from "crypto";

const generateRandomKey = () => {
    const string = crypto.randomBytes(64).toString("hex");
    console.log(string);
};

generateRandomKey();
