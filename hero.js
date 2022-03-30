class Hero {
  constructor() {
    const bg = document.getElementById("bg");
    const heroDiv = document.getElementById("hero");
    this.left =
      bg.getBoundingClientRect().width * 0.5 -
      heroDiv.getBoundingClientRect().width * 0.5;
    heroDiv.style.left = this.left;
  }

  moveLeft() {
    const heroDiv = document.getElementById("hero");
    heroDiv.className = "left-face";
    if (this.left - 10 < 0) {
      return;
    }
    this.left -= 10;
    heroDiv.style.left = this.left + "px";
  }

  moveRight() {
    const heroDiv = document.getElementById("hero");
    heroDiv.className = "right-face";
    if (this.left + 10 > 800 - heroDiv.getBoundingClientRect().width) {
      return;
    }
    this.left += 10;
    heroDiv.style.left = this.left + "px";
  }
}
