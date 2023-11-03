import Course from "../models/course.js";

/* Get All Courses */

export const getCourse = async (req, res) => {
  try {
    const allCourses = await Course.find();
    if (!allCourses) {
      return res.status(404).json({ message: "No course" });
    }
    return res.status(200).json({ success: true, data: allCourses });
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message });
  }
};

/* Get Course By Id */

export const getCourseById = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      throw new Error("Id is required");
    }
    const course = await Course.findById(id);
    if (!course) {
      return res.status(404).json({ message: "Course doesn't exist!" });
    }
    return res.status(200).json({ success: true, data: course });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

/* Add Course */

export const addCourse = async (req, res) => {
  try {
    const course = req.body;
    if (!course) {
      throw new Error("Course is required");
    }

    const newCourse = await Course.create(course);
    if (!newCourse) {
      return res
        .status(400)
        .json({ success: false, message: "Course cannot be created" });
    }
    return res.status(201).json({ success: true, data: newCourse });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

/* like a Course */

export const likeCourse = async (req, res) => {
  try {
    const { userId, courseId } = req.params;
    if (!userId || !courseId) {
      return res
        .status(400)
        .json({ success: false, message: "userId and courseId are required" });
    }

    const course = await Course.findById(courseId);
    if (!course) {
      return res
        .status(404)
        .json({ success: false, message: "Course not found" });
    }

    // Check if the user has already liked the course
    if (course.likes.some((like) => like.id.toString() === userId)) {
      return res.status(400).json({
        success: false,
        message: "Course is already liked by the user",
      });
    }

    // Add the user's ID to the course's likes array
    course.likes.push({ id: userId });
    await course.save();

    return res.status(201).json({ success: true, message: "Course liked" });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};
