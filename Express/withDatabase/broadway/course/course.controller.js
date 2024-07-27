import express from "express";
import validateReqBody from "../middlewares/validation.middleware.js";
import { addCourseDataValidation } from "./course.validation.js";
import { validateAdminToken } from "./course.service.js";
import Course from "./course.model.js";

const router = express.Router();

// *POST: add course
router.post(
    "/course/add",
    validateReqBody(addCourseDataValidation),
    validateAdminToken,
    async (req, res) => {
        // extract course data from req.body
        const course = req.body;
        course.addedBy = req.loggedInUserId;

        // add course
        await Course.create(course);

        // send response
        return res.status(200).send({
            message: "Course added successfully ...",
            courseDetail: course,
        });
    }
);

// *GET: display all courses
router.get("/course/list", validateAdminToken, async (req, res) => {
    const courses = await Course.aggregate([
        {
            $match: {},
        },
        {
            $lookup: {
                from: "admins",
                localField: "addedBy",
                foreignField: "_id",
                as: "adminData",
            },
        },
        {
            $project: {
                name: 1,
                price: 1,
                duration: 1,
                adminEmail: { $first: "$adminData.email" },
            },
        },
    ]);

    return res
        .status(200)
        .send({ message: "All the courses are ...", courseList: courses });
});

export default router;
