import { Box, Button, ButtonGroup, Paper, Typography } from '@mui/material';
import { useState } from 'react';
import { Todo } from '../../types/types';

interface TodoItemProps {
  todo: Todo;
  deleteTodo: (id: string) => void;
}

const TodoItem = ({ todo, deleteTodo }: TodoItemProps) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <Paper key={todo.id} sx={{ marginY: 1 }} elevation={1}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '10px',
          width: '100%',
          userSelect: 'none',
          height: '50px',
        }}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <Typography variant='body1' noWrap>
          {todo.description}
        </Typography>
        {isHover && (
          <ButtonGroup variant='text' aria-label='text button group'>
            <Button size='small'>Edit</Button>
            <Button size='small' onClick={() => deleteTodo(todo.id)} color='error'>
              Delete
            </Button>
          </ButtonGroup>
        )}
      </Box>
    </Paper>
  );
};

export default TodoItem;
