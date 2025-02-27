import { SERVER_HOST } from './constants.js';

export const getData = () => fetch(SERVER_HOST.GET)
  .then((response) => {
    if (!response.ok) {
      throw new Error();
    }
    return response.json();
  });

export const sendData = (body) => fetch(
  SERVER_HOST.SEND,
  {
    method: 'POST',
    body,
  })
  .then((response) => {
    if (!response.ok) {
      throw new Error();
    }
  });
