import express from "express";

const userRouter = express.Router();

userRouter.get("/:id", (req, res) => res.send("edit-profile"));

export default userRouter;
