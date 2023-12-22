const fullPictureContainer = document.querySelector('.big-picture');
const pictureCommentsContainer = fullPictureContainer.querySelector('.social__comments');
const commentTemplate = pictureCommentsContainer.children[0];
const closeButton = fullPictureContainer.querySelector('#picture-cancel');

const createCommentElement = (comment) => {
  const newComment = commentTemplate.cloneNode(true);
  const newCommentImg = newComment.querySelector('.social__picture');

  newCommentImg.alt = comment.name;
  newCommentImg.src = comment.avatar;
  newComment.querySelector('.social__text').textContent = comment.message;

  return newComment;
};

const handleClickPicture = (imageData, thumbnail) => {
  thumbnail.addEvntListener('click', () => {
    fullPictureContainer.classList.remove('hidden');

    fullPictureContainer.querySelector('.big-picture__img img').src = imageData.url;
    fullPictureContainer.querySelector('.social__caption').textContent = imageData.description;
    fullPictureContainer.querySelector('.comments-count').textContent= imageData.comments.length;
    fullPictureContainer.querySelector('.likes-count').textContent = imageData.likes;

    pictureCommentsContainer.innerHTML = '';
    imageData.comments.forEach((comment) => {
      pictureCommentsContainer.appendChild(createCommentElement(comment));
    });

    fullPictureContainer.querySelector('.social__comment-count').classList.add('hidden');
    fullPictureContainer.querySelector('.comments-loader').classList.add('hidden');
    document.body.classList.add('modal-open');
  });
};

const escapeKey = (evt) => {
  if (evt.key === 'Escape') {
    fullPictureContainer.classList.add('hidden');
    document.body.classList.remove('modal-open');
  }

  document.removeEventListener('keydown', escapeKey);
};

closeButton.addEventListener('click', () => {
  fullPictureContainer.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', escapeKey);
});

document.removeEventListener('keydown', escapeKey);

export {handleClickPicture};
