import { Box } from '@mui/material';
import { Todo } from '../../types/types';
import TodoItem from '../TodoItem';
import EmptyList from './components/EmptyList';

interface TodoListProps {
  todoList: Todo[];
  deleteTodo: (id: string) => void;
}

const TodoList = ({ todoList, deleteTodo }: TodoListProps) => {
  // Early return si no hay todos
  if (todoList.length === 0) return <EmptyList />;

  return (
    <Box sx={{ marginTop: 5 }}>
      {todoList.map((todo: Todo) => (
        <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} />
      ))}
    </Box>
  );
};

export default TodoList;
