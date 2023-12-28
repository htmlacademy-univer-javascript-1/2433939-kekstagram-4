import {setComments} from './comments.js';
import {pressEscape} from './util.js';

const bigPicture = document.querySelector('.big-picture');

const closeButton = bigPicture.querySelector('#picture-cancel');

const clearBigPicture = () => {
  bigPicture.classList.add('hidden');
  document.querySelector('body').classList.remove('modal-open');
};

const escapeKey = (evt) => {
  if (pressEscape(evt)) {
    clearBigPicture();
    document.removeEventListener('keydown', escapeKey);
  }
};

closeButton.addEventListener('click', () => {
  clearBigPicture();
  document.removeEventListener('keydown', escapeKey);
});

const ClickPicture = (picture, data) => {
  picture.addEvntListener('click', () => {
    document.addEventListener('keydown', escapeKey);

    bigPicture.classList.remove('hidden');

    bigPicture.querySelector('.big-picture__img img').src = data.url;
    bigPicture.querySelector('.social__caption').textContent = data.description;
    bigPicture.querySelector('.likes-count').textContent = data.likes;

    setComments(data.comments);

    document.querySelector('body').classList.add('modal-open');
  });
};

export {ClickPicture};
