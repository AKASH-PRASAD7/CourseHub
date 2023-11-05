import React from "react";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <section>
      <Navbar />
      <div className="text-center h-screen">
        <h2 className="text-6xl m-4 text-cyan-600 font-bold mt-8">
          404 - Page Not Found
        </h2>
        <p className="text-gray-600 text-2xl">
          Sorry, the page you are looking for does not exist.
        </p>
        <Link to="/">
          <button className="bg-lime-500  hover:bg-lime-600 text-white font-semibold text-2xl p-2 mt-4 text-center rounded-2xl">
            Home
          </button>
        </Link>
      </div>
      <Footer />
    </section>
  );
};

export default NotFound;
