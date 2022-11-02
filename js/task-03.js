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
const galleryEl = document.querySelector('.gallery');

const createMarkup = images
  .map(
    image =>
      `<li><img class="picture" src=${image.url} height = '200px' width = 'auto' style = "box-shadow: 1px 0px 30px rgba(80, 158, 255, 1)" alt='${image.alt}'></img></li>`,
  )
  .join('');
galleryEl.insertAdjacentHTML('beforeend', createMarkup);

galleryEl.style.display = 'flex';
galleryEl.style.justifyContent = 'center';
galleryEl.style.gap = '30px';
galleryEl.style.listStyle = 'none';

// TODO second version
// galleryEl.style = 'list-style: none; display: flex; justify-content: center';

// function makeItemLink(images) {
//   images.forEach(img => {
//     img.alt = img.alt.split(' ').join('-');

//     galleryEl.insertAdjacentHTML(
//       'beforeend',
//       `<li style='margin-right: 30px;' class='gallery__item'><img style = "box-shadow: 1px 0px 30px rgba(80, 158, 255, 1)"; class='gallery__img' src=${img.url} alt=${img.alt} width = 300></li>`,
//     );
//   });
// }

// makeItemLink(images);
