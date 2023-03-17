import { useReducer, useState } from 'react';
import { Box, Button, ButtonGroup, Checkbox, Paper, TextField, Typography } from '@mui/material';
import Done from '@mui/icons-material/Done';
import DoneAll from '@mui/icons-material/DoneAll';
import { Todo } from '../../types/types';
import styles from './todoItem.module.css';
import useStore from '../../store/store';
import { Form, Formik, useField } from 'formik';
import * as Yup from 'yup';

interface TodoItemProps {
  todo: Todo;
}

const TodoItem = ({ todo }: TodoItemProps) => {
  const [isHover, setIsHover] = useState(false);
  console.log('TodoItem ~ isHover:', isHover);
  const [isEditing, toggleIsEditing] = useReducer((isEditing) => !isEditing, false);
  console.log('TodoItem ~ isEditing:', isEditing);

  const { removeTodo, toggleTodo, editTodo } = useStore();

  const validationSchema = Yup.object({
    todoInput: Yup.string()
      .required('Description must not be empty')
      .min(3, 'Description must be at least 3 characters')
      .max(50, 'Description must be less than 50 characters')
      .trim(),
  });

  const EditTodo = () => {
    const CustomTodoInput = (props: any) => {
      const [field, helpers] = useField(props.name);

      return <TextField {...field} {...props} sx={{ width: '70%' }} size='small' />;
    };

    return (
      <Formik
        initialValues={{ todoInput: todo.description }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log('EditTodo ~ values:', values);
          editTodo(todo.id, values.todoInput);
          toggleIsEditing();
        }}
      >
        {() => (
          <Form style={{ width: '100%' }}>
            <Box display='flex' width='100%' alignItems='center' justifyContent='space-between'>
              <CustomTodoInput name='todoInput' />
              <ButtonGroup variant='text' aria-label='Todo actions'>
                <Button size='small' onClick={toggleIsEditing}>
                  Cancel
                </Button>
                <Button type='submit' size='small' color='error'>
                  Update
                </Button>
              </ButtonGroup>
            </Box>
          </Form>
        )}
      </Formik>
    );
  };

  return (
    <Paper key={todo.id} sx={{ marginY: 1 }} elevation={1}>
      <Box
        className={styles.todoItem}
        onMouseEnter={() => !isEditing && setIsHover(true)}
        onMouseLeave={() => !isEditing && setIsHover(false)}
      >
        {!isEditing && (
          <>
            <Box display='flex' alignItems='center'>
              <Checkbox
                checked={todo.isCompleted}
                onChange={() => toggleTodo(todo.id)}
                icon={<Done />}
                checkedIcon={<DoneAll color='success' />}
              />
              <Typography variant='body1' ml={1} noWrap>
                {todo.description}
              </Typography>
            </Box>
            {isHover && (
              <ButtonGroup variant='text' aria-label='Todo actions'>
                <Button size='small' onClick={toggleIsEditing}>
                  Edit
                </Button>
                <Button size='small' onClick={() => removeTodo(todo.id)} color='error'>
                  Delete
                </Button>
              </ButtonGroup>
            )}
          </>
        )}
        {isEditing && <EditTodo />}
      </Box>
    </Paper>
  );
};

export default TodoItem;
