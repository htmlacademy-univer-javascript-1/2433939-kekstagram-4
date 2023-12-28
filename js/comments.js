const MAX_NEW_COMMENTS = 5;

const imageContainer = document.querySelector('.big-picture');
const loadMoreButton = imageContainer.querySelector('.comments-loader');
const commentsCountItem = imageContainer.querySelector('.social__comment-count');
const commentsContainer = imageContainer.querySelector('.social__comments');
const commentTemplate = commentsContainer.children[0];

let COMMENTS_MULTIPLYER = 1;

const createCommentItem = (comment) => {
  const newComment = commentTemplate.cloneNode(true);
  const commentImage = newComment.querySelector('.social__picture');

  commentImage.src = comment.avatar;
  commentImage.alt = comment.name;

  newComment.querySelector('.social__text').textContent = comment.message;

  newComment.classList.add('hidden');

  return newComment;
};

const addNewComments = () => {
  const newCommentsCount = MAX_NEW_COMMENTS * COMMENTS_MULTIPLYER;
  const commentsOverallCount = commentsContainer.children.length;
  const addedCommentsCount = newCommentsCount >= commentsOverallCount ? commentsOverallCount : newCommentsCount;

  for(let i = 0; i < addedCommentsCount; i++) {
    if (i < newCommentsCount && i >= newCommentsCount - MAX_NEW_COMMENTS) {
      commentsContainer.children[i].classList.remove('hidden');
    }
  }

  if(commentsOverallCount > newCommentsCount) {
    loadMoreButton.classList.remove('hidden');
  }
  else{
    loadMoreButton.classList.add('hidden');
  }

  commentsCountItem.innerHTML = `${addedCommentsCount} из <span class="comments-count">${commentsOverallCount}</span> комментариев`;
};

const setComments = (comments) => {
  commentsContainer.innerHTML = '';
  comments.forEach((comment) => {
    commentsContainer.appendChild(createCommentItem(comment));
  });
  COMMENTS_MULTIPLYER = 1;
  addNewComments();
};

loadMoreButton.addEventListener('click', () => {
  addNewComments(COMMENTS_MULTIPLYER++);
});

export {setComments};
