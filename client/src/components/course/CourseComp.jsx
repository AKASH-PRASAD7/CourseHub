import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../common/Loader";

const CourseComp = () => {
  const [course, setCourse] = useState(null);
  const [expanded, setExpanded] = useState(false);
  // Get the course ID from the URL using useParams
  const { courseId } = useParams();

  // Simulated data (you should fetch course details from your API)
  const sampleCourseData = {
    id: courseId,
    name: "Introduction to React Native",
    instructor: "John Doe",
    description:
      "Learn the basics of React Native development and build your first mobile app.",
    enrollmentStatus: "Open",
    thumbnail:
      "https://images.ctfassets.net/aq13lwl6616q/34oTrOaPCY3VKnubPKZCKv/a8eb7d89a56594d9d5acb91252b451b5/MTCI.png",
    duration: "8 weeks",
    schedule: "Tuesdays and Thursdays, 6:00 PM - 8:00 PM",
    location: "Online",
    prerequisites: ["Basic JavaScript knowledge", "Familiarity with React"],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to React Native",
        content:
          "Overview of React Native, setting up your development environment.",
      },
      {
        week: 2,
        topic: "Building Your First App",
        content: "Creating a simple mobile app using React Native components.",
      },
      // Additional weeks and topics...
    ],
  };

  // Simulated API call to fetch course details
  const fetchCourseDetails = () => {
    // Simulate an API call delay
    setTimeout(() => {
      setCourse(sampleCourseData);
    }, 1000); // Adjust the delay as needed
  };

  useEffect(() => {
    fetchCourseDetails(); // Fetch course details when the component mounts
  }, []);

  if (!course) {
    return <Loader />; // You can display a loading message
  }
  const toggleAccordion = () => {
    setExpanded(!expanded);
  };
  const enrollCourse = () => {
    // Implement your enroll course logic here
    alert("Course enrolled!"); // Replace with your actual logic
  };
  return (
    <section className="h-screen">
      <div className="p-4">
        <div
          className="relative w-full h-80 rounded-xl bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${course.thumbnail})` }}
        >
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40"></div>
          <div className="absolute top-4 left-4 text-white">
            <h2 className="text-2xl font-semibold">{course.name}</h2>
            <p>Instructor: {course.instructor}</p>
            <p>Duration: {course.duration}</p>
            <p>Enrollment Status: {course.enrollmentStatus}</p>
            <p>Schedule: {course.schedule}</p>
            <button
              onClick={enrollCourse}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded"
            >
              Enroll
            </button>
          </div>
        </div>
        <p className="text-gray-600 mt-6">{course.description}</p>
        <h3
          className="text-xl font-semibold mt-6 cursor-pointer"
          onClick={toggleAccordion}
        >
          Syllabus
        </h3>
        {expanded && (
          <ul className="list-disc ml-6">
            {course.syllabus.map((item) => (
              <li key={item.week}>
                <strong>Week {item.week}:</strong> {item.topic} - {item.content}
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
};

export default CourseComp;
