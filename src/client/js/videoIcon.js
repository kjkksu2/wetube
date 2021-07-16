const videoIcon = document.querySelector(".fa-video");
const videoChoice = document.querySelector(".video__choice");

const handleVideoIcon = () => {
  const hiddenClass = "hidden";
  videoChoice.classList.toggle(hiddenClass);
};

videoIcon.addEventListener("click", handleVideoIcon);
