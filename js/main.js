import {uploadForm} from './upload-form.js';
import {setData} from './api.js';
import {onRecieveSuccess, showUnloadingErrorMesage} from './upload-data.js';

setData(onRecieveSuccess,
  () => {
    showUnloadingErrorMesage('Не удалось загрузить данные из сервера');
  },
  'GET');

uploadForm();
