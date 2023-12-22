import {getPhotos} from './data.js';
import {rendrPictures} from './pictures.js';

const picturesArray = getPhotos();
rendrPictures(picturesArray);
