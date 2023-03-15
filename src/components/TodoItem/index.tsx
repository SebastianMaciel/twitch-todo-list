import { useReducer, useState } from 'react';
import { Box, Button, ButtonGroup, Paper, TextField, Typography } from '@mui/material';
import { Todo } from '../../types/types';
import styles from './todoItem.module.css';

interface TodoItemProps {
  todo: Todo;
  deleteTodo: (id: string) => void;
}

const TodoItem = ({ todo, deleteTodo }: TodoItemProps) => {
  const [isHover, setIsHover] = useState(false);
  const [isEditing, toggleIsEditing] = useReducer((isEditing) => !isEditing, false);

  console.log('isEditing', isEditing);

  return (
    <Paper key={todo.id} sx={{ marginY: 1 }} elevation={1}>
      <Box
        className={styles.todoItem}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        {!isEditing && (
          <>
            <Typography variant='body1' noWrap>
              {todo.description}
            </Typography>
            {isHover && (
              <ButtonGroup variant='text' aria-label='Todo actions'>
                <Button size='small' onClick={toggleIsEditing}>
                  Edit
                </Button>
                <Button size='small' onClick={() => deleteTodo(todo.id)} color='error'>
                  Delete
                </Button>
              </ButtonGroup>
            )}
          </>
        )}
        {isEditing && (
          <>
            <TextField sx={{ width: '70%' }} size='small' defaultValue={todo.description} />
            {isHover && (
              <ButtonGroup variant='text' aria-label='Todo actions'>
                <Button size='small' onClick={toggleIsEditing}>
                  Cancel
                </Button>
                <Button size='small' onClick={() => deleteTodo(todo.id)} color='error'>
                  Update
                </Button>
              </ButtonGroup>
            )}
          </>
        )}
      </Box>
    </Paper>
  );
};

export default TodoItem;
