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
    todoItems: [],
    isTyping: false,
  };
  return {
    toogleDone: (taskId: number) => {
      let {todoItems} = state;
      let result = todoItems.map(
        (item) => (item.id === taskId ? {...item, isDone: !item.isDone} : item),
      );
      state = {...state, todoItems: result};
      return state;
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
        isTyping: false,
        newTask: '',
      };
      return state;
    },
    onTypingtodo: (event: Event) => {
      state = {...state, newTask: event.target.value, isTyping: true};
      return state;
    },
    getTodosItem: () => {
      return state;
    },
  };
}
