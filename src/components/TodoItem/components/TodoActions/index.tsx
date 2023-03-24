import { useState } from 'react';
import { Box, Button, Tooltip } from '@mui/material';
import EditOutlined from '@mui/icons-material/EditOutlined';
import DeleteOutlined from '@mui/icons-material/DeleteOutlined';
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';
import ReplyIcon from '@mui/icons-material/Reply';
import useStore from '../../../../store/store';
import { Todo } from '../../../../types/types';

interface TodoActionsProps {
  todo: Todo;
  toggleIsEditing: () => void;
}

const TodoActions = ({ todo, toggleIsEditing }: TodoActionsProps) => {
  const [deleteConfirmation, setDeleteConfirmation] = useState(false);
  const { removeTodo } = useStore();

  return (
    <Box display='flex' alignItems='center' justifyContent='space-between'>
      {!deleteConfirmation ? (
        <Tooltip title='Edit task' placement='top'>
          <Button onClick={toggleIsEditing}>
            <EditOutlined />
          </Button>
        </Tooltip>
      ) : (
        <Tooltip title='Cancel delete' placement='top'>
          <Button onClick={() => setDeleteConfirmation(false)}>
            <ReplyIcon />
          </Button>
        </Tooltip>
      )}

      {!deleteConfirmation ? (
        <Tooltip title='Delete task' placement='top'>
          <Button onClick={() => setDeleteConfirmation(true)} color='error'>
            <DeleteOutlined />
          </Button>
        </Tooltip>
      ) : (
        <Tooltip title='Remove task' placement='top'>
          <Button onClick={() => removeTodo(todo.id)} color='error'>
            <DeleteSweepIcon />
          </Button>
        </Tooltip>
      )}
    </Box>
  );
};

export default TodoActions;
