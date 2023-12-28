const MAX_HASHTAGS_LENGTH = 20;
const MAX_HASHTAGS_COUNT = 5;

const uploadForm = document.querySelector('.img-upload__form');

const hashtagInputField = uploadForm.querySelector('.text__hashtags');
const submitButton = uploadForm.querySelector('#upload-submit');

const formValidator = new Pristine(uploadForm, {
  classTo: 'img-upload__field-wrapper',
  errorClass: 'img-upload__item--invalid',
  successClass: 'img-upload__item--valid',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextTag: 'div',
  errorTextClass: 'img-upload__error'
});

let errorMessage = '';

const getErrorMessage = () => errorMessage;

const hashtagErrorHandler = (value) => {
  errorMessage = '';

  const hashtagInputText = value.toLowerCase().trim();

  if(hashtagInputText.length === 0) {
    return true;
  }

  const hashtagTexts = hashtagInputText.split(/\s+/);

  if(hashtagTexts.length === 0) {
    return true;
  }

  const inputRules = [
    {
      rule: hashtagTexts.some((text) => text[0] !== '#'),
      error: 'Хэш-тег должен начинаться с символа # (решётка)'
    },
    {
      rule: hashtagTexts.some((text) => text.length === 1 || text[0] !== '#'),
      error: 'Хеш-тег не может состоять только из одной решётки'
    },
    {
      rule: hashtagTexts.some((text) => text.length > MAX_HASHTAGS_LENGTH),
      error: `Длина хеш-тега превышает ${MAX_HASHTAGS_LENGTH} символов`
    },
    {
      rule: hashtagTexts.some((text) => text.indexOf('#', 1) > 0),
      error: 'Хэш-теги должны разделяться пробелами'
    },
    {
      rule: hashtagTexts.some((text, index, array) => array.indexOf(text, index + 1) > index),
      error: 'Один и тот же хэш-тег не может быть использован дважды'
    },
    {
      rule: hashtagTexts.length > MAX_HASHTAGS_COUNT,
      error: `Нельзя указывать больше ${MAX_HASHTAGS_COUNT} хэш-тегов`
    },
    {
      rule: hashtagTexts.some((text) => !/^#[0-9а-яёa-z]{1,19}$/i.test(text)),
      error: 'Хеш-тег содержит недопустимые символы'
    }
  ];

  return inputRules.every((inputRule) => {
    const isValid = !inputRule.rule;
    if(!isValid) {
      errorMessage = inputRule.error;
    }
    return isValid;
  });
};

formValidator.addValidator(hashtagInputField, hashtagErrorHandler, getErrorMessage, 2, false);

const changeHashtagInput = () => {
  submitButton.disabled = !formValidator.validate();
};

const setupHashtagInput = () => {
  hashtagInputField.addEventListener('input', changeHashtagInput);
};

const checkFormValidation = () => formValidator.validate();

const clearHashtagsField = () => {
  hashtagInputField.value = '';

  formValidator.validate();
};

export {clearHashtagsField, setupHashtagInput, checkFormValidation};
