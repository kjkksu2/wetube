import express from "express";
import {
  watch,
  getUploadVideo,
  postUploadVideo,
  getEditVideo,
  postEditVideo,
  deleteVideo,
} from "../controllers/videoController";
import { uploadVideo } from "../middlewares";

const videoRouter = express.Router();

// Watch
videoRouter.get("/:id([0-9a-f]{24})", watch);

// Upload
videoRouter.get("/:id([0-9a-f]{24})/upload-video", getUploadVideo);
videoRouter.post(
  "/:id([0-9a-f]{24})/upload-video",
  uploadVideo.single("videoFile"),
  postUploadVideo
);

// Edit
videoRouter.get("/:id([0-9a-f]{24})/edit-video", getEditVideo);
videoRouter.post("/:id([0-9a-f]{24})/edit-video", postEditVideo);

// Delete
videoRouter.get("/:id([0-9a-f]{24})/delete-video", deleteVideo);

export default videoRouter;
