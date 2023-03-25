// store.ts
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Filter, PersistedTodoState, TodoState } from './types';
import {
  getTodos,
  getCompletionResume,
  addTodo,
  removeTodo,
  clearTodos,
  editTodo,
  toggleTodo,
  setAllowRepeatedDescriptions,
} from './todoFunctions';

// Importa los mocks
import { mockTodoList } from '../mocks/mocks';

// Lee la variable de entorno
const useMocks = import.meta.env.VITE_USE_MOCKS === 'true';

const useStore = create(
  persist<PersistedTodoState & TodoState>(
    (set, get) => ({
      todos: useMocks ? mockTodoList : [],
      allowRepeatedDescriptions: false,
      setAllowRepeatedDescriptions: (value: boolean) => setAllowRepeatedDescriptions(set, value),
      getTodos: (filter: Filter) => getTodos(get, filter),
      getCompletionResume: () => getCompletionResume(get),
      addTodo: (todo) => addTodo(set, get, todo),
      removeTodo: (id) => removeTodo(set, get, id),
      clearTodos: () => clearTodos(set, get),
      editTodo: (id, description) => editTodo(set, get, id, description),
      toggleTodo: (id) => toggleTodo(set, get, id),
    }),
    {
      name: 'todo-list',
    }
  )
);

export default useStore;
