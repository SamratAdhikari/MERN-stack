import User from "./user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// ! register user helper
export const registerUser = async (req, res) => {
    // extract new user from req.body
    const newUser = req.body;

    // find user using email
    const user = await User.findOne({ email: newUser.email });
    console.log(newUser);

    // if user exists, throw error
    if (user) {
        return res
            .status(409)
            .send({ message: "Email already registered ... " });
    }

    // hash password
    const plainPwd = newUser.password;
    const saltRounds = 10;
    const hashedPwd = await bcrypt.hash(plainPwd, saltRounds);

    newUser.password = hashedPwd;

    // add user to db
    await User.create(newUser);

    // send response
    return res.status(201).send({
        message: "User registered successfully ...",
        userDetails: newUser,
    });
};

// ! login user helper
export const loginUser = async (req, res) => {
    // extract login credentials from req.body
    const loginCredentials = req.body;

    // find user using email
    const user = await User.findOne({ email: loginCredentials.email });

    // if not user, throw error
    if (!user) {
        return res.status(404).send({ message: "Invalid Credentials" });
    }

    // compare password using bcrypt
    const plainPwd = loginCredentials.password;
    const hashedPwd = user.password;

    const isPasswordMatch = await bcrypt.compare(plainPwd, hashedPwd);

    // if not password match, throw error
    if (!isPasswordMatch) {
        return res.status(400).send({ message: "Invalid Credentials" });
    }

    // generate access token
    const payload = { email: user.email };
    const privateKey = process.env.ACCESS_TOKEN_SECRET_KEY;
    const token = jwt.sign(payload, privateKey);

    // send response
    return res.status(200).send({
        message: "Login successful",
        userDetails: user,
        accessToken: token,
    });
};
