import mongoose from "mongoose";
import User from "../models/User";
import Video from "../models/Video";

// Home
export const home = async (req, res) => {
  const videos = await Video.find().sort({ createdAt: -1 }).populate("owner");
  return res.render("videos/home", { pageTitle: "Home", videos });
};

// Search
export const search = async (req, res) => {
  const {
    query: { keyword },
  } = req;
  const videos = await Video.find({
    title: { $regex: keyword, $options: "i" },
  }).populate("owner");
  return res.render("videos/search", { pageTitle: "Search", videos });
};

// Watch
export const watch = async (req, res) => {
  const {
    params: { id },
  } = req;
  const video = await Video.findById(id).populate("owner");
  return res.render("videos/watch", { pageTitle: video.title, video });
};

// Edit Video
export const getEditVideo = async (req, res) => {
  const {
    params: { id },
  } = req;
  const video = await Video.findById(id);
  return res.render("videos/editVideo", { pageTitle: "Upload Video", video });
};
export const postEditVideo = async (req, res) => {
  const {
    params: { id },
    body: { title, description },
  } = req;
  const video = await Video.findByIdAndUpdate(id, {
    title,
    description,
  });
  return res.redirect(`/videos/${id}`);
};

// Delete Video
export const deleteVideo = async (req, res) => {
  const {
    params: { id },
  } = req;
  await Video.findByIdAndDelete(id);
  return res.redirect("/");
};

// Views
export const postViews = async (req, res) => {
  const {
    params: { id },
  } = req;

  const video = await Video.findById(id);
  video.views += 1;
  await video.save();

  return res.sendStatus(200);
};
