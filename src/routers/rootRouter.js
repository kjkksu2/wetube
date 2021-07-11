import express from "express";
import {
  getJoin,
  postJoin,
  logout,
  getLogin,
  postLogin,
} from "../controllers/userController";
import { search, home } from "../controllers/videoController";

const rootRouter = express.Router();

// Home
rootRouter.get("/", home);

// Search
rootRouter.get("/search", search);

// Join
rootRouter.route("/join").get(getJoin).post(postJoin);

// Login
rootRouter.route("/login").get(getLogin).post(postLogin);

// Logout
rootRouter.get("/logout", logout);

export default rootRouter;
