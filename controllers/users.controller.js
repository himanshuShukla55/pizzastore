import bcrypt from "bcrypt";
import { UserModel } from "../models/user.model.js";

export const signUp = async (req, res, next) => {
  try {
    const hash = bcrypt.hashSync(req.body.password, 4);
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
