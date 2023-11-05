import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RxAvatar, RxMagnifyingGlass } from "react-icons/rx";

const Navbar = () => {
  const [hide, setHide] = useState("hidden");
  const handleDropDown = () => {
    if (hide === "hidden") {
      setHide("show");
    } else {
      setHide("hidden");
    }
  };
  const [search, setSearch] = useState("");
  const handleSearch = (e) => {
    setSearch(e.target.value);
    console.log(e.target.value);
  };
  return (
    <>
      <nav>
        <div className="flex justify-around bg-gray-300 text-gray-900  w-full h-14 shadow-xl items-center ">
          <Link to="/">
            <h1 className="font-bold font-mono sm:text-xl md:txt-2xl lg:text-2xl ">
              CourseHub
            </h1>
          </Link>
          <div className="flex gap-2 w-1/2 relative">
            <input
              type="text"
              placeholder="Search Courses"
              value={search}
              onChange={(e) => handleSearch(e)}
              className="border-2 border-gray-100 rounded-full px-2 py-1 w-full "
            />
            <RxMagnifyingGlass className="text-2xl text-blue-500 hover:text-blue-700 cursor-pointer font-bold absolute right-0 m-1" />
          </div>

          <div className="relative">
            <span
              className="text-3xl text-gray-800 "
              onClick={(e) => handleDropDown()}
            >
              <RxAvatar />
            </span>
            <div className={`${hide} absolute top-10 right-0`}>
              <ul className="bg-gray-900 text-white text-center font-semibold w-24 rounded-xl ">
                <li className="p-2 hover:bg-lime-500 rounded-t-xl">
                  <Link to="/signin">SignIn</Link>
                </li>
                <li className="p-2 hover:bg-lime-500 rounded-b-xl">
                  <Link to="/dashboard">Dashboard</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
