import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { TodoState } from './types';

// Importa los mocks
import { mockTodoList } from '../mocks/mocks';

// Lee la variable de entorno
const useMocks = import.meta.env.VITE_USE_MOCKS === 'true';

const initialState: TodoState = {
  todos: useMocks ? mockTodoList : [],
  addTodo: () => {},
  removeTodo: () => {},
  editTodo: () => {},
  toggleTodo: () => {},
};

const useStore = create<TodoState>(
  persist(
    (set) => ({
      ...initialState,
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
