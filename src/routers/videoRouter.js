import express from "express";
import {
  watch,
  getEditVideo,
  postEditVideo,
  deleteVideo,
} from "../controllers/videoController";
import { privateOnly } from "../middlewares";

const videoRouter = express.Router();

// Watch
videoRouter.get("/:id([0-9a-f]{24})", watch);

// Edit Video
videoRouter
  .route("/:id([0-9a-f]{24})/edit-video")
  .get(privateOnly, getEditVideo)
  .post(postEditVideo);

// Delete
videoRouter.get("/:id([0-9a-f]{24})/delete-video", privateOnly, deleteVideo);

export default videoRouter;
