import { Router } from "express";
const router = Router();

/**
 * Route     /api/user
 * Des       Get all Users
 * Params    none
 * Access    Public
 * Method    GET
 */

router.post("/", (req, res) => {});

router.get("*", (req, res) => {
  try {
    res.status(404).json({ message: "Route doesn't exist" });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
});

export default router;
