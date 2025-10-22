import { User } from "../models/user.js";

export const createUser = async (req, res) => {
  try {
    const result = await User.create({
      username: "baasanbayar",
      email: "d.baasanbayar@gmail.com",
      password: "123",
    });
    console.log(result, "result");
    res.send(result);
  } catch (error) {
    console.error(error);
    res.send(error);
  }
};

export const getUsers = async (req, res) => {
  try {
    const result = await User.find();
    console.log(result, "result");
    res.send(result);
  } catch (error) {
    console.error(error);
    res.send(error);
  }
};
