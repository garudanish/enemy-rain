class Game {
  constructor() {
    this.hero = null;
    this.enemy = [];
    this.startGame();
  }

  startGame() {
    window.addEventListener("keydown", (e) => {
      if (e.key === "ArrowLeft") {
        this.hero.moveLeft();
      } else if (e.key === "ArrowRight") {
        this.hero.moveRight();
      }
    });

    this.hero = new Hero(this);
    this.generateEnemy();
  }

  generateEnemy() {
    this.generateIntervalId = setInterval(() => {
      this.enemy.push(new Enemy(this));
    }, 3000);
  }

  quit() {
    clearInterval(this.generateIntervalId);
    this.hero.hero.remove();
    this.enemy.map((enemy) => {
      enemy.enemy.remove();
      clearInterval(enemy.moveIntervalId);
    });
    this.game = null;
  }
}

let game = null;
document.querySelector("button").addEventListener("click", () => {
  game = new Game();
});
