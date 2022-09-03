const items = document.querySelectorAll('.item');
const titles = document.querySelectorAll('h2');
const list = document.querySelectorAll('ul');

console.log('Number of categories: ', items.length);

for (let i = 0; i < items.length; i += 1) {
  console.log('Category: ', titles[i].textContent);
  console.log('Elements: ', list[i].children.length);
}

const menuList = document.querySelectorAll('.item');
console.log(`Number of categories: ${menuList.length}`);
menuList.forEach(item => {
  console.log(`Category: ${item.firstElementChild.textContent}`);
  console.log(`Elements: ${item.lastElementChild.chilren.textContent}`);
});
