import User from "../models/User";
import Video from "../models/Video";

// Join
export const getJoin = (req, res) => {
  return res.status(200).render("users/join", { pageTitle: "join" });
};
export const postJoin = async (req, res) => {
  try {
    const {
      body: { username, email, birth, gender, phone, password, password1 },
    } = req;

    if (password !== password1) {
      return res.status(404).render("users/join", {
        pageTitle: "join",
        errorMessage: "Confirm your password again.",
      });
    }

    const exist = await User.exists({ email });
    if (exist) {
      return res.status(404).render("users/join", {
        pageTitle: "join",
        errorMessage: "You already have account.",
      });
    }

    const user = await User.create({
      username,
      email,
      birth,
      gender,
      phone,
      password,
    });

    req.session.user = user;
    req.session.loggedIn = true;
    return res.redirect("/");
  } catch (error) {
    console.log(error);
    return res.status(404).render("users/join", { pageTitle: "join" });
  }
};

// Login
export const getLogin = (req, res) => {
  return res.render("users/login", { pageTitle: "login" });
};
export const postLogin = async (req, res) => {
  try {
    const {
      body: { email, password },
    } = req;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).render("users/login", {
        pageTitle: "login",
        errorMessage: "Email doesn't exist.",
      });
    }

    if (user.password !== password) {
      return res.status(404).render("users/login", {
        pageTitle: "login",
        errorMessage: "Password is wrong.",
      });
    }

    req.session.user = user;
    req.session.loggedIn = true;
    return res.redirect("/");
  } catch (error) {
    console.log(error);
    return res.status(404).render("users/login", { pageTitle: "login" });
  }
};

// Logout
export const logout = (req, res) => {
  req.session.destroy();
  return res.redirect("/");
};

// Edit Profile
export const getEditProfile = (req, res) => {
  return res.render("users/editProfile", { pageTitle: "edit-profile" });
};
export const postEditProfile = async (req, res) => {
  try {
    const {
      params: { id },
      body: { username, birth, gender, phone },
    } = req;

    if (!username) {
      throw Error;
    }

    const user = await User.findByIdAndUpdate(
      id,
      {
        username,
        birth,
        gender,
        phone,
      },
      { new: true }
    );

    req.session.user = user;
    return res.redirect(`/users/${id}`);
  } catch (error) {
    console.log(error);
    return res
      .status(404)
      .render("users/editProfile", { pageTitle: "edit-profile" });
  }
};

// Change Password
export const getChangePassword = (req, res) => {
  return res.render("users/changePassword", { pageTitle: "change-password" });
};
export const postChangePassword = async (req, res) => {
  try {
    const {
      params: { id },
      body: { current__password, change__password1, change__password2 },
    } = req;

    const user = await User.findById(id);
    if (user.password !== current__password) {
      return res.status(404).render("users/changePassword", {
        pageTitle: "change-password",
        errorMessage: "Current password is wrong.",
      });
    }
    if (change__password1 !== change__password2) {
      return res.status(404).render("users/changePassword", {
        pageTitle: "change-password",
        errorMessage: "Confirm your change password.",
      });
    }

    user.password = change__password1;
    user.save();
    return res.redirect("/");
  } catch (error) {
    console.log(error);
    return res
      .status(404)
      .render("users/changePassword", { pageTitle: "change-password" });
  }
};

// Upload Video
export const getUploadVideo = (req, res) => {
  return res.render("users/uploadVideo", { pageTitle: "Upload Video" });
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

  return res.redirect("/");
};
