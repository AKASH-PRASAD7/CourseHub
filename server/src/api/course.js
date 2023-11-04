import { Router } from "express";
import {
  getCourse,
  getCourseById,
  likeCourse,
  addCourse,
  searchCourse,
} from "../controllers/course.js";
import verifyCookie from "../middleware/verifyCookie.js";
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
 * Route     /api/course:courseId
 * Des       Like a course
 * Params    userId, courseId
 * Access    Private
 * Method    PUT
 */

router.put("/:courseId", verifyCookie, (req, res) => likeCourse(req, res));

/**
 * Route     /api/course/search:query
 * Des       search course by title or
 * Params    none
 * Access    Public
 * Method    GET
 */

router.get("/search/:query", (req, res) => searchCourse(req, res));

/**
 * Route     /api/course/filters:query
 * Des       Filter course by duration, open/closed, schedule
 * Params    none
 * Access    Public
 * Method    GET
 */

router.get("/filters/:query", (req, res) => filterCourse(req, res));

router.get("*", (req, res) => {
  try {
    res.status(404).json({ message: "Route doesn't exist" });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
});

export default router;
