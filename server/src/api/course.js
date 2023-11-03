import { Router } from "express";
import {
  getCourse,
  getCourseById,
  likeCourse,
  addCourse,
} from "../controllers/course.js";
const router = Router();

/**
 * Route     /api/course
 * Des       Get all courses
 * Params    none
 * Access    Public
 * Method    GET
 */

router.get("/", (req, res) => getCourse(req, res));

/**
 * Route     /api/course:id
 * Des       Get Course By Id
 * Params    Id
 * Access    Public
 * Method    GET
 */

router.get("/:id", (req, res) => getCourseById(req, res));

/**
 * Route     /api/course
 * Des       Add Course
 * Params    none
 * Access    Public
 * Method    POST
 */

router.post("/", (req, res) => addCourse(req, res));

/**
 * Route     /api/course:courseId/user:userId
 * Des       Like a course
 * Params    userId, courseId
 * Access    Public
 * Method    PUT
 */

router.put("/:courseId/user/:userId", (req, res) => likeCourse(req, res));

router.get("*", (req, res) => {
  try {
    res.status(404).json({ message: "Route doesn't exist" });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
});

export default router;
