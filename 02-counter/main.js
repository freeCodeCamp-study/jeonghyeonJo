const count = document.querySelector(".count");
const decreaseBtn = document.querySelector(".btn-decrease");
const resetBtn = document.querySelector(".btn-reset");
const increaseBtn = document.querySelector(".btn-increase");

const handleDecreaseBtn = () => {
  count.value = +count.value - 1;
  handleCountColor();
};

const handleIncreaseBtn = () => {
  count.value = +count.value + 1;
  handleCountColor();
};

const resetCounter = () => {
  count.value = 0;
  handleCountColor();
};

const handleCountColor = () => {
  if (count.value < 0) {
    count.style.color = "#bb3030";
  } else if (count.value > 0) {
    count.style.color = "#229443";
  } else {
    count.style.color = "#515262";
  }
};

decreaseBtn.addEventListener("click", handleDecreaseBtn);
increaseBtn.addEventListener("click", handleIncreaseBtn);
resetBtn.addEventListener("click", resetCounter);
