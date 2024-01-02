import { Schema, model } from "mongoose";

const UserSchema = new Schema({
  name: {
    type: String,
    trim: true,
    maxlength: [20, "Name length should be atmost 20!"],
    required: true,
  },
  email: {
    type: String,
    unique: true,
    lowercase: true,
    trim: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please fill a valid email address",
    ],
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
    default:
      "https://img.freepik.com/premium-vector/avatar-icon0002_750950-43.jpg?w=1380",
  },
});

export const UserModel = model("user", UserSchema);
