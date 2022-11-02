const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];
const listEl = document.querySelector('#ingredients');
const liArray = [];

ingredients.forEach(ingredient => {
  const itemEl = document.createElement('li');
  itemEl.textContent = ingredient;
  itemEl.classList.add('item');
  liArray.push(itemEl);
});
listEl.append(...liArray);

// TODO second version
// const makeItemEl = ingredients => {
//   return ingredients.map(ingredient => {
//     const itemEl = document.createElement('li');
//     itemEl.textContent = ingredient;
//     itemEl.classList.add('item');
//     return itemEl;
//   });
// };

// const elements = makeItemEl(ingredients);
// listEl.append(...elements);

// TODO ↓↓↓ third version

// listEl.append(
//   ...ingredients.map(ingredient => {
//     const itemEl = document.createElement('li');
//     itemEl.textContent = ingredient;
//     itemEl.classList.add('item');
//     return itemEl;
//   }),
// );
