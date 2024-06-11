const humburgerButton = document.querySelector(".humburgerButton");
const humBackgr = document.querySelector(".humBackgr");
const humburgerMenu = document.querySelector(".humburgerMenu");

humburgerButton.addEventListener("click", () => {
  if (humburgerButton.classList.contains("opened")) {
    humburgerButton.classList.remove("opened");
    humBackgr.classList.remove("humModalOpen");
  } else {
    humburgerButton.classList.add("opened");
    humBackgr.classList.add("humModalOpen");
  }
});
///close on background click
humburgerMenu.addEventListener("click", (e) => {
  e.stopPropagation();
});
humBackgr.addEventListener("click", () => {
  humBackgr.classList.remove("humModalOpen");
  humburgerButton.classList.remove("opened");
});
