import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  avatarUrl: String,
  username: { type: String, required: true },
  email: { type: String, required: true },
  birth: String,
  gender: String,
  phone: String,
  password: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const model = mongoose.model("User", userSchema);
export default model;
