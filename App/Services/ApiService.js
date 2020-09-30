import axios from 'axios';

export const httpGet = (url) => {
  return axios.get(url);
}