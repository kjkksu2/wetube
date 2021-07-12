import express from "express";
import {
  getJoin,
  postJoin,
  logout,
  getLogin,
  postLogin,
} from "../controllers/userController";
import { search, home } from "../controllers/videoController";
import { publicOnly, privateOnly } from "../middlewares";

const rootRouter = express.Router();

// Home
rootRouter.get("/", home);

// Search
rootRouter.get("/search", search);

// Join
rootRouter.route("/join").get(publicOnly, getJoin).post(postJoin);

// Login
rootRouter.route("/login").get(publicOnly, getLogin).post(postLogin);

// Logout
rootRouter.get("/logout", privateOnly, logout);

export default rootRouter;
