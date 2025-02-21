import { MAX_SCALE, MIN_SCALE, SCALE_STEP, SCALE_FACTOR } from './constants.js';
const pictureForm = document.querySelector('.img-upload__form');
const scaleControlDecrease = pictureForm.querySelector('.scale__control--smaller');
const scaleControlIncrease = pictureForm.querySelector('.scale__control--bigger');
const scaleControlValue = pictureForm.querySelector('.scale__control--value');
const picturePreview = pictureForm.querySelector('.img-upload__preview img');

let currentScale = MAX_SCALE;

const render = () => {
  scaleControlValue.value = `${currentScale}%`;
  picturePreview.style.transform = `scale(${currentScale * SCALE_FACTOR})`;
};

const increasePicture = () => {
  currentScale = Math.min(currentScale + SCALE_STEP, MAX_SCALE);
  render();
};

const decreasePicture = () => {
  currentScale = Math.max(currentScale - SCALE_STEP, MIN_SCALE);
  render();
};

scaleControlIncrease.addEventListener('click', increasePicture);

scaleControlDecrease.addEventListener('click', decreasePicture);

export const reset = () => {
  currentScale = MAX_SCALE;
  render();
};

reset();
