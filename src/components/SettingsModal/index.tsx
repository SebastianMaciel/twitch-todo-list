import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  FormGroup,
  FormControlLabel,
  Switch,
  Alert,
} from '@mui/material';
import { toast } from 'react-hot-toast';
import useStore from '../../store/store';
import { Props } from './types';

const SettingsModal = ({ open, onClose }: Props) => {
  const { todos, clearTodos, allowRepeatedDescriptions, setAllowRepeatedDescriptions } = useStore();

  const handleClearLocalStorage = () => {
    localStorage.clear();
    toast.success('Your information and settings have been deleted successfully', {
      style: { borderRadius: '5px', background: '#333', color: '#fff' },
      duration: 5000,
    });
    onClose();
    clearTodos();
  };

  const handleToggle = (checked: boolean) => {
    setAllowRepeatedDescriptions(checked);
  };

  const downloadJSONFile = () => {
    const dataStr = JSON.stringify(todos, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Todo list.json';
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby='alert-dialog-title'
      aria-describedby='alert-dialog-description'
    >
      <DialogTitle id='alert-dialog-title'>Settings</DialogTitle>
      <Divider />
      <DialogContent>
        <FormGroup>
          <DialogContentText id='alert-dialog-description'>
            <FormControlLabel
              control={
                <Switch
                  checked={allowRepeatedDescriptions}
                  onChange={(e) => handleToggle(e.target.checked)}
                />
              }
              label='Allow repeated descriptions'
            />
          </DialogContentText>
        </FormGroup>
        <DialogContentText id='alert-dialog-description'>
          If checked, the app won't prevent you from adding or editing a todo with the same
          description as another.
        </DialogContentText>
      </DialogContent>
      <Divider />
      <DialogContent>
        <DialogContentText id='alert-dialog-description'>
          You can download your todo list as a JSON file.
        </DialogContentText>
        {todos.length > 0 ? (
          <Button
            variant='outlined'
            sx={{ mt: 2 }}
            color='info'
            onClick={downloadJSONFile}
            autoFocus
          >
            Download
          </Button>
        ) : (
          <Alert sx={{ mt: 2 }} variant='outlined' severity='error'>
            You need to add at least one todo to download the file
          </Alert>
        )}
      </DialogContent>
      <Divider />
      <DialogContent>
        <DialogContentText id='alert-dialog-description'>
          Note: The todo list and settings are being saved in your browser.
        </DialogContentText>
        <DialogContentText id='alert-dialog-description'>
          It will persist even if you close the tab or browser.
        </DialogContentText>
        <Button
          variant='outlined'
          sx={{ mt: 2 }}
          color='error'
          onClick={handleClearLocalStorage}
          autoFocus
        >
          Remove all data
        </Button>
      </DialogContent>
      <Divider />
      <DialogActions>
        <Button variant='contained' onClick={onClose}>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default SettingsModal;
