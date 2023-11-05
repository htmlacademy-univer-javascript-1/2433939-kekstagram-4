const getRandomInteger = (min, max) => {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
};

const getRandomLikes = (min, max) => {
  const previousValues = [];

  return function () {
    let currentValue = getRandomInteger(min, max);
    if (previousValues.length >= (max - min + 1)) {
      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomInteger(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
};

const getRandomIdComment = (min, max) => {
  const previousValues = [];

  return function () {
    let currentValue = getRandomInteger(min, max);
    if (previousValues.length >= (max - min + 1)) {
      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomInteger(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
};

const getRandomMessage = () => {
  const messages = [
    'Всё отлично!',
    'В целом всё неплохо. Но не всё.',
    'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
    'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
    'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
    'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
  ];
  return messages[Math.floor(Math.random() * messages.length)];
};

const getRandomName = () => {
  const names = ['Петя', 'Валя', 'Игорь', 'Никита', 'Настя', 'Яна', 'Олег', 'Виктор'];
  const nameNumber = Math.floor(Math.random() * names.length);
  return names[nameNumber];
};

const getComments = (max) => {
  const numberOfComments = Math.floor(Math.random() * max);
  const comments = [];
  for(let i = 0; i <= numberOfComments - 1; i++) {
    const comment = {};
    comment.id = getRandomIdComment();
    comment.avatar = `img/avatar-${getRandomInteger(1, 6)}.svg`;
    comment.message = getRandomMessage();
    comment.name = getRandomName();
    comments.push(comment);
  }
  return comments;
};

const getPhotos = () => {
  const photos = [];
  for(let i = 0; i <= 24; i++) {
    const photo = {};
    photo.id = i + 1;
    photo.url = `photos/${String(i + 1)}.jpg`;
    photo.description = 'Невероятное фото с невероятным содержимым.';
    photo.likes = getRandomLikes(15, 25);
    photo.comments = getComments;
    photos.push(photo);
  }
  return photos;
};
