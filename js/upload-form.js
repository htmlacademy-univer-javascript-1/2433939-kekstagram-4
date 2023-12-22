import {pressEscape} from './util.js';
import {setupHashtagInput, clearHashtagsField} from './hashtag.js';
import {setEffects} from './effects.js';
import {setInitialScale} from './scaler.js';

const fileInput = document.querySelector('#upload-file');
const overlayElement = document.querySelector('.img-upload__overlay');
const closeUploadButton = document.querySelector('#upload-cancel');

const commentsTextArea = overlayElement.querySelector('.text__description');
const submitButton = overlayElement.querySelector('#upload-submit');

const clearUploadForm = () => {
  overlayElement.classList.add('hidden');
  document.body.classList.remove('modal-open');

  fileInput.value = '';
  clearHashtagsField();
  commentsTextArea.value = '';

  submitButton.disabled = false;
};

const escapeKey = (evt) => {
  if (pressEscape(evt) && !evt.target.classList.contains('text__hashtags') && !evt.target.classList.contains('text__description')) {
    clearUploadForm();

    document.removeEventListener('keydown', escapeKey);
  }
};

closeUploadButton.addEventListener('click', () => {
  clearUploadForm();

  document.removeEventListener('keydown', escapeKey);
});

const ClickOnUpload = () => {
  document.addEventListener('keydown', escapeKey);

  overlayElement.classList.remove('hidden');
  document.body.classList.add('modal-open');

  setInitialScale();
  setEffects();

  setupHashtagInput();
};

const uploadForm = () => {
  fileInput.addEventListener('change', ClickOnUpload);
};

export {uploadForm};
