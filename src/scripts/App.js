import { nav } from "./Nav.js";
import { about } from "./About.js";
class App {
  constructor() {
    this.scrollTopButton = document.querySelector("#scrollTop");
  }
  init() {
    document.addEventListener("scroll", this.scrollEffect);
    this.scrollTopButton.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
  scrollEffect = () => {
    if (window.scrollY > 250) {
      this.scrollTopButton.classList.add("active");
    } else {
      this.scrollTopButton.classList.remove("active");
    }
  };
}
export const app = new App();
app.init();
nav.init();
about.init();
window.onload = () => {
  setTimeout(() => {
    document.body.classList.add("loaded");
  }, 1000);
};
