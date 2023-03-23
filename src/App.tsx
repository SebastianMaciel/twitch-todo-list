import { Container, Typography } from '@mui/material';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import './App.css';

function App() {
  return (
    <Container maxWidth='sm'>
      <Typography variant='h3' mt={3} fontWeight='light' textAlign='center'>
        Todo list
      </Typography>
      <AddTodo />
      <TodoList />
    </Container>
  );
}

export default App;
