import { Router } from "express";
import { getCourse } from "../controllers/course.js";
const router = Router();

router.get("/", (req, res) => getCourse(req, res));

export default router;
