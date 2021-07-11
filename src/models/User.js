import mongoose from "mongoose";
import bcrypt from "bcrypt";

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

userSchema.pre("save", async function () {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 5);
  }
});

const model = mongoose.model("User", userSchema);
export default model;
