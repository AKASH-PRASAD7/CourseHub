import { Router } from "express";
import { getAllUsers, getUserById, enrollCourse } from "../controllers/user.js";
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
 * Route     /api/user
 * Des       Enroll into a course
 * Params    userId, courseId
 * Access    Public
 * Method    PUT
 */

router.put("/enroll", (req, res) => enrollCourse(req, res));

router.get("*", (req, res) => {
  try {
    res.status(404).json({ message: "Route doesn't exist" });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
});

export default router;
