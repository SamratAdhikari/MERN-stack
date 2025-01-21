import User from "./user.model.js";
import bcrypt from "bcrypt";

// ! get users helper
export const showUsers = async (req, res) => {
    // find all users
    try {
        const users = await User.find({});
        return res.status(200).send({ message: "All users retrieved", users });
    } catch (error) {
        return res.status(500).send({ message: error });
    }
};

// ! register user helper
export const registerUser = async (req, res) => {
    // extract new user data from req.body
    const newUser = req.body;

    // find user using email
    const user = await User.findOne({ email: newUser.email });
    console.log(newUser);

    // if user exists, throw error
    if (user) {
        return res
            .status(400)
            .send({ message: "Email already registered ..." });
    }

    // hash password
    const plainPwd = newUser.password;
    const saltRounds = process.env.SALT;
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
    const credentials = req.body;

    // find user using email
    const user = await User.findOne({ email: credentials.email });

    // if not found, throw error
    if (!user) {
        return res.status(404).send({ message: "Invalid credentials" });
    }

    // compare password using bcrypt
    const plainPwd = credentials.password;
    const hashedPwd = user.password;

    const isPwdMatch = await bcrypt.compare(plainPwd, hashedPwd);

    // if not match, throw error
    if (!isPwdMatch) {
        return res.status(404).send({ message: "Invalid credentials" });
    }

    // generate access token
    const payload = { email: user.email };
    const privateKey = process.env.ACCESS_TOKEN_SECRET_KEY;
    const token = JsonWebTokenError.sign(payload, privateKey, {
        expiresIn: process.env.ACCESS_TOKEN_EXPIRES_IN,
    });

    // send response
    return res.status(200).send({
        message: "Login successful",
        userDetails: user,
        accessToken: token,
    });
};
