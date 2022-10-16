var navBar = document.querySelector(".nav-links");
var buttonShowNavBar = document.querySelector("#burger");
var closeNavBar = document.querySelector("#close-button");
var handleShowNavBar = function () {
    navBar.classList.add("active");
};
var handleHideNavBar = function () {
    navBar.classList.remove("active");
};
buttonShowNavBar.addEventListener("click", handleShowNavBar);
closeNavBar.addEventListener("click", handleHideNavBar);
