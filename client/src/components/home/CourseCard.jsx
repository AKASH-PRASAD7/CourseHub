import React from "react";
import { RxClock, RxAvatar } from "react-icons/rx";
import { BsBook, BsFillHeartFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const CourseCard = ({
  id,
  description,
  duration,
  name,
  thumbnail,
  syllabus,
  instructor,
}) => {
  return (
    <section className="max-w-sm">
      <div className=" bg-gray-300 shadow-xl rounded-xl ">
        <img
          className="bg-cover w-full h-52 rounded-t-xl"
          src={thumbnail}
          alt="coursepic"
        />
        <h1 className="font-mono text-xl mt-2 font-semibold text-center ">
          {name}
        </h1>
        <div className="flex gap-4 justify-center mt-2 mb-2 ">
          <span className="flex gap-2 justify-between">
            <RxClock className="text-xl mt-1" /> {duration}
          </span>
          <span className="flex gap-2 justify-between">
            <BsBook className="text-xl mt-1" /> {syllabus.length} lessons
          </span>
        </div>
        <p className="text-gray-700 text-md text-center px-2">
          {description.slice(0, 100)}
        </p>
        <span className="flex mb-2 gap-2 mt-2 justify-center">
          <RxAvatar className="text-xl mt-1" /> {instructor}
        </span>
        <div className="flex pb-4 justify-center  gap-2 ">
          <Link
            to={`course/${id}}`}
            className="bg-indigo-800 text-center  hover:bg-indigo-900 text-white font-semibold text-xl w-5/6 h-8 rounded-full"
          >
            Course Details
          </Link>
          <BsFillHeartFill className="text-gray-400 hover:text-red-500 text-2xl cursor-pointer m-1 transform transition-transform hover:scale-125" />
        </div>
      </div>
    </section>
  );
};

export default CourseCard;
