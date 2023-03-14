import React, { useState } from 'react';
import { Box, Button, Container, FormControl, OutlinedInput, Typography } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';
import { Todo } from './types/types';
import { mockTodoList } from './mocks/mocks';
import TodoList from './components/TodoList';
import './App.css';

function App() {
  const [todoInput, setTodoInput] = useState('');
  const [todoList, setTodoList] = useState<Todo[]>(mockTodoList);

  const handleTodoInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTodoInput(event.target.value);
  };

  // Limpiamos el input
  const clearInput = () => {
    setTodoInput('');
  };

  // Función para agregar los todo a la lista
  const addTodo = () => {
    const newTodo: Todo = {
      id: uuidv4(),
      description: todoInput,
      isCompleted: false,
    };

    setTodoList([...todoList, newTodo]);

    clearInput();
  };

  // Buscar y eliminar un Todo
  const deleteTodo = (id: string) => {
    const newTodoList = todoList.filter((todo) => todo.id !== id);
    setTodoList(newTodoList);
  };

  return (
    <Container maxWidth='sm'>
      <Typography variant='h3' mt={3} fontWeight='light'>
        Todo list
      </Typography>
      <FormControl fullWidth sx={{ display: 'flex', m: 4 }}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
          }}
        >
          <OutlinedInput onChange={handleTodoInput} value={todoInput} id='add-task-input' />
          <Button variant='contained' sx={{ ml: 1, height: '54px' }} onClick={addTodo}>
            Add Task
          </Button>
        </Box>
      </FormControl>
      <TodoList todoList={todoList} deleteTodo={deleteTodo} />
    </Container>
  );
}

export default App;
