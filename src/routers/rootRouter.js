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
rootRouter.get("/join", getJoin);
rootRouter.post("/join", postJoin);

// Login
rootRouter.get("/login", getLogin);
rootRouter.post("/login", postLogin);

// Logout
rootRouter.get("/logout", logout);

export default rootRouter;
