import { useReducer, useState } from 'react';
import { Box, Paper } from '@mui/material';
import styles from './todoItem.module.css';
import { TodoItemProps } from './types/types';
import TodoDisplay from './components/TodoDisplay';
import TodoActions from './components/TodoActions';
import EditTodo from './components/EditTodo';

const TodoItem = ({ todo }: TodoItemProps) => {
  const [isHover, setIsHover] = useState(false);
  const [isEditing, toggleIsEditing] = useReducer((isEditing) => !isEditing, false);

  const handleMouseEnter = () => !isEditing && setIsHover(true);
  const handleMouseLeave = () => !isEditing && setIsHover(false);

  return (
    <Paper key={todo.id} sx={{ marginY: 1 }} elevation={1}>
      <Box
        className={styles.todoItem}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {!isEditing ? (
          <>
            <TodoDisplay todo={todo} />
            {isHover && <TodoActions todo={todo} toggleIsEditing={toggleIsEditing} />}
          </>
        ) : (
          <EditTodo todo={todo} toggleIsEditing={toggleIsEditing} />
        )}
      </Box>
    </Paper>
  );
};

export default TodoItem;
