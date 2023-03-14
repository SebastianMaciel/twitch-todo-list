import { Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';

export default function EmptyList() {
  return (
    <Box sx={{ marginTop: 5 }}>
      <Paper sx={{ marginY: 1 }} elevation={1}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '16px',
            width: '100%',
            userSelect: 'none',
          }}
        >
          <Typography variant='body1' noWrap>
            No hay tareas
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
}
