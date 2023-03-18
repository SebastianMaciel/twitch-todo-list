import { Todo } from '../../../../types/types';

export interface EditTodoProps {
  todo: Todo;
  toggleIsEditing: () => void;
}
