export const getCourse = async (req, res) => {
  try {
    res.send("CourseHub Server is running");
  } catch (err) {
    console.log("Failed to Start server: ", err);
  }
};
