import express from "express";
import {
  watch,
  getEditVideo,
  postEditVideo,
  deleteVideo,
} from "../controllers/videoController";

const videoRouter = express.Router();

// Watch
videoRouter.get("/:id([0-9a-f]{24})", watch);

// Edit
videoRouter.get("/:id([0-9a-f]{24})/edit-video", getEditVideo);
videoRouter.post("/:id([0-9a-f]{24})/edit-video", postEditVideo);

// Delete
videoRouter.get("/:id([0-9a-f]{24})/delete-video", deleteVideo);

export default videoRouter;
