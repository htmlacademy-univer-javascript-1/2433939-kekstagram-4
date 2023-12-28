import {showBigPicture} from './big-pictures.js';

const picturesContainer = document.querySelector('.pictures');
const template = document.querySelector('#picture').content.querySelector('.picture');
const pictureFragment = document.createDocumentFragment();

const renderPicture = (picture) => {
  const element = template.cloneNode(true);
  element.querySelector('.picture__img').src = picture.url;
  element.querySelector('.picture__likes').textContent = picture.likes;
  element.querySelector('.picture__comments').textContent = picture.comments.length;
  element.addEventListener('click', () => {
    showBigPicture(picture);
  });
  pictureFragment.appendChild(element);
};

const renderUserPhotos = (pictures) => {
  pictures.forEach((picture) => {
    renderPicture(picture);
  });
  return picturesContainer.appendChild(pictureFragment);
};

export {renderUserPhotos};
