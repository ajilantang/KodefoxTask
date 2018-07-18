//@flow
import type {State} from '../types/State';
export let initialState: State = {
  inputValue: '',
  todoItems: [
    {
      id: 1,
      isDone: false,
      content: 'test',
    },
  ],
  newTask: '',
};
