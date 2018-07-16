//@flow
import React, {createElement} from 'react';
import eventHandler from './eventHandler';
import reRender from './main';
import type {InitialState, Todo} from './types/State';

let defaultState = {
  newTask: '',
  todoItems: [],
};

let event = eventHandler();
export default function App(props: InitialState = defaultState) {
  let {todoItems} = props;
  console.log('propss', props.newTask, 'euy');
  return todoItems ? (
    <div>
      <ul>{todoItems.map((todo) => getTodo(todo))}</ul>
      <input type="text" onChange={event.onTypingtodo} />
      <button
        onClick={() => {
          let result = event.addnewItem();
          reRender(result);
        }}
      >
        save
      </button>
    </div>
  ) : (
    <div>Please create your Todo list</div>
  );
}
function getTodo(props: Todo) {
  let {content, isDone, id} = props;
  return (
    <li
      onClick={() => {
        let result = event.toogleDone(id);
        reRender(result);
      }}
    >
      {isDone ? content : <s>{content}</s>}
    </li>
  );
}
function onSubmitTodo() {
  return <button>Activate Lasers</button>;
}
