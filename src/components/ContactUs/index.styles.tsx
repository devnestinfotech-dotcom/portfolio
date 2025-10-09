import { Box, Divider, Grid2, Typography } from '@mui/material';

import { styled } from '@mui/material/styles';

export const Grid2Wrapper = styled(Grid2)(({ theme }) => ({
  height: 'fit-content',
}));

export const Grid2Container = styled(Grid2)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
}));

export const SectionWrapper = styled(Box)<{ isMobile?: boolean }>(({ theme, isMobile }) => ({
  padding: isMobile ? theme.spacing(2) : theme.spacing(8.5, 12, 7, 12),
  width: '100%',
  textAlign: 'left',
  display: 'flex',
  flexDirection: 'column',
}));

export const Title = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.main,
  fontWeight: 600,
  fontSize: theme.spacing(2),
}));

export const Heading = styled(Typography)(({ theme }) => ({
  color: theme.palette.tertiary.main,
  fontWeight: 600,
  fontSize: theme.spacing(5),
}));

export const Description = styled(Typography)(({ theme }) => ({
  color: theme.palette.textColor.secondary,
  fontWeight: 600,
  fontSize: theme.spacing(2),
  width: '60%',
  textAlign: 'center',
  margin: theme.spacing(2.5, 0),
}));

export const DividerComp = styled(Divider)(({ theme }) => ({
  color: theme.palette.textColor.gray,
  margin: theme.spacing(2.5, 0),
  width: '100%',
}));

export const SectionGroup = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
}));

export const SectionHeading = styled(Typography)(({ theme }) => ({
  color: theme.palette.textColor.primary,
  fontWeight: 600,
  fontSize: theme.spacing(2.3),
}));

export const IconValueBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(2),
}));

export const ValueBox = styled(Typography)(({ theme }) => ({
  color: theme.palette.textColor.gray,
  fontWeight: 400,
  fontSize: theme.spacing(2),
  width: '60%',
  textAlign: 'left',
  marginLeft: theme.spacing(5),
}));
