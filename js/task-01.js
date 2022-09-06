const items = document.querySelectorAll('.item');

const titles = document.querySelectorAll('h2');
const list = document.querySelectorAll('ul');

console.log('Number of categories: ', items.length);

for (let i = 0; i < items.length; i += 1) {
  console.log('Category: ', titles[i].textContent);
  console.log('Elements: ', list[i].children.length);
}

// TODO ↓↓↓ Второй вариант
// const elementList = document.querySelector('#categories').children;
// console.log('Number of categories: ', elementList.length);

// [...elementList].forEach(element => {
//   const title = element.firstElementChild.textContent;
//   const list = element.querySelectorAll('li').length;
//   console.log('Category: ', title);
//   console.log('Elements: ', list);
// });

// TODO ↓↓↓ Третий  вариант
// [...elementList].forEach(item => {
//   console.log(`Category: ${item.firstElementChild.textContent}`);
//   console.log(`Elements: ${item.lastElementChild.children.length}`);
// });
