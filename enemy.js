class Enemy {
  constructor(game) {
    this.game = game;
    this.enemy = document.createElement("div");
    this.enemy.top = 0;
    this.enemy.left = Math.floor(
      Math.random() * (bg.getBoundingClientRect().width - 45)
    );
    this.moveIntervalId = null;
    this.drawEnemy();
    this.moveEnemy();
  }

  drawEnemy() {
    this.enemy.className = "enemy-div";
    this.enemy.style.top = this.enemy.top + "px";
    this.enemy.style.left = this.enemy.left + "px";
    bg.appendChild(this.enemy);
  }

  moveEnemy() {
    this.moveIntervalId = setInterval(() => {
      this.moveDown();
    }, 50);
  }

  moveDown() {
    if (
      this.enemy.top + this.enemy.offsetHeight >
      this.game.hero.hero.offsetTop
    ) {
      // y축 범위 안에 들어왔을 때

      const isInLeftBoundary =
        this.enemy.offsetLeft + this.enemy.offsetWidth >
        this.game.hero.hero.offsetLeft;
      const isInRightBoundary =
        this.enemy.offsetLeft <
        this.game.hero.hero.offsetLeft + this.game.hero.hero.offsetWidth;
      if (isInLeftBoundary && isInRightBoundary) {
        this.enemy.classList.add("dead");
        clearInterval(this.moveIntervalId);
        setTimeout(() => {
          this.enemy.remove();
        }, 800);
      }
    }

    this.enemy.top += 5;
    this.enemy.style.top = this.enemy.top + "px";
    if (this.enemy.top > 600 - 54) {
      this.game.quit();
    }
  }
}
