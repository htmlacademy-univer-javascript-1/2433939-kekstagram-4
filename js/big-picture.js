const fullPictureContainer = document.querySelector('.big-picture');
const pictureCommentsContainer = fullPictureContainer.querySelector('.social__comments');
const commentTemplate = pictureCommentsContainer.children[0];
const closeButton = fullPictureContainer.querySelector('#picture-cancel');
const commentCount = fullPictureContainer.querySelector('.social__comment-count');
const commentsLoader = fullPictureContainer.querySelector('.comments-loader');

let displayedComments = 5;

const createCommentElement = (comment) => {
  const newComment = commentTemplate.cloneNode(true);
  const newCommentImg = newComment.querySelector('.social__picture');

  newCommentImg.alt = comment.name;
  newCommentImg.src = comment.avatar;
  newComment.querySelector('.social__text').textContent = comment.message;

  return newComment;
};

const renderComments = (comments) => {
  pictureCommentsContainer.innerHTML = '';

  comments.slice(0, displayedComments).forEach((comment) => {
    pictureCommentsContainer.appendChild(createCommentElement(comment));
  });
  commentCount.textContent = `${displayedComments} из ${comments.length} коментариев`;
};

const buttonLoadMoreComments = (imageData) => {
  displayedComments += 5;

  renderComments(imageData.comments);

  if (displayedComments >= imageData.comments.length) {
    commentsLoader.classList.add('hidden');
  }
};

const handleClickPicture = (imageData, thumbnail) => {
  thumbnail.addEvntListener('click', () => {
    fullPictureContainer.classList.remove('hidden');

    fullPictureContainer.querySelector('.big-picture__img img').src = imageData.url;
    fullPictureContainer.querySelector('.social__caption').textContent = imageData.description;
    fullPictureContainer.querySelector('.comments-count').textContent= imageData.comments.length;
    fullPictureContainer.querySelector('.likes-count').textContent = imageData.likes;

    commentCount.classList.remove('hidden');
    commentsLoader.classList.remove('hidden');
    renderComments(imageData.comments);

    fullPictureContainer.querySelector('.social__comment-count').classList.add('hidden');
    document.body.classList.add('modal-open');
  });
};

const escapeKey = (evt) => {
  if (evt.key === 'Escape') {
    fullPictureContainer.classList.add('hidden');
    document.body.classList.remove('modal-open');
    document.removeEventListener('keydown', escapeKey);
  }
};

closeButton.addEventListener('click', () => {
  fullPictureContainer.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', escapeKey);
});

commentsLoader.addEventListener('click', buttonLoadMoreComments);
document.addEventListener('keydown', escapeKey);

export {handleClickPicture};
