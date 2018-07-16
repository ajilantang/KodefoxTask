//@flow
export type Todo = {
  id: number,
  isDone: boolean,
  content: string,
};
export type InitialState = {
  todoItems: Array<Todo>,
  newTask: string,
};
export type Event = {
  target: {
    value: string,
  },
};

export type UpdateFunction = (InitialState) => InitialState;
export type EventHandler = {[evenName: string]: UpdateFunction};

export type CreateTodo = (name: string, task: string) => Todo;
