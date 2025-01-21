import crypto from "crypto";

const getRandomString = () => {
    const string = crypto.randomBytes(64).toString("hex");
    console.log(string);
};

getRandomString();
