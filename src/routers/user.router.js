import { Router } from "express";
import { createUser, getUsers } from "../controllers/user.js";

export const useRouter = Router();

useRouter.post("/", createUser);
useRouter.get("/", getUsers);
