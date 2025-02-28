import { EFFECTS, EFFECTS_SETTINGS } from './constants.js';

const pictureForm = document.querySelector('.img-upload__form');
const effectSlider = pictureForm.querySelector('.effect-level__slider');
const sliderContainer = pictureForm.querySelector('.img-upload__effect-level');
const effectContainer = pictureForm.querySelector('.effects');
const effectLevelValue = pictureForm.querySelector('.effect-level__value');
const picturePreview = pictureForm.querySelector('.img-upload__preview img');

let currentEffect = EFFECTS.NONE;

noUiSlider.create(effectSlider, {
  range: {
    min: 0,
    max: 1,
  },
  start: 1,
  step: 0.1,
  connect: 'lower',
  format: {
    to: function (value) {
      return parseFloat(value);
    },
    from: function (value) {
      return parseFloat(value);
    },
  },
});

const render = () => {
  const { style, units } = EFFECTS_SETTINGS[currentEffect];
  picturePreview.style.filter = `${style}(${effectLevelValue.value}${units})`;
};

effectSlider.noUiSlider.on('update', () => {
  effectLevelValue.value = effectSlider.noUiSlider.get();
  render();
});

const updateSlider = () => {
  const { min, max, step } = EFFECTS_SETTINGS[currentEffect];
  effectSlider.noUiSlider.updateOptions({
    range: {
      min,
      max,
    },
    start: max,
    step,
  });
};

effectContainer.addEventListener('change', ({ target }) => {
  currentEffect = target.value;
  if (target.value === EFFECTS.NONE) {
    reset();
  } else {
    updateSlider();
    sliderContainer.classList.remove('hidden');
  }
});

export function reset() {
  currentEffect = EFFECTS.NONE;
  updateSlider();
  document.querySelector(`.effects__radio[value=${EFFECTS.NONE}]`).checked = true;
  sliderContainer.classList.add('hidden');
  picturePreview.style.filter = '';
}

reset();
