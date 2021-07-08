import express from "express";
import { join, login, logout } from "../controllers/userController";
import { search, home } from "../controllers/videoController";

const rootRouter = express.Router();

rootRouter.get("/", home);
rootRouter.get("/join", join);
rootRouter.get("/login", login);
rootRouter.get("/logout", logout);
rootRouter.get("/search", search);

export default rootRouter;
