import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { ImCross } from "react-icons/im";
import { Link } from "react-router-dom";
import axios from "axios";

const SignUp = () => {
  //form state
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  // function to handle form state change
  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };

  // function to submit sign up form
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/users/signup", user);
      console.log(res);
    } catch (error) {
      console.log("error in signing up!");
      console.error(error);
    }
  };
  const { name, email, password } = user;
  return (
    <div className="absolute top-0 left-0 w-full h-full bg-gray-400/50">
      <form
        onSubmit={handleSubmit}
        className="relative bg-white/100 max-w-[400px] flex flex-col gap-5 text-xl shadow-lg p-8 rounded-lg z-10 mx-auto mt-[40%] sm:mt-[13%]"
      >
        <h2 className="text-center text-3xl font-semibold text-tomato mb-10">
          Sign Up Form
        </h2>
        <div>
          <div className="flex gap-4 items-center border border-gray-200 rounded-lg p-3">
            <FaUser />
            <input
              className="outline-none"
              type="text"
              name="name"
              placeholder="Enter Name"
              value={name}
              onChange={handleChange}
            />
          </div>
        </div>

        <div>
          <div className="flex gap-4 items-center border border-gray-200 rounded-lg p-3">
            <MdEmail />
            <input
              className="outline-none"
              type="email"
              name="email"
              placeholder="Enter Email"
              value={email}
              onChange={handleChange}
            />
          </div>
        </div>

        <div>
          <div className="flex gap-4 items-center border border-gray-200 rounded-lg p-3">
            <RiLockPasswordFill />
            <input
              className="outline-none"
              type="password"
              name="password"
              placeholder="Enter Password"
              value={password}
              onChange={handleChange}
            />
          </div>
        </div>

        <input className="btn-tomato p-3" type="submit" value="SIGN UP" />
        <Link to="/" className="absolute right-0 top-0 p-3 text-tomato">
          <ImCross />
        </Link>
      </form>
    </div>
  );
};

export default SignUp;
