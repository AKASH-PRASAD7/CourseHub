import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto">
        <div className="flex flex-col items-center">
          <p className="text-lg">CourseHub &copy; {new Date().getFullYear()}</p>
          <p className="text-sm mt-2">
            Discover a world of knowledge with CourseHub. Learn, grow, and
            succeed with our diverse range of courses.
          </p>

          <p className="text-sm mt-4">
            Developed by{" "}
            <Link
              className="underline text-lg"
              to="https://akash-prasad.netlify.app/"
            >
              Akash Prasad
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
