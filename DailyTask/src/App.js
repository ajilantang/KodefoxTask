//@flow
import React, {createElement} from 'react';
import eventHandler from './eventHandler';
import reRender from './main';
import type {State, Todo, Event} from './types/State';

let store = eventHandler();
export default function App(props: State) {
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
        onChange={(event: Event) => {
          store.onTypingtodo(event);
          let state = store.getTodosItem();
          reRender(state);
        }}
      />
      <button
        onClick={() => {
          store.addnewItem();
          let result = store.getTodosItem();
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
        store.toogleDone(id);
        let result = store.getTodosItem();
        reRender(result);
      }}
    >
      {isDone ? content : <s key={id}>{content}</s>}
    </li>
  );
}
