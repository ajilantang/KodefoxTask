//@flow
import React from 'react';
// import 'babel-pollyfill';
import {result as _result} from 'lodash';
import {Promise} from 'es6-promise';
const parseJson = (response: Promise) =>
  new Promise((resolve, reject) => {
    response
      .json()
      .then((result) => {
        response.data = result;
        resolve(response);
      })
      .catch((err) => {
        response.data = err;
        reject(response);
      });
  });

export default function fetchGithubData(username: string) {
  return fetch(`https://api.github.com/users/${username}`)
    .then(parseJson)
    .then((response) => {
      const {status} = response;
      if (status >= 200 && status < 300) {
        return response.data;
      }
      if (status === 400) {
        throw response;
      }
      throw response;
    });
}
