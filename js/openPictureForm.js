import { isEscapeKey } from './util.js';
import { isValid } from './validation.js';
import { reset as resetValidation } from './validation.js';
import { reset as resetScale } from './scale.js';
import {reset as resetEffects} from'./effects.js';

const body = document.querySelector('body');
const pictureForm = body.querySelector('.img-upload__form');
const pictureFormInput = pictureForm.querySelector('.img-upload__input');
const pictureEditorForm = pictureForm.querySelector('.img-upload__overlay');
const cancelFormButton = pictureForm.querySelector('.img-upload__cancel');
const submitFormButton = pictureForm.querySelector('.img-upload__submit');

const formFields = pictureForm.querySelector('.img-upload__text');
const hashtagsInput = formFields.querySelector('.text__hashtags');
const commentInput = formFields.querySelector('.text__description');

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closePictureForm();
  }
};

const openPictureForm = () => {
  pictureEditorForm.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
};

const closePictureForm = () => {
  pictureEditorForm.classList.add('hidden');
  body.classList.remove('modal-open');
  pictureForm.reset();
  resetValidation();
  resetScale();
  resetEffects();
  document.removeEventListener('keydown', onDocumentKeydown);
};

pictureFormInput.addEventListener('change', ()=>{
  openPictureForm();
});

cancelFormButton.addEventListener('click', (evt)=>{
  evt.preventDefault();
  closePictureForm();
});

pictureForm.addEventListener('submit', (evt)=>{
  evt.preventDefault();
  if (isValid) {
    console.log('Можно отправлять');
  }
});

hashtagsInput.addEventListener('keydown', (evt) => {
  if (isEscapeKey(evt)) {
    evt.stopPropagation();
  }
});

commentInput.addEventListener('keydown', (evt) => {
  if (isEscapeKey(evt)) {
    evt.stopPropagation();
  }
});
