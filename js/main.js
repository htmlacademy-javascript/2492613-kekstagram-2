import { PHOTONUMBERS } from './constants.js';
import { createPhotoesData } from './createPictures.js';
import './openPictureForm.js';
import { renderPictures } from './renderPictures.js';


const picturesList = createPhotoesData(PHOTONUMBERS);
renderPictures(picturesList);
