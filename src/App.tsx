import React, { useState } from 'react';
import { Box, Button, Container, FormControl, TextField, Typography } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';
import { Todo } from './types/types';
import { mockTodoList } from './mocks/mocks';
import TodoList from './components/TodoList';
import { Formik, Form, useField } from 'formik';
import * as Yup from 'yup';
import './App.css';

function App() {
  const [todoList, setTodoList] = useState<Todo[]>(mockTodoList);

  // Función para agregar los todo a la lista
  const addTodo = (todoDescription: string) => {
    const newTodo: Todo = {
      id: uuidv4(),
      description: todoDescription,
      isCompleted: false,
    };

    setTodoList([...todoList, newTodo]);
  };

  // Buscar y eliminar un Todo
  const deleteTodo = (id: string) => {
    const newTodoList = todoList.filter((todo) => todo.id !== id);
    setTodoList(newTodoList);
  };

  const CustomTodoInput = (props: any) => {
    const [field, helpers] = useField(props.name);

    return (
      <TextField
        {...field}
        {...props}
        error={!!helpers.error}
        helperText={helpers.error}
        id='todo-input'
      />
    );
  };

  const validationSchema = Yup.object({
    todoInput: Yup.string()
      .required('Description must not be empty')
      .min(3, 'Description must be at least 3 characters')
      .max(50, 'Description must be less than 50 characters')
      .trim(),
  });

  return (
    <Container maxWidth='sm'>
      <Typography variant='h3' mt={3} fontWeight='light' textAlign='center'>
        Todo list
      </Typography>
      <Formik
        initialValues={{ todoInput: '' }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          addTodo(values.todoInput);
          resetForm();
        }}
      >
        {() => (
          <Form>
            <FormControl fullWidth sx={{ display: 'flex', height: '80px', m: 2 }}>
              <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                <CustomTodoInput name='todoInput' />
                <Button type='submit' variant='outlined' sx={{ ml: 1, height: '54px' }}>
                  Add
                </Button>
              </Box>
            </FormControl>
          </Form>
        )}
      </Formik>
      <TodoList todoList={todoList} deleteTodo={deleteTodo} />
    </Container>
  );
}

export default App;
