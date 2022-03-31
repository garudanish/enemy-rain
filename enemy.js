class Enemy {
  constructor(game) {
    this.game = game;
    this.enemy = document.createElement("div");
    this.enemy.className = "enemy-div";
    this.enemy.style.left = Math.floor(Math.random() * (800 - 45)) + "px";
    bg.appendChild(this.enemy);

    this.enemy.top = 0;
    this.enemy.style.top = this.enemy.top + "px";
    this.moveIntervalId = setInterval(() => {
      this.moveDown();
    }, 50);
  }

  moveDown() {
    this.enemy.top += 1;
    this.enemy.style.top = this.enemy.top + "px";
    if (this.enemy.style.top === `${600 - 54}px`) {
      this.game.quit();
    }
  }
}
