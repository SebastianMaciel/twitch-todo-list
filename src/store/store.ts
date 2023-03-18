import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { PersistedTodoState, TodoState } from './types';

// Importa los mocks
import { mockTodoList } from '../mocks/mocks';

// Lee la variable de entorno
const useMocks = import.meta.env.VITE_USE_MOCKS === 'true';

const useStore = create(
  persist<PersistedTodoState & TodoState>(
    (set) => ({
      todos: useMocks ? mockTodoList : [],
      addTodo: (todo) => set((state) => ({ todos: [...state.todos, todo] })),
      removeTodo: (id) => set((state) => ({ todos: state.todos.filter((todo) => todo.id !== id) })),
      editTodo: (id, description) => {
        set((state) => ({
          todos: state.todos.map((todo) => (todo.id === id ? { ...todo, description } : todo)),
        }));
      },
      toggleTodo: (id) =>
        set((state) => ({
          todos: state.todos.map((todo) =>
            todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
          ),
        })),
    }),
    {
      name: 'todo-list',
    }
  )
);

export default useStore;
