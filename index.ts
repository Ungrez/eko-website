const navBar: HTMLElement = document.querySelector(".nav-links");
const buttonShowNavBar: HTMLElement = document.querySelector("#burger");
const closeNavBar: HTMLElement = document.querySelector("#close-button");

const handleShowNavBar = () => {
  navBar.classList.add("active");
};
const handleHideNavBar = () => {
  navBar.classList.remove("active");
};

buttonShowNavBar.addEventListener<"click">("click", handleShowNavBar);
closeNavBar.addEventListener<"click">("click", handleHideNavBar);
