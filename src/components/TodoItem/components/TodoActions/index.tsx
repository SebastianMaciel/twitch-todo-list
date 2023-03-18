import { Button } from '@mui/material';
import EditOutlined from '@mui/icons-material/EditOutlined';
import DeleteOutlined from '@mui/icons-material/DeleteOutlined';

import useStore from '../../../../store/store';
import { Todo } from '../../../../types/types';
import { Box } from '@mui/system';
import Tooltip from '@mui/material/Tooltip';

interface TodoActionsProps {
  todo: Todo;
  toggleIsEditing: () => void;
}

const TodoActions = ({ todo, toggleIsEditing }: TodoActionsProps) => {
  const { removeTodo } = useStore();

  return (
    <Box display='flex' alignItems='center' justifyContent='space-between'>
      <Tooltip title='Edit task' placement='top'>
        <Button onClick={toggleIsEditing}>
          <EditOutlined />
        </Button>
      </Tooltip>

      <Tooltip title='Delete task' placement='top'>
        <Button onClick={() => removeTodo(todo.id)} color='error'>
          <DeleteOutlined />
        </Button>
      </Tooltip>
    </Box>
  );
};

export default TodoActions;
