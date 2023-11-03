import Express from "express";
import dotenv from "dotenv";
import cors from "cors";
import DbConnect from "./helper/DbConnect.js";
import CourseApi from "./api/course.js";
import UserApi from "./api/user.js";
import AuthApi from "./api/auth.js";
dotenv.config();

const app = Express();
app.use(cors());
app.use(Express.json());

app.use((err, req, res, next) => {
  if (err instanceof SyntaxError) {
    return res.status(400).json({
      success: false,
      message: "Invalid JSON format in the request body",
    });
  }
  next(err);
});

const PORT = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.send("CourseHub Server is running!");
});

//Routing
app.use("/api/course", CourseApi);
app.use("/api/user", UserApi);
app.use("/api/auth", AuthApi);

app.listen(PORT, async () => {
  try {
    await DbConnect();
    console.log(`Server is running on port: ${PORT}`);
  } catch (err) {
    console.log("Failed to Start server: ", err);
  }
});
