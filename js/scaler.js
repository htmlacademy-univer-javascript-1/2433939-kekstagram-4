const SCALE_STEP = 25;

const MAX_SCALE_VALUE = 100;
const MIN_SCALE_VALUE = 25;

const overlayElement = document.querySelector('.img-upload__overlay');
const pictureElement = overlayElement.querySelector('.img-upload__preview img');
const scaleElement = overlayElement.querySelector('.img-upload__scale');
const scalerValueElement = scaleElement.querySelector('.scale__control--value');

const changeScale = (scaleCoefficient) => {
  let currentScale = Number(scalerValueElement.value.replace('%', '')) + scaleCoefficient * SCALE_STEP;

  if (currentScale < MIN_SCALE_VALUE) {
    currentScale = MIN_SCALE_VALUE;
  } else if (currentScale > MAX_SCALE_VALUE) {
    currentScale = MAX_SCALE_VALUE;
  }

  scalerValueElement.value = `${currentScale}%`;
  pictureElement.style.transform = `scale(${currentScale / 100})`;
};

const ClickOnScaleButton = (evt) => {
  if (evt.target.matches('button')) {
    let coefficient = 1;

    if (evt.target.matches('.scale__control--smaller')) {
      coefficient = -1;
    }

    changeScale(coefficient);
  }
};

const setInitialScale = () => {
  scalerValueElement.value = `${MAX_SCALE_VALUE}%`;
  pictureElement.style.transform = `scale(${MAX_SCALE_VALUE / 100})`;
};

scaleElement.addEventListener('click', ClickOnScaleButton);

export {setInitialScale};
