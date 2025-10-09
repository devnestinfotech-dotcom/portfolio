import { Box, Grid2, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const SectionWrapper = styled(Box)(({ theme }) => ({
  padding: theme.spacing(12),
  width: '100%',
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  background: theme.palette.bg.main,
}));

export const Heading = styled(Typography)(({ theme }) => ({
  color: theme.palette.tertiary.main,
  fontWeight: 600,
  fontSize: theme.spacing(3),
}));

export const Description = styled(Typography)(({ theme }) => ({
  color: theme.palette.textColor.gray,
  fontWeight: 400,
  fontSize: theme.spacing(2),
  width: '60%',
  textAlign: 'center',
  margin: theme.spacing(2.5, 0),
}));

export const Grid2Wrapper = styled(Grid2)(({ theme }) => ({
  padding: theme.spacing(1),
  marginTop: theme.spacing(3),
}));
