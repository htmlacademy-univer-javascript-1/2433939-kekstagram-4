import {handleClickPicture} from './big-picture.js';

const picturesContainer = document.querySelector('.pictures');
const createPicture = document.querySelector('#picture').content;
const picturesFragment = document.createDocumentFragment();

const renderPicture = (picture) => {

  const pictureElement = createPicture.cloneNode(true);
  pictureElement.querySelector('.picture__img');
  pictureElement.querySelector('.picture__img');
  pictureElement.querySelector('.picture__likes');
  pictureElement.querySelector('.picture__comments');

  pictureElement.addEventListener('click', (evt) => {
    evt.preventDefault();

    handleClickPicture(picture);
  });
  return pictureElement;
};

const renderPictures = (images) => {
  images.foreach((picture) => {
    picturesFragment.appendChild(renderPicture(picture));
  });
  picturesContainer.appendChild(picturesFragment);
};

export {renderPictures};
