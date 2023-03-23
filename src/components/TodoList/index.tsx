import { useState, useMemo } from 'react';
import { Box, Stack, ToggleButton, ToggleButtonGroup } from '@mui/material';
import FormatListBulleted from '@mui/icons-material/FormatListBulleted';
import AccessTime from '@mui/icons-material/AccessTime';
import DoneAll from '@mui/icons-material/DoneAll';
import useStore from '../../store/store';
import { Todo } from '../../types/types';
import TodoItem from '../TodoItem';
import EmptyList from './components/EmptyList';
import { Filter } from '../../store/types';

const TodoList = () => {
  const { todos, getTodos } = useStore();

  const [selectedFilter, setSelectedFilter] = useState<Filter>('all');

  const handleFilters = (event: React.MouseEvent<HTMLElement>, newFilter: Filter | null) => {
    if (newFilter !== null) {
      setSelectedFilter(newFilter);
    }
  };

  // Obtener todos filtrados según el filtro seleccionado
  const filteredTodos = useMemo(() => getTodos(selectedFilter), [getTodos, selectedFilter]);

  // Early return si no hay todos
  if (todos.length === 0) return <EmptyList />;

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <ToggleButtonGroup
        sx={{ alignSelf: 'flex-end' }}
        value={selectedFilter}
        onChange={handleFilters}
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
        {filteredTodos.map((todo: Todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </Box>
    </Box>
  );
};

export default TodoList;
