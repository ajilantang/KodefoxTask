// @flow
import React, {createElement} from 'react';
import {render} from 'react-dom';
import type {InitialState} from './types/State';
import App from './App';
let state = {
  newTask: '',
  todoItems: [
    {id: 1, content: 'issue no 65', isDone: false},
    {id: 2, content: 'issue no 65', isDone: false},
  ],
};
let body = document.body;
export default function reRender(props: InitialState) {
  console.log(props.todoItems);
  if (props.todoItems) {
    console.log('kesini');
    render(<App {...props} />, document.body);
  }
}
reRender(state);
