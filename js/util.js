const ALERT_SHOW_TIME = 4000;

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getUniqNumber = (min, max, array) => {
  let currentValue = getRandomInteger(min, max);
  if (array.length >= (max - min + 1)) {
    return null;
  }
  while (array.includes(currentValue)) {
    currentValue = getRandomInteger(min, max);
  }
  array.push(currentValue);
  return currentValue;
};

const generateArray = (length, max) => (
  [...new Array(length)].map(() => Math.round(Math.random() * max)));

const pressEscape = (evt) => evt.key === 'Escape';

const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = 100;
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = 0;
  alertContainer.style.top = 0;
  alertContainer.style.right = 0;
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '15px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

export {getUniqNumber, getRandomInteger, pressEscape, generateArray, showAlert};
