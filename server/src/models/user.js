import mongoose from "mongoose";
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter name"],
  },
  email: {
    type: String,
    required: [true, "Please enter email"],
    unique: [true, "Email already exists"],
    validate: {
      validator: function (v) {
        return /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(v);
      },
      message: (props) => `${props.value} is not a valid email address!`,
    },
  },
  password: {
    type: String,
    required: [true, "Please enter password"],
  },
  enrolledCourses: [
    {
      course: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course",
      },
      completed: {
        type: Boolean,
        default: false,
      },
    },
  ],
});

//method
userSchema.methods.generateJwtToken = function () {
  try {
    return jwt.sign({ user: this._id.toString() }, process.env.SECRET_KEY);
  } catch (error) {
    return error;
  }
};

const User = mongoose.model("User", userSchema);
export default User;
