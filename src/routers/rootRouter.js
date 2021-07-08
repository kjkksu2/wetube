import express from "express";

const rootRouter = express.Router();

rootRouter.get("/", (req, res) => res.send("Home"));
rootRouter.get("/join", (req, res) => res.send("join"));
rootRouter.get("/login", (req, res) => res.send("login"));
rootRouter.get("/logout", (req, res) => res.send("logout"));
rootRouter.get("/search", (req, res) => res.send("search"));

export default rootRouter;
