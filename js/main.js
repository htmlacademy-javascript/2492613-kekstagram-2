import './openPictureForm.js';
import { renderPictures } from './renderPictures.js';
import { getData } from './server.js';
import { showAlert } from './util.js';

getData()
  .then((picturesList) => {
    renderPictures(picturesList);
  })
  .catch(() => {
    showAlert();
  }
  );
