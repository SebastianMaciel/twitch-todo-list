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

// Esta función es la que se encarga de cambiar el valor de la variable de estado
export const setAllowRepeatedDescriptions: SetAllowRepeatedDescriptions = (set, value) => {
  set({ allowRepeatedDescriptions: value });
};

// Esta función es la que se encarga de filtrar la lista de tareas
export const getTodos: GetTodos = (get, filter) => {
  const state = get();
  if (filter === 'all') return state.todos;
  if (filter === 'complete') return state.todos.filter((todo) => todo.isCompleted);
  if (filter === 'incomplete') return state.todos.filter((todo) => !todo.isCompleted);
  return state.todos;
};

// Esta función es la que se encarga de calcular el total de tareas completadas
export const getCompletionResume: GetCompletionResume = (get) => {
  const state = get();
  const totalTodos = state.todos.length;
  const completedTodos = state.todos.filter((todo) => todo.isCompleted).length;
  return `${completedTodos}/${totalTodos}`;
};

// Esta función es la que se encarga de agregar una tarea a la lista
// Si la tarea ya existe y no se permite repetir descripciones, se devuelve un error
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

// Esta función es la que se encarga de eliminar una tarea de la lista
export const removeTodo: RemoveTodo = (set, get, id) => {
  const state = get();
  set({ todos: state.todos.filter((todo) => todo.id !== id) });
};

// Esta función es la que se encarga de eliminar todas las tareas de la lista
export const clearTodos: ClearTodos = (set) => set({ todos: [] });

// Esta función es la que se encarga de editar una tarea de la lista
// Si la tarea ya existe y no se permite repetir descripciones, se devuelve un error
export const editTodo: EditTodo = (set, get, id, description) => {
  const state = get();
  const todoExists = state.todos.find(
    (t) => t.description.toLocaleLowerCase().trim() === description.toLocaleLowerCase().trim()
  );
  if (todoExists && !state.allowRepeatedDescriptions)
    return { err: "Can't repeat descriptions! \n You can allow this in the settings." };

  set({ todos: state.todos.map((todo) => (todo.id === id ? { ...todo, description } : todo)) });
};

// Esta función es la que se encarga de cambiar el estado de una tarea de la lista
export const toggleTodo: ToggleTodo = (set, get, id) => {
  const state = get();
  set({
    todos: state.todos.map((todo) =>
      todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
    ),
  });
};
