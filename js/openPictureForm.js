import { isValid } from './validation.js';
import { reset as resetValidation } from './validation.js';
import { reset as resetScale } from './scale.js';
import { reset as resetEffects} from'./effects.js';
import { removeEscapeControl, setEscapeControl } from './escapeControl.js';
import { sendData } from './server.js';
import { showPopup } from './popup.js';

const body = document.querySelector('body');
const pictureForm = body.querySelector('.img-upload__form');
const pictureFormInput = pictureForm.querySelector('.img-upload__input');
const pictureEditorForm = pictureForm.querySelector('.img-upload__overlay');
const cancelFormButton = pictureForm.querySelector('.img-upload__cancel');
const submitFormButton = pictureForm.querySelector('.img-upload__submit');

const formFields = pictureForm.querySelector('.img-upload__text');
const hashtagsInput = formFields.querySelector('.text__hashtags');
const commentInput = formFields.querySelector('.text__description');

const closeFormFlag = () => !(document.activeElement === hashtagsInput || document.activeElement === commentInput);

const closePictureForm = () => {
  pictureEditorForm.classList.add('hidden');
  body.classList.remove('modal-open');
  pictureForm.reset();
  resetValidation();
  resetScale();
  resetEffects();
};

const openPictureForm = () => {
  pictureEditorForm.classList.remove('hidden');
  body.classList.add('modal-open');
  setEscapeControl(closePictureForm, closeFormFlag);
};

pictureFormInput.addEventListener('change', ()=>{
  openPictureForm();
});

cancelFormButton.addEventListener('click', (evt)=>{
  evt.preventDefault();
  closePictureForm();
  removeEscapeControl();
});

pictureForm.addEventListener('submit', (evt)=>{
  evt.preventDefault();
  if (isValid) {
    sendData(new FormData(evt.target))
      .then(()=>{
        closePictureForm ();
        removeEscapeControl();
        showPopup('success');
      })
      .catch(() => {
        showPopup('error');
      });
  }
});
