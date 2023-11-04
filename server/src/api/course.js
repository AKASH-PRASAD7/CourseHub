import { Router } from "express";
import {
  getCourse,
  getCourseById,
  likeCourse,
  addCourse,
  searchCourse,
  filterCourse,
  getEnrolledCourses,
} from "../controllers/course.js";
import verifyCookie from "../middleware/verifyCookie.js";
const router = Router();

/**
 * Route     /api/course/?page=1&limit=5
 * Des       Get all courses paginated
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
 * Route     /api/course/enrolled/course
 * Des       Get enrolled courses
 * Params    none
 * Access    Public
 * Method    GET
 */

router.get("/enrolled/course", (req, res) => getEnrolledCourses(req, res));

/**
 * Route     /api/course/filter/filters
 * Des       Filter course by duration, enrollmentStatus, schedule
 * Params    enrollmentStatus, schedule, duration
 * Access    Public
 * Method    GET
 */

router.get("/filter/filters", (req, res) => filterCourse(req, res));

router.get("*", (req, res) => {
  try {
    res.status(404).json({ message: "Route doesn't exist" });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
});

export default router;
