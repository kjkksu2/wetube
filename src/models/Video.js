import mongoose from "mongoose";

const videoModel = new mongoose.Schema({
  fileUrl: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const model = mongoose.model("Video", videoModel);
export default model;
