import User from "../models/user.js";
import jwt from "jsonwebtoken";

const verifyCookie = async (req, res, next) => {
  try {
    const cookie = req.cookies["token"];
    if (!cookie) {
      return res
        .status(401)
        .json({ success: false, message: "Unauthorized Please Sign In" });
    }
    const token = jwt.verify(cookie, process.env.SECRET_KEY);
    const user = await User.findOne({ _id: token.user });
    if (user) {
      req.body = { userId: user._id, name: user.name, user, ...req.body };
      next();
    } else {
      return res
        .status(404)
        .json({ success: false, error: "User does not exist" });
    }
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export default verifyCookie;
