import { Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import styles from './emptyList.module.css';

export default function EmptyList() {
  return (
    <Box className={styles.emptyList}>
      <Paper className={styles.emptyListPaper} elevation={1}>
        <Box className={styles.emptyListBox}>
          <Typography variant='body1'>There is nothing here...</Typography>
        </Box>
      </Paper>
    </Box>
  );
}
