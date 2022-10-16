const navBarMenu: HTMLElement = document.querySelector(".nav-links");
const navBar: HTMLElement = document.querySelector("nav");
const buttonShowNavBar: HTMLElement = document.querySelector("#burger");
const closeNavBar: HTMLElement = document.querySelector("#close-button");
const aboutSection: HTMLElement = document.querySelector("section#about");
const mainSection: HTMLElement = document.querySelector("main");
const showMoreButton: HTMLElement = document.querySelector("#show-about");
const scrollTopButton: HTMLElement = document.querySelector("#scrollTop");
let lastScrollY = window.scrollY;

const handleShowNavBar = () => {
  navBarMenu.classList.add("active");
};
const handleHideNavBar = () => {
  navBarMenu.classList.remove("active");
};
const handleShowAbout = () => {
  aboutSection.scrollIntoView({
    behavior: "smooth",
  });
};
const scrollEffect = () => {
  if (lastScrollY < window.scrollY && window.scrollY > 50) {
    navBar.classList.add("hiden-nav");
    navBarMenu.classList.remove("active");
  } else {
    navBar.classList.remove("hiden-nav");
  }
  lastScrollY = window.scrollY;
  if (window.scrollY > 400) {
    aboutSection.classList.add("loaded");
  } else {
    aboutSection.classList.remove("loaded");
  }
  if (window.scrollY > 450) {
    mainSection.classList.add("loaded");
  } else {
    mainSection.classList.remove("loaded");
  }
  if (window.scrollY > 250) {
    scrollTopButton.classList.add("active");
  } else {
    scrollTopButton.classList.remove("active");
  }
};

buttonShowNavBar.addEventListener<"click">("click", handleShowNavBar);
closeNavBar.addEventListener<"click">("click", handleHideNavBar);
showMoreButton.addEventListener<"click">("click", handleShowAbout);
scrollTopButton.addEventListener<"click">("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
document.addEventListener("scroll", scrollEffect);

window.onload = () => {
  setTimeout(() => {
    document.body.classList.add("loaded");
  }, 1000);
};
