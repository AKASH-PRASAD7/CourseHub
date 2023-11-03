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
    const { userId, courseId } = req.body;
    if (!userId || !courseId) {
      throw new Error("User Id and Course Id are required");
    }
  } catch (error) {}
};
