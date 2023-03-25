import { useEffect } from 'react';
import { TextField } from '@mui/material';
import { useField } from 'formik';
import { toast } from 'react-hot-toast';

const CustomTodoInput = (props: any) => {
  const [field, helpers] = useField(props.name);
  const hasErrors = !!helpers.error && !!helpers.touched;

  useEffect(() => {
    if (hasErrors) {
      toast.error(helpers.error as string, {
        style: { borderRadius: '5px', background: '#333', color: '#fff' },
        id: 'validation error',
      });
    }
  }, [hasErrors, helpers.error]);

  return <TextField {...field} {...props} autoComplete='off' sx={{ width: '70%' }} size='small' />;
};

export default CustomTodoInput;
