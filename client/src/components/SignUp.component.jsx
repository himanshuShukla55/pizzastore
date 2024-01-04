import React from "react";
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { ImCross } from "react-icons/im";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";

const SignUp = () => {
  //navigate
  const navigate = useNavigate();
  //form state
  const { values, errors, touched, handleChange, handleSubmit, handleBlur } =
    useFormik({
      initialValues: {
        name: "",
        email: "",
        password: "",
      },
      //form validations
      validationSchema: Yup.object().shape({
        name: Yup.string()
          .required("name is required!")
          .matches(
            /^[A-Za-z ]{3,20}$/,
            "name should be 3-20 characters long and should not cointain any special characters or digits!"
          ),
        email: Yup.string()
          .required("Email is required")
          .email("Enter a valid email address!"),
        password: Yup.string()
          .required("password is required!")
          .matches(
            /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[$@!&%])[A-Za-z0-9$@!&%]{8,}$/,
            "password length should be atleast 8, should have one capital, small and special {@,$,%,&,!} character, should not contain white spaces!"
          ),
      }),
      //function to handle form submit
      onSubmit: async (values, { resetForm }) => {
        try {
          const res = await axios.post("/api/users/signup", values);
          resetForm({ values: { name: "", email: "", password: "" } });
          navigate("/login");
        } catch (error) {
          console.log("error in signing up!");
          console.error(error);
        }
      },
    });
  const { name, email, password } = values;
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
              onBlur={handleBlur}
            />
          </div>
          {touched.name && errors.name && (
            <p className="text-sm text-red-600">{errors.name}</p>
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
