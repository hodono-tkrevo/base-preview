const buttons = document.querySelectorAll(".controls button");
const patterns = document.querySelectorAll(".pattern");

function restartAnimations(pattern) {
  pattern.getAnimations({ subtree: true }).forEach((animation) => {
    animation.cancel();
    animation.play();
  });
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const target = button.dataset.target;

    buttons.forEach((item) => item.classList.toggle("active", item === button));

    patterns.forEach((pattern) => {
      const isActive = pattern.dataset.pattern === target;
      pattern.classList.toggle("active", isActive);
      if (isActive) restartAnimations(pattern);
    });
  });
});
