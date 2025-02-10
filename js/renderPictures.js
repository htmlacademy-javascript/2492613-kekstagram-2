const picturesContainer = document.querySelector('.pictures');

const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const picturesFragment = document.createDocumentFragment();

export const renderPictures = (pictures) => {
  pictures.forEach((element) => {
    const pictureElement = pictureTemplate.cloneNode(true);
    const pictureImg = pictureElement.querySelector('.picture__img');
    pictureImg.src = element.url;
    pictureImg.alt = element.description;
    pictureElement.querySelector('.picture__comments').textContent = element.comments.length;
    pictureElement.querySelector('.picture__likes').textContent = element.likes;
    picturesFragment.appendChild(pictureElement);
  });

  picturesContainer.appendChild(picturesFragment);
};
