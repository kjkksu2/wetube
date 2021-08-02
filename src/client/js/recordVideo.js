const recordContainer = document.querySelector(".recordVideo__block");

const video = recordContainer.querySelector(".recordVideo");
const btn = recordContainer.querySelector(".recordBtn");

let stream;
let recorder;
let videoFile;

const getStream = async () => {
  stream = await navigator.mediaDevices.getUserMedia({
    audio: false,
    video: {
      width: 600,
      height: 400,
    },
  });
  video.srcObject = stream;
  video.play();
};

const recordStop = () => {
  btn.innerText = "start";

  recorder.stop();
};

const recordStart = () => {
  btn.innerText = "stop";
  btn.removeEventListener("click", recordStart);
  btn.addEventListener("click", recordStop);

  recorder = new MediaRecorder(stream);
  recorder.start();
  recorder.ondataavailable = (event) => {
    videoFile = URL.createObjectURL(event.data);
    video.srcObject = null;
    video.src = videoFile;
    video.loop = true;
    video.width = 600;
    video.height = 400;
    video.play();
  };
};

getStream();

btn.addEventListener("click", recordStart);
