const SCALE_STEP = 25;
const MIN_SCALER_VALUE = 25;
const MAX_SCALER_VALUE = 100;

const overlayElement = document.querySelector('.img-upload__overlay');
const uploadingPicture = overlayElement.querySelector('.img-upload__preview').querySelector('img');
const scale = overlayElement.querySelector('.img-upload__scale');
const scalerValue = scale.querySelector('.scale__control--value');

const changeScale = (scaleCoefficient) => {
  let curentScale = Number(scalerValue.value.replace('%', '')) + scaleCoefficient * SCALE_STEP;

  if(curentScale < MIN_SCALER_VALUE) {
    curentScale = MIN_SCALER_VALUE;
  }
  else if (curentScale > MAX_SCALER_VALUE) {
    curentScale = MAX_SCALER_VALUE;
  }

  scalerValue.value = `${curentScale}%`;
  uploadingPicture.style.transform = `scale(${curentScale / 100})`;
};

const clickOnScaleButton = (evt) => {
  if(evt.target.matches('button')) {
    let coefficient = 1;
    if(evt.target.matches('.scale__control--smaller')) {
      coefficient = -1;
    }

    changeScale(coefficient);
  }
};

const setScale = () => {
  scalerValue.value = `${MAX_SCALER_VALUE}%`;
  uploadingPicture.style.transform = `scale(${MAX_SCALER_VALUE / 100})`;
};

scale.addEventListener('click', clickOnScaleButton);

export{setScale};
