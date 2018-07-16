//@flow
import type {
  InitialState,
  UpdateFunction,
  EventHandler,
  Event,
} from './types/State';

export default function eventHandler() {
  let state = {
    newTask: '',
    todoItems: [
      {id: 1, content: 'issue no 64', isDone: false},
      {id: 2, content: 'issue no 65', isDone: false},
    ],
  };
  return {
    toogleDone: (taskId: number) => {
      let {todoItems} = state;
      let newState = () => {
        if (todoItems.length) {
          let result = todoItems.map((item) => {
            let {id, isDone} = item;
            if (id === taskId) {
              return {...item, isDone: !isDone};
            }
            return item;
          });
          return result;
        }
        return state;
      };
      state = {...state, todoItems: newState()};
      return state;
    },
    addnewItem: () => {
      let {newTask, todoItems} = state;
      let newTodoItems = {
        id: todoItems.length ? todoItems.length + 1 : 1,
        content: newTask,
        isDone: false,
      };
      state = {newTask: '', todoItems: [...todoItems, newTodoItems]};
      return state;
    },
    onTypingtodo: (event: Event) => {
      state = {...state, newTask: event.target.value};
      return state;
    },
    getTodosItem: () => {
      return state;
    },
  };
}
