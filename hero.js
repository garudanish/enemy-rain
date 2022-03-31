const bg = document.getElementById("bg");

class Hero {
  constructor(game) {
    this.game = game;
    this.hero = document.createElement("div");
    this.hero.id = "hero";
    bg.appendChild(this.hero);

    this.left =
      bg.getBoundingClientRect().width * 0.5 -
      this.hero.getBoundingClientRect().width * 0.5;
    this.hero.style.left = this.left + "px";
  }

  moveLeft() {
    this.hero.className = "left-face";
    if (this.left - 10 < 0) {
      return;
    }
    this.left -= 10;
    this.hero.style.left = this.left + "px";
  }

  moveRight() {
    this.hero.className = "right-face";
    if (this.left + 10 > 800 - this.hero.getBoundingClientRect().width) {
      return;
    }
    this.left += 10;
    this.hero.style.left = this.left + "px";
  }
}
