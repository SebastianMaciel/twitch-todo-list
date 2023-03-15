import { Box } from '@mui/material';
import useStore from '../../store/store';
import { Todo } from '../../types/types';
import TodoItem from '../TodoItem';
import EmptyList from './components/EmptyList';

const TodoList = () => {
  const todos = useStore((state) => state.todos);

  // Early return si no hay todos
  if (todos.length === 0) return <EmptyList />;

  return (
    <Box sx={{ marginTop: 5 }}>
      {todos.map((todo: Todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </Box>
  );
};

export default TodoList;
