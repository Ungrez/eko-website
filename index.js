var navBarMenu = document.querySelector(".nav-links");
var navBar = document.querySelector("nav");
var buttonShowNavBar = document.querySelector("#burger");
var closeNavBar = document.querySelector("#close-button");
var aboutSection = document.querySelector("section#about");
var mainSection = document.querySelector("main");
var showMoreButton = document.querySelector("#show-about");
var scrollTopButton = document.querySelector("#scrollTop");
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
    if (lastScrollY < window.scrollY && window.scrollY > 80) {
        navBar.classList.add("hiden-nav");
        navBarMenu.classList.remove("active");
    }
    else {
        navBar.classList.remove("hiden-nav");
    }
    lastScrollY = window.scrollY;
    if (window.scrollY > 300) {
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
    if (window.scrollY > 250) {
        scrollTopButton.classList.add("active");
    }
    else {
        scrollTopButton.classList.remove("active");
    }
};
buttonShowNavBar.addEventListener("click", handleShowNavBar);
closeNavBar.addEventListener("click", handleHideNavBar);
showMoreButton.addEventListener("click", handleShowAbout);
scrollTopButton.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
});
document.addEventListener("scroll", scrollEffect);
window.onload = function () {
    setTimeout(function () {
        document.body.classList.add("loaded");
    }, 1000);
};
