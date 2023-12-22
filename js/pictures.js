import {getPhotos} from './data.js';

const picturesContainer = document.querySelector('.pictures');
const createPicture = document.querySelector('#picture').textContent;

const photos = getPhotos;

const fragment = document.createDocumentFragment();

photos.forEach(({url, decription, likes, comments }) => {
  const pictureElement = createPicture.cloneNode(true);
  pictureElement.querySelector('.picture__img').alt=url;
  pictureElement.querySelector('.picture__img').alt=decription;
  pictureElement.querySelector('.picture__likes').textContent=likes;
  pictureElement.querySelector('.picture__comments').textContent=comments.length;
  fragment.appendChild(pictureElement);
});

picturesContainer.appendChild(fragment);
