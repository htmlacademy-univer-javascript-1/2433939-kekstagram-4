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

//Функция, которая принимает время начала и конца рабочего дня, а также время старта и продолжительность встречи в минутах и возвращает true, если встреча не выходит за рамки рабочего дня, и false, если выходит
const convertToMinutes = (arr) => ((+arr[0] * 60) + +arr[1]);

const checkTime = (start, end, startMeeting, duration) => {
  const startTime = start.split(':');
  const endTime = end.split(':');
  const startMeetingTime = startMeeting.split(':');

  const startMinutesTime = convertToMinutes(startTime);
  const endMinutesTime = convertToMinutes(endTime);
  const startMeetingMinutesTime  = convertToMinutes(startMeetingTime);

  return startMeetingMinutesTime >= startMinutesTime && startMeetingMinutesTime + duration <= endMinutesTime;
};

//проверка
checkTime('08:00', '17:30', '14:00', 90);
checkTime('8:0', '10:0', '8:0', 120);
checkTime('08:00', '14:30', '14:00', 90);
checkTime('14:00', '17:30', '08:0', 90);
checkTime('8:00', '17:30', '08:00', 900);
