import express from "express";
import {
  getUploadVideo,
  postUploadVideo,
  getEditProfile,
  postEditProfile,
  getChangePassword,
  postChangePassword,
} from "../controllers/userController";
import { uploadVideo } from "../middlewares";

const userRouter = express.Router();

// Edit Profile
userRouter.get("/:id([0-9a-f]{24})", getEditProfile);
userRouter.post("/:id([0-9a-f]{24})", postEditProfile);

// Change Password
userRouter.get("/:id([0-9a-f]{24})/change-password", getChangePassword);
userRouter.post("/:id([0-9a-f]{24})/change-password", postChangePassword);

// Upload
userRouter.get("/:id([0-9a-f]{24})/upload-video", getUploadVideo);
userRouter.post(
  "/:id([0-9a-f]{24})/upload-video",
  uploadVideo.single("videoFile"),
  postUploadVideo
);

export default userRouter;
