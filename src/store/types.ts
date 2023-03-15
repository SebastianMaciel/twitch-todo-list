import { Todo } from '../types/types';

export type TodoState = {
  todos: Todo[];
  addTodo: (todo: Todo) => void;
  removeTodo: (id: string) => void;
  toggleTodo: (id: string) => void;
  $$storeMutators?: any[]; // Agrega esta línea para incluir los mutadores del estado
};
