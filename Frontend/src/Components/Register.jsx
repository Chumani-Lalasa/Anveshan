import React from 'react';
import { FaEnvelope, FaLock, FaUser } from "react-icons/fa";

function Register() {
  return (
    <div
      className="w-full h-screen flex items-center justify-center tracking-wider bg-[url('./assets/doctor-hospital.webp')] bg-center bg-no-repeat bg-cover"
    >
      <div
        className="w-11/12 sm:w-5/12 md:w-3/12 text-sm bg-white bg-opacity-25 rounded-2xl shadow-md backdrop-blur-md border border-white/40"
      >
        <div className="w-full text-center my-3">
          <h2 className="text-2xl text-black font-medium">Register</h2>
        </div>

        <form className="my-2">
          <div className="flex border-b-2 border-black mx-5 my-7 py-1">
            <input
              type="text"
              className="w-10/12 bg-transparent outline-none placeholder-black"
              placeholder="Enter your name"
            />
            <div className="w-2/12 flex items-center justify-center">
              <FaUser />
            </div>
          </div>

          <div className="flex border-b-2 border-black mx-5 my-7 py-1">
            <input
              type="email"
              className="w-10/12 bg-transparent outline-none placeholder-black"
              placeholder="Your email Address"
            />
            <div className="w-2/12 flex items-center justify-center">
              <FaEnvelope />
            </div>
          </div>

          <div className="flex border-b-2 border-black mx-5 my-7 py-1">
            <input
              type="password"
              className="w-10/12 bg-transparent outline-none placeholder-black"
              placeholder="Create a Strong Password"
            />
            <div className="w-2/12 flex items-center justify-center">
              <FaLock />
            </div>
          </div>

          <div className="mx-5 my-7 py-2">
            <button className="bg-black w-full h-[35px] rounded-sm text-white">
              Register
            </button>
          </div>
          <div className="mx-5 my-5 py-2 flex items-center justify-center cursor-pointer">
            <p className="text-sm">Already have an account? / Login</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
