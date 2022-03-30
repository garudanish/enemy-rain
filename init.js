function init() {
  const newHero = new Hero();
  console.log(newHero.style);

  window.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") {
      newHero.moveLeft();
    } else if (e.key === "ArrowRight") {
      newHero.moveRight();
    }
  });
}

init();
