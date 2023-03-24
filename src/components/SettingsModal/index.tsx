import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';
import useStore from '../../store/store';
import { Props } from './types';

const SettingsModal = ({ open, onClose }: Props) => {
  const { clearTodos } = useStore();

  const handleClearLocalStorage = () => {
    localStorage.clear();
    onClose();
    clearTodos();
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby='alert-dialog-title'
      aria-describedby='alert-dialog-description'
    >
      <DialogTitle id='alert-dialog-title'>Settings</DialogTitle>
      <DialogContent>
        <DialogContentText id='alert-dialog-description'>
          The Todo list is being saved in your browser in the localStorage.
        </DialogContentText>
        <DialogContentText id='alert-dialog-description'>
          It will persist even if you close the browser.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button color='error' onClick={handleClearLocalStorage} autoFocus>
          Remove all data
        </Button>
        <Button variant='contained' onClick={onClose}>
          Go back
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default SettingsModal;
