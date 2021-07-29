const videoContainer = document.querySelector(".video-watch__screen");
const video = videoContainer.querySelector("video");
const videoControllers = videoContainer.querySelector(
  ".video-watch__screen--controllers"
);

const volume = videoControllers.querySelector(
  ".controllers__first-block--second"
);

const playBtn = videoControllers.querySelector(".fa-play");
const volumeBtn = videoControllers.querySelector(".fa-volume-up");
const screenBtn = videoControllers.querySelector(".fa-expand");

const timeline = videoControllers.querySelector(".timeline");
const volumeline = videoControllers.querySelector(".volumeline");

const videoTime = videoControllers.querySelector(".time");
const totalTime = videoTime.querySelector(".time__total");
const currentTime = videoTime.querySelector(".time__current");

let tempVolume = 1;
let volumeTimeout = 0;
let moveTimeout = 0;
let leaveTimeout = 0;

const moveVideoContainer = () => {
  if (moveTimeout) {
    clearTimeout(moveTimeout);
  }
  if (leaveTimeout) {
    clearTimeout(leaveTimeout);
  }

  videoControllers.classList.remove("hidden");
  videoContainer.classList.remove("hide-mouse");

  moveTimeout = setTimeout(() => {
    videoControllers.classList.add("hidden");
    if (document.fullscreenElement) {
      videoContainer.classList.add("hide-mouse");
    }
  }, 3000);
};

const leaveVideoContainer = () => {
  leaveTimeout = setTimeout(
    () => videoControllers.classList.add("hidden"),
    2000
  );
};

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
    if (tempVolume == 0) {
      tempVolume = 1;
      video.volume = tempVolume;
    }
    volumeline.value = tempVolume;
  } else {
    video.muted = true;
    volumeline.value = 0;
  }
  volumeBtn.className = video.muted ? "fas fa-volume-mute" : "fas fa-volume-up";
};

const enterVolume = () => {
  if (volumeTimeout) {
    clearTimeout(volumeTimeout);
  }
  volumeline.animate(
    [{ margin: "0px 12px", width: "0px" }, { width: "90px" }],
    { duration: 200 }
  );
  volumeline.classList.remove("hidden");
};

const leaveVolume = () => {
  volumeline.animate(
    [{ margin: "0px 12px", width: "90px" }, { width: "0px" }],
    { duration: 200 }
  );
  volumeTimeout = setTimeout(() => volumeline.classList.add("hidden"), 195);
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

const handleVideo = () => {
  playBtn.className = "fas fa-undo-alt";

  const {
    dataset: { id },
  } = videoContainer;

  fetch(`/api/videos/${id}/views`, {
    method: "POST",
  });
};

const resetCurrentTime = () => {
  const time = timeline.value;
  video.currentTime = time;
};

const resetVolume = (event) => {
  tempVolume = event.target.value;
  video.volume = tempVolume;

  if (video.volume == 0) {
    video.muted = true;
    volumeBtn.className = "fas fa-volume-mute";
  } else {
    video.muted = false;
    volumeBtn.className = "fas fa-volume-up";
  }
};

if (videoContainer) {
  videoContainer.addEventListener("mousemove", moveVideoContainer);
  videoContainer.addEventListener("mouseleave", leaveVideoContainer);
  playBtn.addEventListener("click", handlePlay);
  volumeBtn.addEventListener("click", handleMute);
  volumeBtn.addEventListener("mouseenter", enterVolume);
  volume.addEventListener("mouseleave", leaveVolume);
  // 나중에 키보드로 바꿀 때 icon도 받아야함. keydown으로
  screenBtn.addEventListener("click", handleScreen);
  video.addEventListener("loadedmetadata", getTotalTime);
  video.addEventListener("timeupdate", getCurrentTime);
  video.addEventListener("ended", handleVideo);
  timeline.addEventListener("input", resetCurrentTime);
  volumeline.addEventListener("input", resetVolume);
}
