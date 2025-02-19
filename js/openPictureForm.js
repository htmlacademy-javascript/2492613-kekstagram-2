import { MAX_LENGTH_COMMENT, MAX_NUMBER_HASHTAG, VALID_HASHTAG } from './constants.js';
import { isEscapeKey} from './util.js';

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

export const openPictureForm = () => {
  pictureEditorForm.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
};

const closeUploader = () => {
  pictureEditorForm.classList.add('hidden');
  body.classList.remove('modal-open');
  pictureFormInput.value = '';
  hashtagsInput.value = '';
  commentInput.value = '';
  document.removeEventListener('keydown', onDocumentKeydown);
};

cancelFormButton.addEventListener('click', ()=>{
  closeUploader();
});


const pristine = new Pristine(pictureForm, {
  classTo: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper--error',
  errorTextParent: 'img-upload__field-wrapper',
});

const validateHashtags = (value) => {
  if(value === '') {
    return true;
  }
  const hashtags = value.split(' ');
  return hashtags.every((element) => VALID_HASHTAG.test(element));
};

const validateHashtagsNumber = (value) => {
  const hashtags = value.split(' ');
  return hashtags.length <= MAX_NUMBER_HASHTAG;
};

const validateHashtagsRepeat = (value) => {
  const hashtags = value.toLowerCase().split(' ');
  const unrepeatedHashtags = Array.from(new Set(hashtags));
  return hashtags.length === unrepeatedHashtags.length;
};

const validateComment = (value) => value.length <= MAX_LENGTH_COMMENT;

pristine.addValidator(hashtagsInput, validateHashtags, 'введён невалидный хэштег');
pristine.addValidator(hashtagsInput, validateHashtagsNumber, 'превышено количество хэштегов. допустимо не более 5');
pristine.addValidator(hashtagsInput, validateHashtagsRepeat, 'хэштеги повторяются');
pristine.addValidator(commentInput, validateComment, 'длина комментария больше 140 символов');

pictureFormInput.addEventListener('change', ()=>{
  openPictureForm();
});

pictureForm.addEventListener('submit', (evt)=>{
  evt.preventDefault();
  const isValid = pristine.validate();
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
