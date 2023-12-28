import {getRandomInteger, getUniqNumber, generateArray} from './util.js';

const photosId = generateArray(25, 25);
const usersId = generateArray(25,25);
const NUMBER_OF_COMMENTS = 10;
const NUMBER_OF_POSTS = 25;

const NAMES = [
  'Петя',
  'Валя',
  'Игорь',
  'Никита',
  'Настя',
  'Яна',
  'Олег',
  'Виктор'
];
const MESSAGE = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];
const DESCRIPTIONS = [
  'Тут могла быть ваша реклама.',
  'Это ведь так весело, правда? Правила нарушать.',
  'Если я в чем то сомневаюсь, я возвращаюсь к началу.',
  'Я личность! Понятно? Бесформенная, но личность!',
  'Ну это уж совсем не доказательство…'
];

const getComments = () => ({
  id: getUniqNumber(usersId),
  avatar:`img/avatar-${getRandomInteger(1, 6)}.svg`,
  message: MESSAGE[getRandomInteger(0, 1)],
  name: NAMES[getRandomInteger(0, NAMES.length-1)]
});

const getPhoto = () => ({
  id: photosId[getRandomInteger(1,NUMBER_OF_POSTS-1)],
  url: `photos/${getRandomInteger(1, NUMBER_OF_POSTS-1)}.jpg`,
  description: DESCRIPTIONS[getRandomInteger(0, DESCRIPTIONS.length-1)],
  likes: getRandomInteger(15, 200),
  comments: Array.from({length: NUMBER_OF_COMMENTS}, getComments)
});

const getPhotos = () => Array.from({length: NUMBER_OF_POSTS}, getPhoto);

export {getPhotos};
