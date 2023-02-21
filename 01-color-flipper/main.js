const bodyElement = document.querySelector("body");
const changeColorBtn = document.querySelector(".changeColorBtn");

function randomNumber(maxNumber) {
  const MAX_NUMBER = maxNumber;
  return Math.floor(Math.random() * (MAX_NUMBER + 1));
}

function handleBGHexColor() {
  const randomHexNumber = randomNumber(16777215).toString(16);
  bodyElement.style.background = `#${randomHexNumber}`;
}

changeColorBtn.addEventListener("click", handleBGHexColor);
