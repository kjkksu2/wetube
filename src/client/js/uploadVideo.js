const uploadVideoForm = document.querySelector(".video__upload form");
const videoTitle = document.getElementById("videoTitle");
let checkVideo;
let selectVideo;

const handleSelectVideo = () => {
  checkVideo.innerText = "selected";
  checkVideo.classList.add("selected");

  videoTitle.innerText = `Video: ${selectVideo.files[0].name}`;
};

if (uploadVideoForm) {
  checkVideo = uploadVideoForm.querySelector("label");
  selectVideo = uploadVideoForm.querySelector("input[type=file]");
  selectVideo.addEventListener("change", handleSelectVideo);
}
