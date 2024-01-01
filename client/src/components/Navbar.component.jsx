import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-tomato p-3 px-32 flex justify-between text-white items-center">
      <h2 className="text-3xl">
        HOT <span className="text-crust font-semibold">PIDDA</span>
      </h2>
      <div className="flex gap-10 text-lg items-center">
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Sign Up</Link>
      </div>
    </div>
  );
};

export default Navbar;
