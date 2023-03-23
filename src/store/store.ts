import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Filter, PersistedTodoState, TodoState } from './types';

// Importa los mocks
import { mockTodoList } from '../mocks/mocks';

// Lee la variable de entorno
const useMocks = import.meta.env.VITE_USE_MOCKS === 'true';

const useStore = create(
  persist<PersistedTodoState & TodoState>(
    (set, get) => ({
      todos: useMocks ? mockTodoList : [],
      // Función para traer la lista todos según el estado de isCompleted
      // Le pasamos por argumentos un string que puede ser 'all', 'completed' o 'incomplete'
      getTodos: (filter: Filter) => {
        // Si el filtro es 'all' devolvemos todos los todos
        if (filter === 'all') return get().todos;

        // Si el filtro es 'completed' devolvemos todos los todos que estén completados
        if (filter === 'complete') return get().todos.filter((todo) => todo.isCompleted);

        // Si el filtro es 'incomplete' devolvemos todos los todos que no estén completados
        if (filter === 'incomplete') return get().todos.filter((todo) => !todo.isCompleted);

        // Si no es ninguno de los anteriores, devolvemos todos los todos
        return get().todos;
      },
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
