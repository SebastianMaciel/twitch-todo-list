import { TextField } from '@mui/material';
import { useField } from 'formik';

const CustomTodoInput = (props: any) => {
  const [field, helpers] = useField(props.name);

  return (
    <TextField
      {...field}
      {...props}
      sx={{ width: '80%', height: '54px' }}
      autoComplete='off'
      error={!!helpers.error}
      helperText={helpers.error}
      id='todo-input'
    />
  );
};

export default CustomTodoInput;
