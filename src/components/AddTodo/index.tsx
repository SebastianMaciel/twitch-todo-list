import { Box, Button, FormControl } from '@mui/material';
import { Form, Formik } from 'formik';
import { v4 as uuidv4 } from 'uuid';
import { toast } from 'react-hot-toast';
import { validationSchema } from './validation';
import { Todo } from '../../types/types';
import useStore from '../../store/store';
import CustomTodoInput from './components/CustomTodoInput';

const AddTodo = () => {
  const { addTodo } = useStore();

  // Función para agregar los todo a la lista
  const addTodoHandler = (todoDescription: string, resetForm: () => void) => {
    const newTodo: Todo = {
      id: uuidv4(),
      description: todoDescription,
      isCompleted: false,
      createdAt: new Date().toISOString(),
    };

    const err = addTodo(newTodo);
    if (err) {
      toast.error(err.err, {
        style: { borderRadius: '5px', background: '#333', color: '#fff' },
        id: 'duplicate',
      });
      return;
    }
    resetForm();
  };

  return (
    <Formik
      initialValues={{ todoInput: '' }}
      validationSchema={validationSchema}
      validateOnBlur={false}
      validateOnChange={false}
      onSubmit={(values, { resetForm }) => {
        addTodoHandler(values.todoInput, resetForm);
      }}
    >
      {() => (
        <Form>
          <FormControl fullWidth sx={{ display: 'flex', height: '80px' }}>
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
  );
};

export default AddTodo;
