import { Todo } from '../types/types';

export type PersistedTodoState = {
  $$storeMutators?: any[];
};

export type TodoState = {
  todos: Todo[];
  addTodo: (todo: Todo) => void;
  getTodos: (filter: Filter) => Todo[];
  removeTodo: (id: string) => void;
  editTodo: (id: string, description: string) => void;
  toggleTodo: (id: string) => void;
};

export type Filter = 'all' | 'complete' | 'incomplete';
