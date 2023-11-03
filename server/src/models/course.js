import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter course name"],
  },
  instructor: {
    type: String,
    required: [true, "Please enter instructor name"],
  },
  description: {
    type: String,
    required: [true, "Please enter course description"],
  },
  enrollmentStatus: {
    type: String,
    enum: ["Open", "Closed", "In Progress"],
    default: "Open",
  },
  thumbnail: {
    type: String,
  },
  duration: {
    type: String,
  },
  schedule: {
    type: String,
  },
  location: {
    type: String,
  },
  prerequisites: {
    type: [String],
  },
  syllabus: [
    {
      week: {
        type: Number,
        required: [true, "Please enter week number"],
      },
      topic: {
        type: String,
        required: [true, "Please enter topic"],
      },
      content: {
        type: String,
        required: [true, "Please enter content"],
      },
    },
  ],
  students: [
    {
      id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
      name: String,
      email: String,
    },
  ],
  likes: {
    type: Number,
    default: 0,
  },
});

const Course = mongoose.model("Course", courseSchema);

export default Course;
