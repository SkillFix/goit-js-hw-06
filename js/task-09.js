const refs = {
  changeButton: document.querySelector('button.change-color'),
  body: document.querySelector('body'),
  colorValue: document.querySelector('span.color'),
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

refs.changeButton.addEventListener('click', event => {
  let color = getRandomHexColor();
  refs.colorValue.textContent = color;
  refs.body.style.backgroundColor = color;
});
