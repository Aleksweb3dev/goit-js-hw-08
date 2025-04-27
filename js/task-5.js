function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changedBtn = document.querySelector('.change-color');
changedBtn.addEventListener('click', clickColorBtn);
function clickColorBtn(event) {
  const randomColor = getRandomHexColor();
  const bodyEl = document.body;
  const spanEl = document.querySelector('.color');

  bodyEl.style.backgroundColor = randomColor;
  spanEl.textContent = randomColor;
}
