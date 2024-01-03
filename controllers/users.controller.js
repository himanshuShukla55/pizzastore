import bcrypt from "bcrypt";
import { UserModel } from "../models/user.model.js";
import { customError } from "../utils/cutomError.js";

// function to sign up new user
export const signUp = async (req, res, next) => {
  try {
    //? check if password is present and its length is atleast 8.
    if (!req.body.password || req.body.password.length < 8)
      customError(400, "Password should be atleast 8 characters long!");
    // hash the password
    const hash = bcrypt.hashSync(req.body.password, 4);
    // create new user document
    await UserModel.create({ ...req.body, password: hash });
    res.status(201).json({
      success: true,
      message: "user signed up!",
    });
  } catch (error) {
    console.error("error in user signup!");
    next(error);
  }
};
