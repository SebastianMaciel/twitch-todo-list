import { Todo } from '../types/types';

export type PersistedTodoState = {
  $$storeMutators?: any[];
};

export type TodoState = {
  todos: Todo[];
  addTodo: (todo: Todo) => void;
  removeTodo: (id: string) => void;
  editTodo: (id: string, description: string) => void;
  toggleTodo: (id: string) => void;
};
