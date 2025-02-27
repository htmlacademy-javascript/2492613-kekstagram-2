import { PHOTO_TYPES } from './constants.js';

const pictureForm = document.querySelector('.img-upload__form');
const pictureFormInput = pictureForm.querySelector('.img-upload__input');
const picturePreviewer = pictureForm.querySelector('.img-upload__preview');
const effectContainer = pictureForm.querySelector('.effects');
const effectsPreviewList = effectContainer.querySelectorAll('.effects__preview');

export const getPicture = () => {
  const file = pictureFormInput.files[0];
  const fileName = file.name.toLowerCase();
  const isMatched = PHOTO_TYPES.some((type) => fileName.endsWith(type));
  if (isMatched) {
    const fileUrl = URL.createObjectURL(file);
    picturePreviewer.children[0].src = fileUrl;
    effectsPreviewList.forEach((element) => {
      element.style.backgroundImage = `url("${fileUrl}")`;
    });
  }
};
