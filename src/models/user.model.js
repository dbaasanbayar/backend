import { Schema, model } from "mongoose";

const userSchemas = new Schema(
  {
    email: { type: String, required: true },
    gender: { type: String, enum: ["male", "female"], default: "male" },
    username: { type: String, required: true },
    password: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

export const UserModel = model("User", userSchemas);
