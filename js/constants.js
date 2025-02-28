export const SERVER_HOST = {
  SEND: 'https://31.javascript.htmlacademy.pro/kekstagram',
  GET: 'https://31.javascript.htmlacademy.pro/kekstagram/data',
};

export const PHOTO_TYPES = ['.jpg', '.jpeg', '.png'];
export const COMMENTS_STEP = 5;
export const VALID_HASHTAG = /^#[a-zа-яё0-9]{1,19}$/i;
export const MAX_NUMBER_HASHTAG = 5;
export const MAX_LENGTH_COMMENT = 140;
export const SPACE = /\s+/g;
export const SCALE_STEP = 25;
export const MAX_SCALE = 100;
export const MIN_SCALE = 25;
export const SCALE_FACTOR = 0.01;

export const EFFECTS = {
  NONE: 'none',
  CHROME: 'chrome',
  SEPIA: 'sepia',
  MARVIN: 'marvin',
  PHOBOS: 'phobos',
  HEAT: 'heat'
};

export const EFFECTS_SETTINGS = {
  [EFFECTS.NONE]: {
    min: 1,
    max: 100,
    step: 1,
    style: '',
    units: ''
  },
  [EFFECTS.CHROME]: {
    min: 0,
    max: 1,
    step: 0.1,
    style: 'grayscale',
    units: ''
  },
  [EFFECTS.SEPIA]: {
    min: 0,
    max: 1,
    step: 0.1,
    style: 'sepia',
    units: ''
  },
  [EFFECTS.MARVIN]: {
    min: 0,
    max: 100,
    step: 1,
    style: 'invert',
    units: '%'
  },
  [EFFECTS.PHOBOS]: {
    min: 0,
    max: 3,
    step: 0.1,
    style: 'blur',
    units: 'px'
  },
  [EFFECTS.HEAT]: {
    min: 1,
    max: 3,
    step: 0.1,
    style: 'brightness',
    units: ''
  }
};

export const ALERT_SHOW_TIME = 5000;
export const TIMEOUT_DELAY = 500;
export const RANDOM_COUNT = 10;

export const Filters = {
  DEFAULT: 'filter-default',
  DISCUSSED: 'filter-discussed',
  RANDOM: 'filter-random'
};

export const SubmitButtonText = {
  IDLE: 'Опубликовать',
  SENDING: 'Публикуем'
};

export const Popups = {
  SUCCESS: 'success',
  ERROR: 'error'
};
