class About {
  constructor() {
    this.aboutSection = document.querySelector("section#about");
    this.mainSection = document.querySelector("main");
    this.showMoreButton = document.querySelector("#show-about");
  }
  init() {
    this.showMoreButton.addEventListener("click", this.handleShowAbout);
    document.addEventListener("scroll", this.scrollEffect);
  }
  handleShowAbout = () => {
    this.aboutSection.scrollIntoView({
      behavior: "smooth",
    });
  };
  scrollEffect = () => {
    if (window.scrollY > 300) {
      this.aboutSection.classList.add("loaded");
    } else {
      this.aboutSection.classList.remove("loaded");
    }
    if (window.scrollY > 450) {
      this.mainSection.classList.add("loaded");
    } else {
      this.mainSection.classList.remove("loaded");
    }
  };
}
export const about = new About();
