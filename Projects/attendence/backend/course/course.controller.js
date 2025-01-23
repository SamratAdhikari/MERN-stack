import express from "express";
import { courseValidationSchema } from "./course.validation";
import validateReqBody from "../middleware/validate.req.body";
import { isUser } from "../middleware/authenticate.middleware";
import { createCourse } from "./course.service";

const router = express.Router();

// *GET: show all courses
router.get("/list", isUser, getAllCourses);

// *POST: add a new course
router.post(
    "/add",
    isUser,
    validateReqBody(courseValidationSchema),
    createCourse
);

// *GET: get a course by ID
router.get("/:id", validateMongoIdFromParams);
