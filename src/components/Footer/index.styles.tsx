import { Box, Typography } from '@mui/material';

import { styled } from '@mui/material/styles';

export const SectionWrapper = styled(Box)<{ isMobile?: boolean }>(({ theme, isMobile }) => ({
  padding: theme.spacing(2, 12),
  width: '100%',
  textAlign: 'center',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  background: theme.palette.primary.dark,
  ...(!isMobile
    ? {
        flexDirection: 'row',
      }
    : {
        flexDirection: 'column',
        gap: theme.spacing(2),
      }),
}));

export const Heading = styled(Typography)(({ theme }) => ({
  color: theme.palette.textColor.white,
  fontWeight: 600,
  fontSize: theme.spacing(3),
}));

export const Description = styled(Typography)(({ theme }) => ({
  color: theme.palette.textColor.white,
  fontWeight: 400,
  fontSize: theme.spacing(2),
  textAlign: 'center',
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(0.6),
}));

export const SocialMediaLinksWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  background: theme.palette.primary.dark,
  gap: theme.spacing(1.8),
  color: theme.palette.textColor.white,
}));
