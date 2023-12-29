import {uploadHashtagInput, clearHashtagsField, checkFormValidation} from './hashtag.js';
import {pressEscape} from './util.js';
import {setScale} from './scaler.js';
import {setEffects} from './effects.js';
import {setData} from './api.js';
import {addPostMessages, showSuccessMessage, closeMessage, showErrorMessage} from './message.js';
import {uploadUserPicture} from './user-picture.js';

const form = document.querySelector('.img-upload__form');

const uploadingControl = form.querySelector('#upload-file');
const uploadingOverlay = form.querySelector('.img-upload__overlay');
const uploadingClose = form.querySelector('#upload-cancel');

const uploadingComments = uploadingOverlay.querySelector('.text__description');
const uploadingButton = uploadingOverlay.querySelector('#upload-submit');

const clearForm = () => {
  uploadingOverlay.classList.add('hidden');
  document.querySelector('body').classList.remove('modal-open');

  uploadingControl.value = '';
  clearHashtagsField();
  uploadingComments.value = '';

  closeMessage();

  uploadingButton.disabled = false;
};

const onEscapeKeyDown = (evt) => {
  if(pressEscape(evt) && !evt.target.classList.contains('text__hashtags') && !evt.target.classList.contains('text__description')) {
    clearForm();

    document.removeEventListener('keydown', onEscapeKeyDown);
  }
};

const onUploadClick = () => {
  document.addEventListener('keydown', onEscapeKeyDown);

  uploadUserPicture(uploadingControl.files[0]);

  uploadingOverlay.classList.remove('hidden');
  document.querySelector('body').classList.add('modal-open');

  setScale();
  setEffects();

  uploadHashtagInput();
};

const uploadNewForm = () => {
  uploadingControl.addEventListener('change', onUploadClick);
  addPostMessages();
};

const closeForm = () => {
  clearForm();

  document.removeEventListener('keydown', onEscapeKeyDown);
};

uploadingClose.addEventListener('click', closeForm);

const onFormSubmit = (evt) => {
  evt.preventDefault();

  if(checkFormValidation()) {
    setData(showSuccessMessage, showErrorMessage, 'POST', new FormData(form));
  }
};

form.addEventListener('submit', onFormSubmit);

export{uploadNewForm, closeForm, onEscapeKeyDown};

