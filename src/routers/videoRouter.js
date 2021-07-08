import express from "express";
import {
  editVideo,
  getUploadVideo,
  postUploadVideo,
} from "../controllers/videoController";
import { uploadVideo } from "../middlewares";

const videoRouter = express.Router();

videoRouter.get("/:id([0-9a-f]{24})", editVideo);
videoRouter.get("/:id([0-9a-f]{24})/upload-video", getUploadVideo);
videoRouter.post(
  "/:id([0-9a-f]{24})/upload-video",
  uploadVideo.single("videoFile"),
  postUploadVideo
);

export default videoRouter;
