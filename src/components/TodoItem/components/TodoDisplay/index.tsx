import { useReducer } from 'react';
import { Box, Typography, Checkbox } from '@mui/material';
import Done from '@mui/icons-material/Done';
import DoneAll from '@mui/icons-material/DoneAll';
import { formatDate, formatRelativeTime } from '../../utils/utils';
import { TodoDisplayProps } from './types';
import useStore from '../../../../store/store';
import styles from './todoDisplay.module.css';

const TodoDisplay = ({ todo }: TodoDisplayProps) => {
  const [showRelativeTime, toggleRelativeTime] = useReducer((prev) => !prev, false);
  const { toggleTodo } = useStore();

  return (
    <Box display='flex' alignItems='center'>
      <Checkbox
        checked={todo.isCompleted}
        onChange={() => toggleTodo(todo.id)}
        icon={<Done />}
        checkedIcon={<DoneAll color='success' />}
      />
      <Box ml={1}>
        <Typography variant='body1' noWrap>
          {todo.description}
        </Typography>
        <Typography
          variant='caption'
          display='block'
          className={styles.createdAt}
          onClick={toggleRelativeTime}
        >
          {showRelativeTime ? formatRelativeTime(todo.createdAt) : formatDate(todo.createdAt)}
        </Typography>
      </Box>
    </Box>
  );
};

export default TodoDisplay;
