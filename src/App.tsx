import { useState } from 'react';
import { Box, Container, Typography } from '@mui/material';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import SettingsModal from './components/SettingsModal';
import SettingsIcon from '@mui/icons-material/Settings';
import IconButton from '@mui/material/IconButton';
import './App.css';

function App() {
  const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false);

  const handleOpenSettingsModal = () => setIsSettingsModalOpen(true);
  const handleCloseSettingsModal = () => setIsSettingsModalOpen(false);

  return (
    <Container maxWidth='sm'>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant='h3' my={3} fontWeight='light' textAlign='center'>
          Todo list
        </Typography>
        <IconButton onClick={handleOpenSettingsModal}>
          <SettingsIcon />
        </IconButton>
      </Box>
      <AddTodo />
      <TodoList />
      <SettingsModal open={isSettingsModalOpen} onClose={handleCloseSettingsModal} />
    </Container>
  );
}

export default App;
