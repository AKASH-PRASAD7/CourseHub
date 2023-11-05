import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../common/Loader";
import { useDispatch, useSelector } from "react-redux";
import { getCourseById } from "../../redux/course/action";
import Alert from "../common/Alert";

const CourseComp = () => {
  const dispatch = useDispatch();
  const { course, error, loading } = useSelector((state) => state.course);
  const [expanded, setExpanded] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    dispatch(getCourseById(id));
  }, [id]);

  if (error) return <Alert type="error" message={error} />;
  const toggleAccordion = () => {
    setExpanded(!expanded);
  };
  const enrollCourse = () => {
    alert("Course enrolled!");
  };
  return (
    <section className="h-screen">
      {loading ? (
        <Loader />
      ) : (
        course?.data && (
          <div className="p-4">
            <div
              className="relative w-full h-80 rounded-xl bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${course.data.thumbnail})` }}
            >
              <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40"></div>
              <div className="absolute top-4 left-4 text-white">
                <h2 className="text-2xl font-semibold">{course.data.name}</h2>
                <p>Instructor: {course.data.instructor}</p>
                <p>Duration: {course.data.duration}</p>
                <p>Enrollment Status: {course.data.enrollmentStatus}</p>
                <p>Schedule: {course.data.schedule}</p>
                <button
                  onClick={enrollCourse}
                  className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded"
                >
                  Enroll
                </button>
              </div>
            </div>
            <p className="text-gray-600 mt-6">{course.data.description}</p>
            <h3
              className="text-xl font-semibold mt-6 cursor-pointer"
              onClick={toggleAccordion}
            >
              Syllabus
            </h3>
            {expanded && (
              <ul className="list-disc ml-6">
                {course.data.syllabus.map((item) => (
                  <li key={item.week}>
                    <strong>Week {item.week}:</strong> {item.topic} -{" "}
                    {item.content}
                  </li>
                ))}
              </ul>
            )}
          </div>
        )
      )}
    </section>
  );
};

export default CourseComp;
