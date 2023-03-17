import { Todo } from '../types/types';

export type TodoState = {
  todos: Todo[];
  addTodo: (todo: Todo) => void;
  removeTodo: (id: string) => void;
  editTodo: (id: string, description: string) => void;
  toggleTodo: (id: string) => void;
  $$storeMutators?: any[]; // Agrega esta línea para incluir los mutadores del estado
};
