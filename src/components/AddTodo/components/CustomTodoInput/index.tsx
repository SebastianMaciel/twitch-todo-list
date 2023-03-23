import { TextField } from '@mui/material';
import { useField } from 'formik';

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

export default CustomTodoInput;
