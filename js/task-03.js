const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
// const list = document.querySelector('.gallery');

// list.style = 'list-style: none; display: flex; justify-content: center';

// function makeItemLink(array) {
//   images.forEach(element => {
//     element.alt = element.alt.split(' ').join('-');

//     list.insertAdjacentHTML(
//       'beforeend',
//       `<li style='margin-right: 30px;' class='gallery__item'><img style="display: block;" class='gallery__img' src=${element.url} alt=${element.alt} width = 300></li>`,
//     );
//   });
// }

// makeItemLink(images);

// // TODO ↓↓↓ Второй вариант

const list = document.querySelector('.gallery');

const markup = images
  .map(
    image =>
      `<li><img class="picture" src=${image.url} height = '200px' width = 'auto' style = "box-shadow: 1px 0px 30px rgba(80, 158, 255, 1)" alt='${image.alt}'></img></li>`,
  )
  .join('');

list.insertAdjacentHTML('beforeend', markup);

const pictures = document.querySelectorAll('.picture');

list.style.display = 'flex';
list.style.justifyContent = 'center';
list.style.gap = '30px';
list.style.listStyle = 'none';
const test = document.querySelector('.picture');

// const gallery = document.querySelector('.gallery');

// const makeImages = images.map(image => {
//   const imageEl = document.createElement('img');
//   imageEl.className = 'images';
//   imageEl.src = image.url;
//   return imageEl;
// });
// gallery.append(...makeImages);
console.log(makeImages);
