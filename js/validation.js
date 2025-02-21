import { MAX_LENGTH_COMMENT, MAX_NUMBER_HASHTAG, SPACE, VALID_HASHTAG } from './constants.js';
const pictureForm = document.querySelector('.img-upload__form');
const formFields = pictureForm.querySelector('.img-upload__text');
const hashtagsInput = formFields.querySelector('.text__hashtags');
const commentInput = formFields.querySelector('.text__description');

const pristine = new Pristine(pictureForm, {
  classTo: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper--error',
  errorTextParent: 'img-upload__field-wrapper',
});

const getHashtags = (value) => value.toLowerCase().replaceAll(SPACE, ' ').trim().split(' ');

const validateHashtags = (value) => {
  if(value === '') {
    return true;
  }
  const hashtags = getHashtags(value);
  return hashtags.every((element) => VALID_HASHTAG.test(element));
};

const validateHashtagsNumber = (value) => {
  const hashtags = getHashtags(value);
  return hashtags.length <= MAX_NUMBER_HASHTAG;
};

const validateHashtagsRepeat = (value) => {
  const hashtags = getHashtags(value);
  const unrepeatedHashtags = Array.from(new Set(hashtags));
  return hashtags.length === unrepeatedHashtags.length;
};

const validateComment = (value) => value.length <= MAX_LENGTH_COMMENT;

pristine.addValidator(
  hashtagsInput,
  validateHashtags,
  'введён невалидный хэштег'
);
pristine.addValidator(
  hashtagsInput,
  validateHashtagsNumber,
  `количество хэштегов не должно превышать ${MAX_NUMBER_HASHTAG}`
);
pristine.addValidator(
  hashtagsInput,
  validateHashtagsRepeat,
  'хэштеги повторяются'
);
pristine.addValidator(
  commentInput,
  validateComment,
  `длина комментария больше ${MAX_LENGTH_COMMENT} символов`
);

export const isValid = () => pristine.validate();
export const reset = () => pristine.reset();
