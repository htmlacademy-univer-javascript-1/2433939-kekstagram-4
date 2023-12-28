import {ClickPicture} from './big-picture.js';

const picturesContainer = document.querySelector('.pictures');
const createPicture = document.querySelector('#picture').content.querySelector('.picture');
const picturesFragment = document.createDocumentFragment();

const renderPicture = (picture) => {
  const pictureElement = createPicture.cloneNode(true);
  pictureElement.querySelector('.picture__img').src = picture.url;
  pictureElement.querySelector('.picture__likes').textContent = picture.likes;
  pictureElement.querySelector('.picture__comments').textContent = picture.comments.length;
  pictureElement.addEventListener('click', () => {
    ClickPicture(picture);
  });
  picturesFragment.appendChild(pictureElement);
};

const renderPictures = (images) => {
  images.forEach((picture) => {
    renderPicture(picture);
  });
  return picturesContainer.appendChild(picturesFragment);
};

export {renderPictures};
