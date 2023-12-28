function getRandomInteger(intFrom, intTo){
  if (intFrom > intTo || intFrom < 0 || intTo < 0 ){
    return  new Error('Error. Change input values');
  }
  return Math.round(intFrom - 0.5 + Math.random(intFrom, intTo) * (1 + intTo - intFrom));
}

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

function debounce (callback, timeoutDelay = 500) {
  let timeoutId;

  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
}

const throttle = (array) => {
  for(let firstIndex = array.length - 1; firstIndex > 0; firstIndex--) {
    const randomIndex = Math.floor(Math.random() * (firstIndex + 1));
    [array[firstIndex], array[randomIndex]] = [array[randomIndex], array[firstIndex]];
  }

  return array;
};

export {getUniqNumber, getRandomInteger, pressEscape, generateArray, debounce, throttle};
