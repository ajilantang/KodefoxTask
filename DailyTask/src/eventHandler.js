//@flow
import type {State, UpdateFunction, EventHandler, Event} from './types/State';
import {initialState} from './InitialState/Todo';
export default function eventHandler() {
  let state = initialState;
  return {
    toogleDone: (taskId: number) => {
      let {todoItems} = state;
      let result = todoItems.map(
        (item) => (item.id === taskId ? {...item, isDone: !item.isDone} : item),
      );
      state = {...state, todoItems: result};
    },
    addnewItem: () => {
      let {newTask, todoItems} = state;
      let newTodoItems = {
        id: todoItems.length ? todoItems.length + 1 : 1,
        content: newTask,
        isDone: false,
      };
      state = {
        todoItems: [...todoItems, newTodoItems],
        newTask: '',
      };
    },
    onTypingtodo: (event: Event) => {
      state = {...state, newTask: event.target.value};
    },
    getTodosItem: () => {
      return state;
    },
  };
}
