//@flow
import React, {createElement} from 'react';
import eventHandler from './eventHandler';
import reRender from './main';
import type {InitialState, Todo} from './types/State';

let store = eventHandler();

export default function App(props: InitialState) {
  let {todoItems} = props;
  let todoDone = todoItems.filter((item) => item.isDone);
  let todoNotDone = todoItems.filter((item) => !item.isDone);
  let groupingTodo = [...todoNotDone, ...todoDone];
  let localTyping = false;
  let {newTask} = store.getTodosItem();
  return todoItems ? (
    <div>
      <ul>{groupingTodo.map((todo) => getTodo(todo))}</ul>
      <input
        type="text"
        value={newTask}
        onChange={(event) => {
          let state = store.onTypingtodo(event);
          reRender(state);
        }}
      />
      <button
        onClick={() => {
          let result = store.addnewItem();
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
        let result = store.toogleDone(id);
        reRender(result);
      }}
    >
      {isDone ? content : <s key={id}>{content}</s>}
    </li>
  );
}
function onSubmitTodo() {
  return <button>Activate Lasers</button>;
}
