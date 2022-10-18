class Curiosities {
  constructor() {
    this.container = document.querySelector("#curiosities");
    this.smallBox1 = document.querySelector(".about-firm-1");
    this.smallBox2 = document.querySelector(".about-firm-2");
    this.smallBox3 = document.querySelector(".about-firm-3");
  }
  init() {
    document.addEventListener("scroll", this.scrollEffect);
  }
  scrollEffect = () => {
    if (window.scrollY >= 1200) {
      this.smallBox1.classList.add("loaded");
    }
    if (window.scrollY >= 1400) {
      this.smallBox2.classList.add("loaded");
    }
    if (window.scrollY >= 1600) {
      this.smallBox3.classList.add("loaded");
    }
  };
}
export const curio = new Curiosities();
