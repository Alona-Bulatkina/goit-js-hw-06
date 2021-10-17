const changeColorEl = document.querySelector('.change-color');
const spanEl = document.querySelector('.color');

changeColorEl.addEventListener('click', changeColor);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

function changeColor() {
  const color = getRandomHexColor();
  document.querySelector("body").style.backgroundColor = getRandomHexColor();
  spanEl.textContent = color;
};
