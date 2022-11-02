const categoriesEl = document.querySelector('#categories');
const itemsEl = document.querySelectorAll('.item');

console.log('Number of categories: ', itemsEl.length);

itemsEl.forEach(item => {
  const title = item.firstElementChild;
  const list = item.querySelectorAll('li');
  console.log('Category: ', title.textContent);
  console.log('Elements: ', list.length);
});

// TODO ↓↓↓ second version
// console.log(`Number of categories: ${categoriesEl.children.length}`);
// itemsEl.forEach(item => {
//   console.log(`Category: ${item.firstElementChild.textContent}`);
//   console.log(`Elements: ${item.lastElementChild.children.length}`);
// });
