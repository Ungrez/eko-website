class Nav {
  constructor() {
    this.navBarMenu = document.querySelector(".nav-links");
    this.navBar = document.querySelector("nav");
    this.buttonShowNavBar = document.querySelector("#burger");
    this.closeNavBar = document.querySelector("#close-button");
    this.lastScrollY = window.scrollY;
  }
  init() {
    this.buttonShowNavBar.addEventListener("click", this.handleShowNavBar);
    this.closeNavBar.addEventListener("click", this.handleHideNavBar);
    document.addEventListener("scroll", this.scrollEffect);
  }
  handleShowNavBar = () => {
    this.navBarMenu.classList.add("active");
  };
  handleHideNavBar = () => {
    this.navBarMenu.classList.remove("active");
  };
  scrollEffect = () => {
    if (this.lastScrollY < window.scrollY && window.scrollY > 80) {
      this.navBar.classList.add("hiden-nav");
      this.navBarMenu.classList.remove("active");
    } else {
      this.navBar.classList.remove("hiden-nav");
    }
    this.lastScrollY = window.scrollY;
  };
}
export const nav = new Nav();
