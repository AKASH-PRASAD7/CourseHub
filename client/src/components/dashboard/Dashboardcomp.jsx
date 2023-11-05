import React, { useState, useEffect } from "react";

const Dashboardcomp = () => {
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  const sampleEnrolledCourses = [
    {
      courseId: 1,
      courseName: "Introduction to React Native",
      instructor: "John Doe",
      thumbnail: "your.image.here1",
      dueDate: "2023-12-31",
      progress: 60,
    },
    {
      courseId: 2,
      courseName: "Advanced JavaScript",
      instructor: "Jane Smith",
      thumbnail: "your.image.here2",
      dueDate: "2023-12-15",
      progress: 40,
    },
    // Add more enrolled courses as needed
  ];

  const fetchEnrolledCourses = () => {
    setTimeout(() => {
      setEnrolledCourses(sampleEnrolledCourses);
    }, 1000);
  };

  useEffect(() => {
    fetchEnrolledCourses();
  }, []);

  const markCourseCompleted = (courseId) => {
    // Implement your mark course as completed logic here
    alert(`Course ${courseId} marked as completed`); // Replace with your actual logic
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4">Student Dashboard</h1>
      {enrolledCourses.length === 0 ? (
        <div>No enrolled courses yet.</div>
      ) : (
        <div>
          {enrolledCourses.map((course) => (
            <div
              key={course.courseId}
              className="border p-4 mb-4 flex items-center"
            >
              <img
                src={course.thumbnail}
                alt={course.courseName}
                className="w-16 h-16 rounded-full mr-4"
              />
              <div>
                <h2 className="text-xl font-semibold">{course.courseName}</h2>
                <p>Instructor: {course.instructor}</p>
                <p>Due Date: {course.dueDate}</p>
                <div className="flex items-center mt-2">
                  <progress
                    value={course.progress}
                    max="100"
                    className="w-24"
                  />
                  <button
                    onClick={() => markCourseCompleted(course.courseId)}
                    className="ml-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded"
                  >
                    Mark as Completed
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dashboardcomp;
