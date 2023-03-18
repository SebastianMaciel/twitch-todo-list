import { Box, Button, TextField } from '@mui/material';
import DoneOutlined from '@mui/icons-material/DoneOutlined';
import EditOffOutlined from '@mui/icons-material/EditOffOutlined';
import { Form, Formik, useField } from 'formik';
import useStore from '../../../../store/store';
import { validationSchema } from '../../utils/validations';
import { EditTodoProps } from './types';
import Tooltip from '@mui/material/Tooltip';

const EditTodo = ({ todo, toggleIsEditing }: EditTodoProps) => {
  const { editTodo } = useStore();

  const CustomTodoInput = (props: any) => {
    const [field, helpers] = useField(props.name);

    return <TextField {...field} {...props} sx={{ width: '70%' }} size='small' />;
  };

  return (
    <Formik
      initialValues={{ todoInput: todo.description }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        editTodo(todo.id, values.todoInput);
        toggleIsEditing();
      }}
    >
      {() => (
        <Form style={{ width: '100%' }}>
          <Box display='flex' width='100%' alignItems='center' justifyContent='space-between'>
            <CustomTodoInput name='todoInput' />

            <Box display='flex' alignItems='center' justifyContent='space-between'>
              <Tooltip title='Discard edition' placement='top'>
                <Button onClick={toggleIsEditing}>
                  <EditOffOutlined />
                </Button>
              </Tooltip>

              <Tooltip title='Update task' placement='top'>
                <Button type='submit' color='success'>
                  <DoneOutlined />
                </Button>
              </Tooltip>
            </Box>
          </Box>
        </Form>
      )}
    </Formik>
  );
};

export default EditTodo;