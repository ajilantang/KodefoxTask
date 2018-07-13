//@flow
export type Todos = {
  id: number;
  isDone: boolean;
  task: string;
};
export type InitialState = {
  todoItems: Array<Todos>;
  newTask: string;
};

export type CreateTodo = (name: string, task: string) => Todos;
