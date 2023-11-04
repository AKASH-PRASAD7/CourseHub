import User from "../models/user.js";
import Course from "../models/course.js";

/* Get All Users */

export const getAllUsers = async (req, res) => {
  try {
    const allUsers = await User.find();
    if (!allUsers) {
      return res.status(404).json({ message: "No user" });
    }
    return res.status(200).json({ success: true, data: allUsers });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

/* Get user by Id */

export const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      throw new Error("Id is required");
    }
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    return res.status(200).json({ success: true, data: user });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

/* Enroll into a course */

export const enrollCourse = async (req, res) => {
  try {
    const { userId } = req.body;
    const { courseId } = req.params;
    if (!userId || !courseId) {
      throw new Error("User Id and Course Id are required");
    }
    const user = await User.findById(userId);
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }
    const course = await Course.findById(courseId);
    if (!course) {
      return res
        .status(404)
        .json({ success: false, message: "Course not found" });
    }
    const isEnrolled = user.enrolledCourses.find(
      (course) => course.courseId.toString() === courseId
    );
    const isStudent = course.students.find(
      (student) => student.id.toString() === userId
    );
    if (!isEnrolled && !isStudent) {
      user.enrolledCourses.push({ courseId });
      course.students.push({ id: userId, name: user.name, email: user.email });
      await user.save();
      await course.save();
      return res
        .status(200)
        .json({ success: true, message: "Enrolled successfully" });
    }
    return res
      .status(400)
      .json({ success: false, message: "Already enrolled" });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

/* Get all enrolled course */

export const getEnrolledCourses = async (req, res) => {
  try {
    const { userId } = req.body;
    if (!userId) {
      throw new Error("User Id is required");
    }
    const user = await User.findById(userId);
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }
    return res
      .status(200)
      .json({ success: true, data: user.enrolledCourses, message: "Success" });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

/* Mark course as completed */

export const markCourseCompleted = async (req, res) => {
  try {
    const { userId } = req.body;
    const { courseId } = req.params;
    if (!userId || !courseId) {
      throw new Error("User Id and Course Id are required");
    }
    const user = await User.findById(userId);
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }
    user.enrolledCourses.forEach((course) => {
      if (course.courseId.toString() === courseId) {
        course.completed = true;
      }
    });
    await user.save();
    return res
      .status(200)
      .json({ success: true, message: "Course marked as completed" });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};
