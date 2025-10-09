import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Card = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3),
  width: '100%',
  textAlign: 'left',
  display: 'flex',
  flexDirection: 'column',
  background: theme.palette.textColor.white,
  border: `${theme.spacing(0.1)} solid ${theme.palette.textColor.grayLight}`,
  borderRadius: '14px',
  '&:hover': {
    boxShadow: `${theme.spacing(0)} ${theme.spacing(0)} ${theme.spacing(
      1
    )} ${theme.spacing(0)} rgba(0, 0, 0, 0.15)`,
  },
}));

export const IconBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(1, 1, 1, 0),
  display: 'flex',
  alignItems: 'left',
  justifyContent: 'left',
}));

export const Title = styled(Typography)(({ theme }) => ({
  color: theme.palette.tertiary.main,
  fontWeight: 600,
  marginTop: theme.spacing(2),
  fontSize: theme.spacing(2),
}));

export const Description = styled(Typography)(({ theme }) => ({
  color: theme.palette.textColor.secondary,
  fontWeight: 600,
  fontSize: theme.spacing(1.7),
  textAlign: 'left',
  margin: theme.spacing(1, 0),
  opacity: '70%',
}));
