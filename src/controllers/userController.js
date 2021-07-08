export const join = (req, res) => {
  return res.render("users/join", { pageTitle: "join" });
};
export const login = (req, res) => {
  return res.render("users/login", { pageTitle: "login" });
};
export const logout = (req, res) => res.send("logout");
export const editProfile = (req, res) => {
  return res.render("users/editProfile", { pageTitle: "edit-profile" });
};
