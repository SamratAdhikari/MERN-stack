import Course from "./course.model";

// ! get course helper
export const getAllCourses = async (req, res) => {
    try {
        const courses = await Course.find()
            .populate("teacher")
            .populate("students");
        return res
            .status(200)
            .send({ message: "All courses retrieved", courses });
    } catch (error) {
        return res.status(500).send({ message: error.message });
    }
};

// ! add new course helper
export const createCourse = async (req, res) => {
    try {
        const courseData = req.body;
        const course = new Course(courseData);
        await course.save();
        return res
            .status(200)
            .send({ message: "New course added successfully", course });
    } catch (error) {
        return res.status(500).send({ message: error.message });
    }
};
