const messageWrapper = document.querySelector(".message-wrapper");

class Game {
  constructor() {
    this.hero = null;
    this.enemies = [];
    this.startGame();
  }

  startGame() {
    this.hero = new Hero(this);

    window.addEventListener("keydown", this.onKeydown);
    this.generateEnemy();
  }

  onKeydown = (e) => {
    if (e.key === "ArrowLeft") {
      this.hero.moveLeft();
    } else if (e.key === "ArrowRight") {
      this.hero.moveRight();
    }
  };

  generateEnemy() {
    this.generateIntervalId = setInterval(() => {
      this.enemies.push(new Enemy(this));
    }, 3000);
  }

  quit() {
    clearInterval(this.generateIntervalId);
    this.hero.hero.remove();
    window.removeEventListener("keydown", this.onKeydown);
    this.enemies.map((enemy) => {
      enemy.enemy.remove();
      clearInterval(enemy.moveIntervalId);
    });
    this.game = null;
    messageWrapper.querySelector(".message").textContent = "GAME OVER!";
    messageWrapper.querySelector(".start-button").textContent = "RESTART";
    messageWrapper.classList.add("is-show");
  }
}

let game = null;
document.querySelector("button").addEventListener("click", () => {
  game = new Game();
  messageWrapper.classList.remove("is-show");
});
