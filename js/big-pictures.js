import {setComments} from './comments.js';
import {pressEscape} from './util.js';

const bigPicture = document.querySelector('.big-picture');

const closeButton = bigPicture.querySelector('#picture-cancel');

const clearBigPicture = () => {
  bigPicture.classList.add('hidden');
  document.querySelector('body').classList.remove('modal-open');
};

const escapeKeyDown = (evt) => {
  if(pressEscape(evt)){
    clearBigPicture();

    document.removeEventListener('keydown', escapeKeyDown);
  }
};

closeButton.addEventListener('click', () => {
  clearBigPicture();

  document.removeEventListener('keydown', escapeKeyDown);
});

const showBigPicture = (data) => {
  document.addEventListener('keydown', escapeKeyDown);

  bigPicture.classList.remove('hidden');

  bigPicture.querySelector('.big-picture__img').querySelector('img').src = data.url;
  bigPicture.querySelector('.likes-count').textContent = data.likes;
  bigPicture.querySelector('.social__caption').textContent = data.description;

  setComments(data.comments);

  document.querySelector('body').classList.add('modal-open');
};

export {showBigPicture};
