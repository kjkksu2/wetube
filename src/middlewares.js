import multer from "multer";

export const middlewareLocals = (req, res, next) => {
  res.locals.loggedIn = req.session.loggedIn;
  res.locals.user = req.session.user;
  next();
};

export const uploadVideo = multer({ dest: "uploads/videos" });
