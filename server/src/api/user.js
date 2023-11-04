import { Router } from "express";
import {
  getAllUsers,
  getUserById,
  enrollCourse,
  getEnrolledCourses,
  markCourseCompleted,
} from "../controllers/user.js";
import verifyCookies from "../middleware/verifyCookie.js";
const router = Router();

/**
 * Route     /api/user
 * Des       Get all Users
 * Params    none
 * Access    Public
 * Method    GET
 */

router.get("/", (req, res) => getAllUsers(req, res));

/**
 * Route     /api/user
 * Des       Get User by Id
 * Params    id
 * Access    Public
 * Method    GET
 */

router.get("/:id", (req, res) => getUserById(req, res));

/**
 * Route     /api/user/enroll/:courseId
 * Des       Enroll into a course
 * Params    courseId
 * Access    Private
 * Method    PUT
 */

router.put("/enroll/:courseId", verifyCookies, (req, res) =>
  enrollCourse(req, res)
);

/**
 * Route     /api/user/course/enrolled-courses
 * Des       Get all enrolled courses
 * Params    none
 * Access    Private
 * Method    GET
 */

router.get("/course/enrolled-courses", verifyCookies, (req, res) =>
  getEnrolledCourses(req, res)
);

/**
 * Route     /api/user/course/:courseId
 * Des       Mark course as completed
 * Params    courseId
 * Access    Private
 * Method    PUT
 */

router.put("/course/:courseId", verifyCookies, (req, res) =>
  markCourseCompleted(req, res)
);

router.get("*", (req, res) => {
  try {
    res.status(404).json({ message: "Route doesn't exist" });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
});

export default router;
