import Express from "express";
import dotenv from "dotenv";
import cors from "cors";
import DbConnect from "./helper/DbConnect.js";
import CourseApi from "./api/course.js";
dotenv.config();

const app = Express();
app.use(cors());
app.use(Express.json());

const PORT = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.send("CourseHub Server is running!");
});

//Routing
app.use("/api/course", CourseApi);

app.listen(PORT, async () => {
  try {
    await DbConnect();
    console.log(`Server is running on port: ${PORT}`);
  } catch (err) {
    console.log("Failed to Start server: ", err);
  }
});
