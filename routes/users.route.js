import { Router } from "express";
import { signUp } from "../controllers/users.controller.js";

export const userRouter = Router();

userRouter.post("/signup", signUp);
