import React, { useState } from "react";
import Footer from "../components/common/Footer";
import Navbar from "../components/common/Navbar";
import { Link } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignUp = () => {
    // Implement your sign-up logic here
    console.log("Sign up clicked");
  };

  return (
    <>
      <section>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center">
          <div className="bg-gray-200 p-8 shadow-xl rounded-md">
            <h2 className="text-2xl font-semibold text-center mb-4">Sign Up</h2>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Email
              </label>
              <input
                type="text"
                className="border-2 border-gray-300 rounded-md w-full py-2 px-3 focus:outline-none focus:border-indigo-600"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Password
              </label>
              <input
                type="password"
                className="border-2 border-gray-300 rounded-md w-full py-2 px-3 focus:outline-none focus-border-indigo-600"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Confirm Password
              </label>
              <input
                type="password"
                className="border-2 border-gray-300 rounded-md w-full py-2 px-3 focus:outline-none focus-border-indigo-600"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <button
              className="bg-indigo-600 text-white font-semibold py-2 px-4 rounded-md w-full"
              onClick={handleSignUp}
            >
              Sign Up
            </button>
            <Link
              className="text-blue-500 hover:underline text-center p-2 block"
              to="/signin"
            >
              Already a member? Click to Sign In
            </Link>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
};

export default Register;
