import multer from "multer";

export const middlewareLocals = (req, res, next) => {
  res.locals.loggedIn = req.session.loggedIn;
  res.locals.user = req.session.user;
  next();
};

export const privateOnly = (req, res, next) => {
  if (req.session.loggedIn) {
    return next();
  } else {
    return res.redirect("/");
  }
};

export const publicOnly = (req, res, next) => {
  if (!req.session.loggedIn) {
    return next();
  } else {
    return res.redirect("/");
  }
};

export const uploadVideo = multer({ dest: "uploads/videos" });
export const uploadAvatar = multer({ dest: "uploads/avatars" });
