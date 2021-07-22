const userInfoForm = document.querySelector(".userInfo-form__avatar");

let getAvatar;

const handleAvatar = () => {
  const fileReader = new FileReader();
  let avatar = userInfoForm.querySelector("label img");

  fileReader.readAsDataURL(getAvatar.files[0]);
  fileReader.addEventListener("loadend", (event) => {
    avatar.src = event.target.result;
  });
};

if (userInfoForm) {
  getAvatar = userInfoForm.querySelector("input[type=file]");
  getAvatar.addEventListener("change", handleAvatar);
}
