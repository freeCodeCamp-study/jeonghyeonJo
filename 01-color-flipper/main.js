const bodyElement = document.querySelector("body");
const changeColorButton = document.querySelector(".change-color-button");
const rgbButton = document.querySelector(".rgb-button");
const hexButton = document.querySelector(".hex-button");

function randomNumber(maxNumber) {
  const MAX_NUMBER = maxNumber;
  return Math.floor(Math.random() * (MAX_NUMBER + 1));
}

function handleBGHexColor() {
  const randomHexNumber = randomNumber(16777215).toString(16);
  bodyElement.style.background = `#${randomHexNumber}`;
}

function handleBGRgbColor() {
  const randomRedNumber = randomNumber(255);
  const randomGreenNumber = randomNumber(255);
  const randomBlueNumber = randomNumber(255);
  bodyElement.style.background = `rgba(${randomRedNumber}, ${randomGreenNumber}, ${randomBlueNumber})`;
}

function switchColorMode(e) {
  const target = e.target;
  const otherTarget = [...target.parentElement.children].filter(
    (el) => el != target
  );

  if (!target.classList.contains("is-active")) {
    target.classList.add("is-active");
    otherTarget.forEach((el) => el.classList.remove("is-active"));
  }
}

changeColorButton.addEventListener("click", function () {
  if (rgbButton.classList.contains("is-active")) {
    handleBGRgbColor();
  } else {
    handleBGHexColor();
  }
});
rgbButton.addEventListener("click", switchColorMode);
hexButton.addEventListener("click", switchColorMode);
