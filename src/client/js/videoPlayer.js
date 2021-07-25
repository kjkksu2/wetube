const videoContainer = document.querySelector(".video-watch__screen");
const video = videoContainer.querySelector("video");
const videoControllers = videoContainer.querySelector(
  ".video-watch__screen--controllers"
);

const playBtn = videoControllers.querySelector(".fa-play");
const muteBtn = videoControllers.querySelector(".fa-volume-up");
const screenBtn = videoControllers.querySelector(".fa-expand");

const timeline = videoControllers.querySelector(".timeline");

const videoTime = videoControllers.querySelector(".time");
const totalTime = videoTime.querySelector(".time__total");
const currentTime = videoTime.querySelector(".time__current");

const handlePlay = () => {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
  playBtn.className = video.paused ? "fas fa-play" : "fas fa-pause";
};

const handleMute = () => {
  if (video.muted) {
    video.muted = false;
  } else {
    video.muted = true;
  }
  muteBtn.className = video.muted ? "fas fa-volume-mute" : "fas fa-volume-up";
};

const handleScreen = () => {
  if (document.fullscreenElement) {
    document.exitFullscreen();
  } else {
    videoContainer.requestFullscreen();
  }
  screenBtn.className = document.fullscreenElement
    ? "fas fa-expand"
    : "fas fa-compress";
};

const timeForm = (time) => {
  let temp = time;

  // int
  let hours = parseInt(temp / 3600);
  temp %= 3600;
  let minutes = parseInt(temp / 60);
  temp %= 60;
  let seconds = temp % 60;

  // string
  hours = String(hours).padStart(2, "0");
  minutes = String(minutes).padStart(2, "0");
  seconds = String(seconds).padStart(2, "0");

  return `${hours}:${minutes}:${seconds}`;
};

const getTotalTime = () => {
  const time = parseInt(video.duration);
  totalTime.innerText = timeForm(time);
  timeline.max = time;
};

const getCurrentTime = () => {
  const time = parseInt(video.currentTime);
  currentTime.innerText = timeForm(time);
  timeline.value = time;
};

const resetCurrentTime = () => {
  const time = timeline.value;
  video.currentTime = time;
};

if (videoContainer) {
  playBtn.addEventListener("click", handlePlay);
  muteBtn.addEventListener("click", handleMute);
  screenBtn.addEventListener("click", handleScreen);
  video.addEventListener("loadedmetadata", getTotalTime);
  video.addEventListener("timeupdate", getCurrentTime);
  timeline.addEventListener("input", resetCurrentTime);
}
