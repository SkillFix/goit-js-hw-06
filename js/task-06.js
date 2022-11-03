// 1. Напиши скрипт, который при потере фокуса на инпуте (событие blur), проверяет его содержимое на правильное количество введённых символов.
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// 2. Если введено подходящее количество символов, то border инпута становится зелёным, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid, которые мы уже добавили в исходные файлы задания.

const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', event => {
  if (event.target.value.length.toString() === inputEl.getAttribute('data-length')) {
    inputEl.classList.add('valid');

    if (inputEl.classList.contains('invalid')) {
      inputEl.classList.remove('invalid');
    }
  } else {
    if (inputEl.classList.contains('valid')) {
      inputEl.classList.remove('valid');
    }
    inputEl.classList.add('invalid');
  }
});
