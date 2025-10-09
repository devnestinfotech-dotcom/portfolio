import { Box, Button, Grid2, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const SectionWrapperGray = styled(Box)<{ isMobile?: boolean }>(({ theme, isMobile }) => ({
  padding: theme.spacing(isMobile ? 2 : 12),
  width: '100%',
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  background: theme.palette.bg.main,
}));

export const SectionWrapperWhite = styled(Box)<{ isMobile?: boolean }>(({ theme, isMobile }) => ({
  padding: theme.spacing(isMobile ? 2 : 12),
  width: '100%',
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
}));

export const Heading = styled(Typography)(({ theme }) => ({
  color: theme.palette.tertiary.main,
  fontWeight: 600,
  fontSize: theme.spacing(3),
}));

export const Description = styled(Typography)<{ isMobile?: boolean }>(({ theme, isMobile }) => ({
  color: theme.palette.textColor.gray,
  fontWeight: 400,
  fontSize: theme.spacing(2),
  width: isMobile ? '90%' : '60%',
  textAlign: 'center',
  margin: theme.spacing(2.5, 0),
}));

export const PrimaryButton = styled(Button)(({ theme }) => ({
  color: theme.palette.textColor.white,
  fontWeight: 700,
  fontSize: theme.spacing(2),
  padding: theme.spacing(0, 3),
  background: theme.palette.secondary.main,
  borderRadius: '8px',
  height: theme.spacing(5),
  display: 'flex',
  gap: theme.spacing(1.5),
  textTransform: 'capitalize',
  transition: 'transform 0.6s ease, box-shadow 0.6s ease',
  '&:hover': {
    color: theme.palette.primary.main,
    background: theme.palette.secondary.dark,
  },
}));

export const SecondaryButton = styled(Button)<{ width?: string }>(({ theme, width }) => ({
  color: theme.palette.secondary.main,
  fontWeight: 700,
  width: width || 'fit-content',
  fontSize: theme.spacing(2),
  padding: theme.spacing(1, 2),
  background: theme.palette.secondary.light,
  border: `1px solid ${theme.palette.secondary.main}`,
  borderRadius: '8px',
  display: 'flex',
  height: theme.spacing(5),
  gap: theme.spacing(1.5),
  transition: 'transform 0.6s ease, box-shadow 0.6s ease',
  textTransform: 'capitalize',
  '&:hover': {
    color: theme.palette.textColor.white,
    background: theme.palette.secondary.main,
  },
}));
