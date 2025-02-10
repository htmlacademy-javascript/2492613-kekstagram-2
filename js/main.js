import { PHOTONUMBERS } from './constants.js';
import { createPhotoesData } from './createPictures.js';
import { renderPictures } from './renderPictures.js';

const picturesList = createPhotoesData(PHOTONUMBERS);
renderPictures(picturesList);
