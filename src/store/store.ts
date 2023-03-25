import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import * as utils from './todoFunctions';
import { Filter, PersistedTodoState, TodoState } from './types';
import { mockTodoList } from '../mocks/mocks';

// Lee la variable de entorno
const useMocks = import.meta.env.VITE_USE_MOCKS === 'true';

const useStore = create(
  persist<PersistedTodoState & TodoState>(
    (set, get) => ({
      // Lista principal
      todos: useMocks ? mockTodoList : [],
      // Configuraciones
      allowRepeatedDescriptions: false,
      setAllowRepeatedDescriptions: (value: boolean) =>
        utils.setAllowRepeatedDescriptions(set, value),
      // Funciones de utilidad
      getTodos: (filter: Filter) => utils.getTodos(get, filter),
      getCompletionResume: () => utils.getCompletionResume(get),
      addTodo: (todo) => utils.addTodo(set, get, todo),
      removeTodo: (id) => utils.removeTodo(set, get, id),
      clearTodos: () => utils.clearTodos(set, get),
      editTodo: (id, description) => utils.editTodo(set, get, id, description),
      toggleTodo: (id) => utils.toggleTodo(set, get, id),
    }),
    {
      name: 'todo-list',
    }
  )
);

export default useStore;
