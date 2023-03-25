import {
  AddTodo,
  ClearTodos,
  EditTodo,
  GetCompletionResume,
  GetTodos,
  RemoveTodo,
  SetAllowRepeatedDescriptions,
  ToggleTodo,
} from './types';

export const setAllowRepeatedDescriptions: SetAllowRepeatedDescriptions = (set, value) => {
  set({ allowRepeatedDescriptions: value });
};

export const getTodos: GetTodos = (get, filter) => {
  const state = get();
  if (filter === 'all') return state.todos;
  if (filter === 'complete') return state.todos.filter((todo) => todo.isCompleted);
  if (filter === 'incomplete') return state.todos.filter((todo) => !todo.isCompleted);
  return state.todos;
};

export const getCompletionResume: GetCompletionResume = (get) => {
  const state = get();
  const totalTodos = state.todos.length;
  const completedTodos = state.todos.filter((todo) => todo.isCompleted).length;
  return `${completedTodos}/${totalTodos}`;
};

export const addTodo: AddTodo = (set, get, todo) => {
  const state = get();
  const todoExists = state.todos.find(
    (t) => t.description.toLocaleLowerCase().trim() === todo.description.toLocaleLowerCase().trim()
  );
  if (todoExists && !state.allowRepeatedDescriptions)
    return {
      err: "Can't repeat descriptions! \n You can allow this in the settings.",
    };
  set({ todos: [...state.todos, todo] });
};

export const removeTodo: RemoveTodo = (set, get, id) => {
  const state = get();
  set({ todos: state.todos.filter((todo) => todo.id !== id) });
};

export const clearTodos: ClearTodos = (set) => set({ todos: [] });

export const editTodo: EditTodo = (set, get, id, description) => {
  const state = get();
  const todoExists = state.todos.find(
    (t) => t.description.toLocaleLowerCase().trim() === description.toLocaleLowerCase().trim()
  );
  if (todoExists && !state.allowRepeatedDescriptions)
    return { err: "Can't repeat descriptions! \n You can allow this in configuration." };

  set({ todos: state.todos.map((todo) => (todo.id === id ? { ...todo, description } : todo)) });
};

export const toggleTodo: ToggleTodo = (set, get, id) => {
  const state = get();
  set({
    todos: state.todos.map((todo) =>
      todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
    ),
  });
};
