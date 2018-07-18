//@flow
import type {Todo} from './types/State';

let state = {
  newTask: '',
  todoItems: [],
};
type State = {
  newTask: string,
  todoItems: Array<Todo>,
};
function changeStatus(item: Todo): Todo {
  return {...item, isDone: !item.isDone};
}
export function todoEvent(eventName: string, param: mixed): Object {
  let oldState = state; //global
  switch (eventName) {
    case 'todos':
      return {...oldState};
    case 'updateStatus': {
      let todoItems = oldState.todoItems.map(
        (data) => (data.id === param ? changeStatus(data) : data),
      );
      return {...oldState, todoItems};
    }
    case 'addNewItems': {
      let todo = {
        id: oldState.todoItems.length ? 1 : oldState.todoItems.length,
        isDone: false,
        content: param,
      };
      let todoItems = oldState.todoItems ? oldState.todoItems.concat(todo) : [];
      return {...oldState, todoItems};
    }
    case 'onInputText':
      return {...oldState, newTask: param};
    default:
      return oldState;
  }
}
function getTodo(item: Todo): string {
  let content = item.isDone ? `<s>${item.content}</s>` : `${item.content}`;
  return content;
}
function getListTodos(listTodos: State): string {
  let result = listTodos.todoItems
    .map(
      (data) =>
        ` <li onClick="emitEvent('updateStatus',${data.id})" style="">${getTodo(
          data,
        )}</li>`,
    )
    .join('');
  if (result) {
    return result;
  }
  return '';
}

global.emitEvent = (eventName: string, eventParam: mixed): void => {
  if (eventName) {
    state = todoEvent(eventName, eventParam);
    render();
  }
};
function render() {
  if (document.body) {
    document.body.innerHTML = state.todoItems
      ? adapter(getListTodos(state))
      : '';
  }
}
function adapter(content: string): string {
  if (content == null) {
    return '';
  }
  return `
  <h1>Todo List</h1>
  ${content}
  <form action="/my-handling-form-page" method="post">
  <div>
    <label for="task">Task</label>
    <input type="text" value  ="${
      state.newTask
    }" id="task" task="user_task" onChange="emitEvent('onInputText',
  this.value)" />
  </div>
  </form><div class="button">
    <button type="submit" onClick="emitEvent('addNewItems','${
      state.newTask
    }')">Create Task</button>
  </div>`;
}
render();
