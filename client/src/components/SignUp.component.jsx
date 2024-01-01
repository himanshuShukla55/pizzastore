import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { ImCross } from "react-icons/im";
import { Link } from "react-router-dom";

const SignUp = () => {
  const {
    values: { name, email, password },
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object().shape({
      name: Yup.string()
        .max(20, "Name length should be atmost 20!")
        .required("Name is required!"),
      email: Yup.string()
        .email("Invalid Email!")
        .required("Email is required!"),
      password: Yup.string()
        .min(8, "Password length should be atlest 8!")
        .required("Password is required!"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <div className="absolute top-0 left-0 w-full h-full bg-gray-400/50">
      <form
        onSubmit={handleSubmit}
        className="relative bg-white/100 max-w-[400px] flex flex-col gap-5 text-xl shadow-lg p-8 rounded-lg z-10 mx-auto mt-[13%]"
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
              onBlur={handleBlur}
            />
          </div>
          {touched.name && errors.name && (
            <p className="text-red-600 text-sm">{errors.name}</p>
          )}
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
              onBlur={handleBlur}
            />
          </div>
          {touched.email && errors.email && (
            <p className="text-sm text-red-600">{errors.email}</p>
          )}
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
              onBlur={handleBlur}
            />
          </div>
          {touched.password && errors.password && (
            <p className="text-sm text-red-600">{errors.password}</p>
          )}
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
