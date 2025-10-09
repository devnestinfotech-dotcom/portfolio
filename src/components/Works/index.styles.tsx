import { Box, Grid2, Typography } from '@mui/material';

import { styled } from '@mui/material/styles';

export const Description = styled(Typography)(({ theme }) => ({
  color: theme.palette.textColor.secondary,
  fontWeight: 600,
  fontSize: theme.spacing(2),
  textAlign: 'left',
}));

export const Heading = styled(Typography)(({ theme }) => ({
  color: theme.palette.tertiary.main,
  fontWeight: 600,
  fontSize: theme.spacing(5),
}));

export const SectionWrapper = styled(Box)(({ theme }) => ({
  padding: theme.spacing(12),
  width: '100%',
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  background: theme.palette.bg.main,
}));

export const Grid2Wrapper = styled(Grid2)(({ theme }) => ({
  padding: theme.spacing(1),
}));
