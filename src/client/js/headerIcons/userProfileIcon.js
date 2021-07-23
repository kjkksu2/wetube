const body = document.querySelector("body");
const userProfileIcon = document.querySelector(".user__nav--profile");
const userProfileContent = document.querySelector(".userProfileIcon");

const HIDDEN_CLASS = "hidden";
const SCROLL_CLASS = "hideScroll";

const handleProfile = (event) => {
  const {
    target: { localName, parentElement },
  } = event;

  if (
    !userProfileContent.classList.contains(HIDDEN_CLASS) &&
    event.target.className != "userProfileIcon" &&
    parentElement.parentElement.className != "userProfileIcon"
  ) {
    userProfileContent.classList.add(HIDDEN_CLASS);
    body.classList.remove(SCROLL_CLASS);
  } else if (
    userProfileContent.classList.contains(HIDDEN_CLASS) &&
    localName == "img" &&
    parentElement.className == "user__nav--profile"
  ) {
    userProfileContent.classList.remove(HIDDEN_CLASS);
    body.classList.add(SCROLL_CLASS);
  }
};

if (userProfileIcon) {
  body.addEventListener("click", handleProfile);
}
