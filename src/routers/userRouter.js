import express from "express";
import { editProfile } from "../controllers/userController";

const userRouter = express.Router();

userRouter.get("/:id", editProfile);

export default userRouter;
