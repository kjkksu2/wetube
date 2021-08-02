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
  kakaoLogin,
  kakaoCallback,
  getVideoProfile,
  getRecordVideo,
} from "../controllers/userController";
import {
  privateOnly,
  publicOnly,
  uploadAvatar,
  uploadVideo,
} from "../middlewares";

const userRouter = express.Router();

// Edit Profile
userRouter
  .route("/:id([0-9a-f]{24})")
  .get(privateOnly, getEditProfile)
  .post(uploadAvatar.single("avatarUrl"), postEditProfile);

// Change Password
userRouter
  .route("/:id([0-9a-f]{24})/change-password")
  .get(privateOnly, getChangePassword)
  .post(postChangePassword);

// Upload
userRouter
  .route("/:id([0-9a-f]{24})/upload-video")
  .get(privateOnly, getUploadVideo)
  .post(uploadVideo.single("videoFile"), postUploadVideo);

// Record
userRouter.get("/:id([0-9a-f]{24}/record-video)", getRecordVideo);

// Video Profile
userRouter.get("/:id([0-9a-f]{24})/video-profile", getVideoProfile);

// Github
userRouter.get("/github/login", publicOnly, githubLogin);
userRouter.get("/github/callback", githubCallback);

// Kakao
userRouter.get("/kakao/login", publicOnly, kakaoLogin);
userRouter.get("/kakao/callback", kakaoCallback);

export default userRouter;
