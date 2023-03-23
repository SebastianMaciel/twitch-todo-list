import * as Yup from 'yup';

export const validationSchema = Yup.object({
  todoInput: Yup.string()
    .required('Description must not be empty')
    .min(3, 'Description must be at least 3 characters')
    .max(50, 'Description must be less than 50 characters')
    .trim(),
});
