import { useState, useMemo, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Box, ToggleButton, ToggleButtonGroup } from '@mui/material';
import FormatListBulleted from '@mui/icons-material/FormatListBulleted';
import AccessTime from '@mui/icons-material/AccessTime';
import DoneAll from '@mui/icons-material/DoneAll';
import useStore from '../../store/store';
import { Todo } from '../../types/types';
import TodoItem from '../TodoItem';
import EmptyList from './components/EmptyList';
import { Filter } from '../../store/types';

const TodoList = () => {
  const [selectedFilter, setSelectedFilter] = useState<Filter>('all');
  const { todos, getTodos, getCompletionResume } = useStore();
  const total = getCompletionResume();

  // Obtener todos filtrados según el filtro seleccionado
  const filteredTodos = useMemo(() => getTodos(selectedFilter), [getTodos, selectedFilter, todos]);
  const hasTodos = filteredTodos.length > 0;

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Helmet>
        <title>{total} - Todo list</title>
      </Helmet>
      <ToggleButtonGroup
        sx={{ alignSelf: 'flex-end', marginBottom: '1rem' }}
        value={selectedFilter}
        onChange={(_e, newFilter) => setSelectedFilter(newFilter)}
        exclusive
      >
        <ToggleButton value='all'>
          <FormatListBulleted />
        </ToggleButton>
        <ToggleButton value='complete'>
          <DoneAll />
        </ToggleButton>
        <ToggleButton value='incomplete'>
          <AccessTime />
        </ToggleButton>
      </ToggleButtonGroup>
      <Box>
        {!hasTodos && <EmptyList />}
        {hasTodos && filteredTodos.map((todo: Todo) => <TodoItem key={todo.id} todo={todo} />)}
      </Box>
    </Box>
  );
};

export default TodoList;
