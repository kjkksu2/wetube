import mongoose from "mongoose";

const videoModel = new mongoose.Schema({
  fileUrl: { type: String, required: true },
  title: { type: String, required: true },
  description: String,
  views: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

const model = mongoose.model("Video", videoModel);
export default model;
