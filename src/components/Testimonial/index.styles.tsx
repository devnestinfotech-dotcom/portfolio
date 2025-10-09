import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const HeaderWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: '100%',
  margin: theme.spacing(5, 0),
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
}));
