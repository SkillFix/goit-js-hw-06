function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// const changeButton = document.querySelector('button.change-color');
// const body = document.querySelector('body');
// const colorValue = document.querySelector('span.color');

// Способ хранить все ссылки
const refs = {
  changeButton: document.querySelector('button.change-color'),
  body: document.querySelector('body'),
  colorValue: document.querySelector('span.color'),
};

refs.changeButton.addEventListener('click', event => {
  let color = getRandomHexColor();
  refs.body.style.backgroundColor = color;
  refs.colorValue.textContent = color;
});
