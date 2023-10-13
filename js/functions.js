//Функция для проверки длины строки
const checkStringLength = (string, maxLength) => string.length <= maxLength;

//Проверка
checkStringLength('проверяемая строка', 20);

//Функция для проверки строки на палиндром
const checkStringForPalindrom = (string) => {
  const normalString = string.replaceAll(' ', '').toLowerCase();
  let newString = '';
  for (let i = normalString.length - 1; i >= 0; --i) {
    newString += normalString[i];
  }
  return newString === normalString;
};

//Проверка
checkStringForPalindrom('Лёша на полке клопа нашёл ');

//Доп функция
const findNumber = (input) => {
  const string = input.toString();
  const controlString = '0123456789';
  let number = '';
  for (let i = 0; i < string.length; i++) {
    if (controlString.indexOf(string[i]) !== -1) {
      number += string[i];
    }
  }
  if (isNaN(number)){
    return NaN;
  }
  return parseInt(number,10);
};

//Проверка
findNumber('2023 год');
