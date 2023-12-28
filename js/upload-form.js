import {pressEscape} from './util.js';
import {setEffects} from './effects.js';
import {setInitialScale} from './scaler.js';
import {setupHashtagInput, clearHashtagsField, checkFormValidation} from './hashtag.js';
import {setData} from './api.js';
import {addPostMessages, showSuccessMessage, closeMessage, showErrorMessage} from './post-message.js';

const form = document.querySelector('.img-upload__form');
const fileInput = form.querySelector('#upload-file');
const overlayElement = form.querySelector('.img-upload__overlay');
const closeUploadButton = form.querySelector('#upload-cancel');

const commentsTextArea = overlayElement.querySelector('.text__description');
const submitButton = overlayElement.querySelector('#upload-submit');

const clearUploadForm = () => {
  overlayElement.classList.add('hidden');
  document.querySelector('body').classList.remove('modal-open');

  fileInput.value = '';
  clearHashtagsField();
  commentsTextArea.value = '';
  closeMessage();

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
  addPostMessages();
};

const onFormSubmit = (evt) => {
  evt.preventDefault();

  if(checkFormValidation()) {
    setData(showSuccessMessage, showErrorMessage, 'POST', new FormData(form));
  }
};

form.addEventListener('submit', onFormSubmit);

export {uploadForm, closeUploadButton, escapeKey};
