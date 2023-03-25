import { Todo } from '../types/types';

export type PersistedTodoState = {
  $$storeMutators?: any[];
};

export type TodoState = {
  todos: Todo[];
  addTodo: (todo: Todo) => void | { err: string };
  allowRepeatedDescriptions: boolean;
  setAllowRepeatedDescriptions: (value: boolean) => void;
  getTodos: (filter: Filter) => Todo[];
  getCompletionResume: () => string;
  removeTodo: (id: string) => void;
  clearTodos: () => void;
  editTodo: (id: string, description: string) => void | { err: string };
  toggleTodo: (id: string) => void;
};

export type Filter = 'all' | 'complete' | 'incomplete';

// Store functions

type SetTodoState = (partial: Partial<TodoState>) => void;
type GetTodoState = () => TodoState;

export type SetAllowRepeatedDescriptions = (set: SetTodoState, value: boolean) => void;
export type GetTodos = (get: GetTodoState, filter: Filter) => Todo[];
export type GetCompletionResume = (get: GetTodoState) => string;
export type AddTodo = (set: SetTodoState, get: GetTodoState, todo: Todo) => void | { err: string };
export type RemoveTodo = (set: SetTodoState, get: GetTodoState, id: string) => void;
export type ClearTodos = (set: SetTodoState, get: GetTodoState) => void;
export type EditTodo = (
  set: SetTodoState,
  get: GetTodoState,
  id: string,
  description: string
) => void | { err: string };
export type ToggleTodo = (set: SetTodoState, get: GetTodoState, id: string) => void;
