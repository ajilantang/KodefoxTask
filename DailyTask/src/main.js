// @flow
import React, {createElement} from 'react';
import {render} from 'react-dom';
import type {State} from './types/State';
import App from './App';
import {initialState} from './InitialState/Todo';
import Apps from './day10/App';
export default function reRender(props: State) {
  <Apps />;
  if (props.todoItems && document.body) {
    render(<Apps />, document.body);
    // render(<App {...props} />, document.body);
    return;
  }
}
reRender(initialState);
