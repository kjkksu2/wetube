import mongoose from "mongoose";
import Video from "../models/Video";

export const home = (req, res) => {
  return res.render("videos/home", { pageTitle: "Home" });
};
export const search = (req, res) => {
  return res.render("videos/search", { pageTitle: "Search" });
};
export const editVideo = (req, res) => res.send("edit-video");

export const getUploadVideo = (req, res) => {
  return res.render("videos/uploadVideo", { pageTitle: "Upload Video" });
};
export const postUploadVideo = async (req, res) => {
  const {
    file: { path },
    body: { title, description },
  } = req;

  const video = await Video.create({
    fileUrl: path,
    title,
    description,
  });
  console.log(video);
  return res.render("videos/uploadVideo", { pageTitle: "Upload Video" });
};
