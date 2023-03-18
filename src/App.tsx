import { Box, Button, Container, FormControl, TextField, Typography } from '@mui/material';
import { Formik, Form, useField } from 'formik';
import * as Yup from 'yup';
import { v4 as uuidv4 } from 'uuid';
import useStore from './store/store';
import { Todo } from './types/types';
import TodoList from './components/TodoList';
import './App.css';

function App() {
  const addTodo = useStore((state) => state.addTodo);

  // Función para agregar los todo a la lista
  const addTodoHandler = (todoDescription: string) => {
    const newTodo: Todo = {
      id: uuidv4(),
      description: todoDescription,
      isCompleted: false,
      createdAt: new Date().toISOString(),
    };

    addTodo(newTodo);
  };

  const CustomTodoInput = (props: any) => {
    const [field, helpers] = useField(props.name);

    return (
      <TextField
        {...field}
        {...props}
        autoComplete='off'
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
          addTodoHandler(values.todoInput);
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
      <TodoList />
    </Container>
  );
}

export default App;
