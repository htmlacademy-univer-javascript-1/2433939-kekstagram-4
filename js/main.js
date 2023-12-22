import {getPhotos} from './data.js';
import {rendrPictures} from './pictures.js';
import {uploadForm} from './upload-form.js';

const picturesArray = getPhotos();
rendrPictures(picturesArray);
uploadForm();
