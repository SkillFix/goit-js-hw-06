// Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.

const btnDecrement = document.querySelector('button[data-action="decrement"]');
const btnIncrement = document.querySelector('button[data-action="increment"]');
const counterEl = document.querySelector('#value');

const counterValue = {
  value: 0,
  decrement() {
    this.value -= 1;
  },
  increment() {
    this.value += 1;
  },
};
btnDecrement.addEventListener('click', function () {
  counterValue.decrement();
  counterEl.textContent = counterValue.value;
});
btnIncrement.addEventListener('click', function () {
  counterValue.increment();
  counterEl.textContent = counterValue.value;
});
