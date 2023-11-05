import React, { useEffect } from "react";
import CourseCard from "./CourseCard";
import { useDispatch, useSelector } from "react-redux";
import { getNextCourses } from "../../redux/course/action";
import Loader from "../common/Loader";
import Alert from "../common/Alert";
import Pagination from "./Pagination";

const CourseContainer = () => {
  const dispatch = useDispatch();
  const {
    courses: { data, totalPages, currentPage },
    error,
    loading,
  } = useSelector((state) => state.course);
  console.log(data);
  useEffect(() => {
    dispatch(getNextCourses(1));
  }, []);

  return (
    <section className="pb-8 ">
      <div className="mx-12">
        <h1 className="font-mono text-gray-900 font-semibold sm:text-2xl md:text-4xl lg:text-6xl m-4 text-center">
          Zero To Mastery Courses!
        </h1>
        <p className="font-mono text-gray-600  sm:text-base md:text-lg lg:text-xl">
          Take one of CourseHub's range of Python courses and learn how to code
          using this incredibly useful language. Its simple syntax and
          readability makes Python perfect for Flask, Django, data science, and
          machine learning. You’ll learn how to build everything from games to
          sites to apps.{" "}
        </p>
      </div>
      <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4 mx-8 mt-8">
        {loading ? (
          <Loader />
        ) : error ? (
          <Alert type="error" message={error} />
        ) : (
          data?.map((course) => (
            <CourseCard
              key={course._id}
              id={course._id}
              description={course.description}
              duration={course.duration}
              name={course.name}
              thumbnail={course.thumbnail}
              syllabus={course.syllabus}
              instructor={course.instructor}
            />
          ))
        )}
      </div>
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        getNextCourses={getNextCourses}
      />
    </section>
  );
};

export default CourseContainer;
