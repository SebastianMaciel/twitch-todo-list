import { Box, Button } from '@mui/material';
import DoneOutlined from '@mui/icons-material/DoneOutlined';
import EditOffOutlined from '@mui/icons-material/EditOffOutlined';
import { toast } from 'react-hot-toast';
import { Form, Formik } from 'formik';
import useStore from '../../../../store/store';
import { validationSchema } from '../../utils/validations';
import { EditTodoProps } from './types';
import Tooltip from '@mui/material/Tooltip';
import CustomTodoInput from './components/CustomTodoInput';

const EditTodo = ({ todo, toggleIsEditing }: EditTodoProps) => {
  const { editTodo } = useStore();

  const handleEditTodo = (values: any) => {
    const err = editTodo(todo.id, values.todoInput);
    if (err) {
      toast.error(err.err, {
        style: { borderRadius: '5px', background: '#333', color: '#fff' },
        id: 'duplicate',
      });
      return;
    }
    toggleIsEditing();
  };

  return (
    <Formik
      initialValues={{ todoInput: todo.description }}
      validationSchema={validationSchema}
      validateOnBlur={false}
      validateOnChange={false}
      onSubmit={(values) => {
        console.log('EditTodo ~ values:', values);
        handleEditTodo(values);
      }}
    >
      {() => (
        <Form style={{ width: '100%' }}>
          <Box display='flex' width='100%' alignItems='center' justifyContent='space-between'>
            <CustomTodoInput name='todoInput' aria-label='Edit todo' />

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
