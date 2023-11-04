import Course from "../models/course.js";

/* Get All Courses */

export const getCourse = async (req, res) => {
  try {
    const { page, limit } = req.query;
    const startIndex = (Number(page) - 1) * Number(limit);
    const total = await Course.countDocuments({});
    const courses = await Course.find().limit(Number(limit)).skip(startIndex);
    if (!courses) {
      return res
        .status(404)
        .json({ success: false, message: "No course found" });
    }
    return res.status(200).json({
      success: true,
      data: courses,
      totalPages: Math.ceil(total / Number(limit)),
      currentPage: Number(page),
    });
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message });
  }
};

/* Get Course By Id */

export const getCourseById = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      throw new Error("Id is required");
    }
    const course = await Course.findById(id);
    if (!course) {
      return res.status(404).json({ message: "Course doesn't exist!" });
    }
    return res.status(200).json({ success: true, data: course });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

/* Add Course */

export const addCourse = async (req, res) => {
  try {
    const course = req.body;
    if (!course) {
      throw new Error("Course is required");
    }

    const newCourse = await Course.create(course);
    if (!newCourse) {
      return res
        .status(400)
        .json({ success: false, message: "Course cannot be created" });
    }
    return res.status(201).json({ success: true, data: newCourse });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

/* like a Course */

export const likeCourse = async (req, res) => {
  try {
    const { userId } = req.body;
    const { courseId } = req.params;
    if (!userId || !courseId) {
      return res
        .status(400)
        .json({ success: false, message: "userId and courseId are required" });
    }

    const course = await Course.findById(courseId);
    if (!course) {
      return res
        .status(404)
        .json({ success: false, message: "Course not found" });
    }

    // Check if the user has already liked the course
    const isLiked = course.likes.find(
      (like) => like.userId.toString() === userId.toString()
    );

    if (isLiked) {
      return res
        .status(400)
        .json({ success: false, message: "Course already liked" });
    }

    // Add the user's ID to the course's likes array
    course.likes.push({ userId });
    await course.save();

    return res.status(201).json({ success: true, message: "Course liked" });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

/* Search  Courses */

export const searchCourse = async (req, res) => {
  try {
    const { query } = req.params;
    if (!query) {
      throw new Error("Query is required");
    }
    const courses = await Course.find({
      $or: [
        { name: { $regex: query, $options: "i" } },
        { instructor: { $regex: query, $options: "i" } },
        { description: { $regex: query, $options: "i" } },
      ],
    });

    if (courses?.length === 0) {
      return res
        .status(404)
        .json({ success: false, message: "No course found" });
    }

    return res.status(200).json({ success: true, data: courses });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

/* Get Enrolled Course */

export const getEnrolledCourses = async (req, res) => {
  try {
    const courses = await Course.find();
    const enrolledCourses = courses.filter((course) => {
      if (course.students.length > 0) {
        return course;
      }
    });
    if (!enrolledCourses) {
      return res
        .status(404)
        .json({ success: false, message: "No course enrolled yet" });
    }
    return res.status(200).json({ success: true, data: enrolledCourses });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

/* Filter  Courses */

export const filterCourse = async (req, res) => {
  try {
    const { duration, enrollmentStatus, schedule } = req.body;
    if (!duration && !enrollmentStatus && !schedule) {
      throw new Error("At least one filter is required");
    }
    const courses = await Course.find(
      { duration },
      { enrollmentStatus },
      { schedule }
    );
    if (courses?.length === 0) {
      return res
        .status(404)
        .json({ success: false, message: "No course found" });
    }
    return res.status(200).json({ success: true, data: courses });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};
