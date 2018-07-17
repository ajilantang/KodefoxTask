// @flow
import React, {createElement} from 'react';
import {render} from 'react-dom';
import type {InitialState} from './types/State';
import App from './App';

let state = {
  newTask: '',
  todoItems: [],
};

export default function reRender(props: InitialState) {
  if (props.todoItems && document.body) {
    render(<App {...props} />, document.body);
  }
}
reRender(state);
