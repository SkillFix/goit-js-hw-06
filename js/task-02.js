const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];
const list = document.querySelector('#ingredients');
const liArray = [];

// ingredients.forEach(ingredient => {
//   const item = document.createElement('li');
//   item.className = 'item';
//   item.textContent = ingredient;
//   liArray.push(item);
// });

// list.append(...liArray);

// TODO ↓↓↓ Перебрал масив ингридиентов и создал новый c помощью map
// TODO ↓↓↓ на каждой интерации создал лишку с помощью createElement(),
// TODO ↓↓↓ наполнил лишки текстом из элементов масива,
// TODO ↓↓↓ добавил класс каждой лишке

// const makeItem = ingredients =>
//   ingredients.map(ingredient => {
//     const createItem = document.createElement('li');
//     createItem.textContent = ingredient;
//     createItem.classList.add('item');
//     return createItem;
//   });

// const elements = makeItem(ingredients);
// list.append(...elements);

// TODO ↓↓↓ упрощенный вариант

list.append(
  ...ingredients.map(ingredient => {
    const createItem = document.createElement('li');
    createItem.textContent = ingredient;
    createItem.classList.add('item');
    return createItem;
  }),
);
