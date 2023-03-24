import { Todo } from '../types/types';

export type PersistedTodoState = {
  $$storeMutators?: any[];
};

export type TodoState = {
  todos: Todo[];
  addTodo: (todo: Todo) => void;
  getTodos: (filter: Filter) => Todo[];
  getCompletionResume: () => string;
  removeTodo: (id: string) => void;
  clearTodos: () => void;
  editTodo: (id: string, description: string) => void;
  toggleTodo: (id: string) => void;
};

export type Filter = 'all' | 'complete' | 'incomplete';
