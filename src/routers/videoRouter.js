import express from "express";
import { editVideo } from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.get("/:id", editVideo);

export default videoRouter;
