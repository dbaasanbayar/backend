import { UserModel } from "../models/user.model.js";

export const createUser = async (req, res) => {
  const { body } = req;
  console.log(body);
  try {
    const result = await UserModel.create(body);
    console.log(result, "result");
    res.send(result);
  } catch (error) {
    console.error(error);
    res.send(error);
  }
};

export const getUsers = async (req, res) => {
  try {
    const result = await UserModel.find();
    console.log(result, "result");
    res.send(result);
  } catch (error) {
    console.error(error);
    res.send(error);
  }
};
