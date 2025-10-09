import { Box, Typography, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

export const SectionWrapper = styled(Box)(({ theme }) => ({
  minHeight: '60vh',
  width: '100%',
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  background: theme.palette.primary.dark,
  padding: theme.spacing(8, 2),
  position: 'relative',
  opacity: '0.99'
}));

export const Heading = styled(Typography)(({ theme }) => ({
  color: theme.palette.textColor.white,
  fontWeight: 700,
  fontSize: theme.spacing(4),
  lineHeight: 1.2,
  marginBottom: theme.spacing(3),
  [theme.breakpoints.down('md')]: {
    fontSize: theme.spacing(3),
  },
}));

export const Description = styled(Typography)<{ isMobile?: boolean }>(({ theme, isMobile }) => ({
  color: theme.palette.textColor.grayLight,
  fontWeight: 400,
  fontSize: theme.spacing(2.2),
  width: isMobile ? '90%' : '60%',
  textAlign: 'center',
  margin: theme.spacing(0, 0, 4, 0),
  lineHeight: 1.6,
  maxWidth: '600px',
}));

