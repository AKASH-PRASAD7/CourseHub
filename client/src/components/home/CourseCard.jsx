import React from "react";
import { RxClock, RxAvatar } from "react-icons/rx";
import { BsBook, BsFillHeartFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const CourseCard = () => {
  return (
    <section className="max-w-sm">
      <div className=" bg-gray-300 shadow-xl rounded-xl ">
        <img
          className="bg-cover w-full h-52 rounded-t-xl"
          src="https://images.ctfassets.net/aq13lwl6616q/5Vsjisy7BEI69JhQoonaZh/e3dad68c580259a55d3389cb897e5291/complete_web_devloper_zero_to_mastery.png"
          alt="coursepic"
        />
        <h1 className="font-mono text-xl font-semibold text-center ">
          The Complete Web Developer in 2024: Zero to Mastery
        </h1>
        <div className="flex gap-2 justify-center mt-2 mb-2 ">
          <span className="flex gap-2 justify-between">
            <RxClock className="text-xl mt-1" /> 40 hours
          </span>
          <span className="flex gap-2 justify-between">
            <BsBook className="text-xl mt-1" /> 4 lessons
          </span>
        </div>
        <p className="text-gray-700 text-md px-2">
          Learn to code from scratch and get hired as a Web Developer in 2024.
          This full-stack coding bootcamp will teach you HTML, CSS, JavaScript,
          React, Node.js, Machine Learning & more.
        </p>
        <span className="flex mb-2 gap-2 mt-2 justify-center">
          <RxAvatar className="text-xl mt-1" /> Andrei Neagoie
        </span>
        <div className="flex pb-4 justify-center  gap-2 ">
          <Link
            to="course/dffd"
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
