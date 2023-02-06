import axios, { AxiosInstance } from 'axios';
import { setInterceptors } from './intercepter';

const APP_BASE_URI = 'https://api.hnpwa.com/v0/';

const createInstance = (url: string): AxiosInstance => {
  return axios.create({
    baseURL: APP_BASE_URI + url,
  });
};

const createInstanceWithAuth = (url: string): AxiosInstance => {
  return setInterceptors(createInstance(url));
};

const user: AxiosInstance = createInstanceWithAuth('user/');
const item: AxiosInstance = createInstanceWithAuth('item/');
const list: AxiosInstance = createInstance('');

export { user, item, list };
