const bodyClick = document.querySelector("body");
const videoIcon = document.querySelector(".fa-video");
const videoChoice = document.querySelector(".video__choice");

const HIDDEN_CLASS = "hidden";

const handleVideoIcon = (event) => {
  if (!videoChoice.classList.contains(HIDDEN_CLASS)) {
    videoChoice.classList.add(HIDDEN_CLASS);
  } else if (
    videoChoice.classList.contains(HIDDEN_CLASS) &&
    event.target.className == "fas fa-video"
  ) {
    videoChoice.classList.remove(HIDDEN_CLASS);
  }
};

if (videoIcon) {
  bodyClick.addEventListener("click", handleVideoIcon);
}
