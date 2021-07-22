const body = document.querySelector("body");
const userProfileIcon = document.querySelector(".user__nav--profile");
const userProfileContent = document.querySelector(".userProfileIcon");

const HIDDEN_CLASS = "hidden";
const SCROLL_CLASS = "hideScroll";

const handleProfile = (event) => {
  if (!userProfileContent.classList.contains(HIDDEN_CLASS)) {
    userProfileContent.classList.add(HIDDEN_CLASS);
    body.classList.remove(SCROLL_CLASS);
  } else if (
    userProfileContent.classList.contains(HIDDEN_CLASS) &&
    event.target.localName == "img"
  ) {
    userProfileContent.classList.remove(HIDDEN_CLASS);
    body.classList.add(SCROLL_CLASS);
  }
};

if (userProfileIcon) {
  userProfileIcon.addEventListener("click", handleProfile);
}
