import { openModal } from './openModal.js';

const picturesContainer = document.querySelector('.pictures');

const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

let localData;

export const renderPictures = (pictures) => {
  localData = [...pictures];
  const picturesFragment = document.createDocumentFragment();

  pictures.forEach((element) => {
    const pictureElement = pictureTemplate.cloneNode(true);
    const pictureImg = pictureElement.querySelector('.picture__img');
    pictureImg.src = element.url;
    pictureImg.alt = element.description;
    pictureElement.dataset.pictureId = element.id;
    pictureElement.querySelector('.picture__comments').textContent = element.comments.length;
    pictureElement.querySelector('.picture__likes').textContent = element.likes;
    picturesFragment.appendChild(pictureElement);
  });

  picturesContainer.appendChild(picturesFragment);
};

picturesContainer.addEventListener('click', (evt) => {
  const pictureElement = evt.target.closest('.picture');
  if(pictureElement) {
    const id = Number(pictureElement.dataset.pictureId);
    const pictureData = localData.find((item) => item.id === id);
    openModal(pictureData);
  }
});
