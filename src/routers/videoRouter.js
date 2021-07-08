import express from "express";

const videoRouter = express.Router();

videoRouter.get("/:id", (req, res) => res.send("edit-video"));

export default videoRouter;
