import express from "express";
import {
  getUploadVideo,
  postUploadVideo,
  getEditProfile,
  postEditProfile,
  getChangePassword,
  postChangePassword,
  githubLogin,
  githubCallback,
} from "../controllers/userController";
import { uploadVideo } from "../middlewares";

const userRouter = express.Router();

// Edit Profile
userRouter
  .route("/:id([0-9a-f]{24})")
  .get(getEditProfile)
  .post(postEditProfile);

// Change Password
userRouter
  .route("/:id([0-9a-f]{24})/change-password")
  .get(getChangePassword)
  .post(postChangePassword);

// Upload
userRouter
  .route("/:id([0-9a-f]{24})/upload-video")
  .get(getUploadVideo)
  .post(uploadVideo.single("videoFile"), postUploadVideo);

// Github
userRouter.get("/github/login", githubLogin);
userRouter.get("/github/callback", githubCallback);

export default userRouter;
