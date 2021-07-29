import express from "express";
import { postViews } from "../controllers/videoController";

const apiRouter = express.Router();

// Views
apiRouter.post("/videos/:id([0-9a-f]{24})/views", postViews);

export default apiRouter;
