var navBarMenu = document.querySelector(".nav-links");
var navBar = document.querySelector("nav");
var buttonShowNavBar = document.querySelector("#burger");
var closeNavBar = document.querySelector("#close-button");
var aboutSection = document.querySelector("section#about");
var mainSection = document.querySelector("main");
var showMoreButton = document.querySelector("#show-about");
var lastScrollY = window.scrollY;
var handleShowNavBar = function () {
    navBarMenu.classList.add("active");
};
var handleHideNavBar = function () {
    navBarMenu.classList.remove("active");
};
var handleShowAbout = function () {
    aboutSection.scrollIntoView({
        behavior: "smooth"
    });
};
var scrollEffect = function () {
    if (lastScrollY < window.scrollY) {
        navBar.classList.add("hiden-nav");
        navBarMenu.classList.remove("active");
    }
    else {
        navBar.classList.remove("hiden-nav");
    }
    lastScrollY = window.scrollY;
    if (window.scrollY > 400) {
        aboutSection.classList.add("loaded");
    }
    else {
        aboutSection.classList.remove("loaded");
    }
    if (window.scrollY > 450) {
        mainSection.classList.add("loaded");
    }
    else {
        mainSection.classList.remove("loaded");
    }
};
buttonShowNavBar.addEventListener("click", handleShowNavBar);
closeNavBar.addEventListener("click", handleHideNavBar);
showMoreButton.addEventListener("click", handleShowAbout);
document.addEventListener("scroll", scrollEffect);
window.onload = function () {
    setTimeout(function () {
        document.body.classList.add("loaded");
    }, 1000);
};
