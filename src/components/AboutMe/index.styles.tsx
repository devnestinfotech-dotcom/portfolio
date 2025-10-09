import { Box, Theme, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const SectionWrapper = styled(Box)(({ theme }) => ({
  padding: theme.spacing(12),
  width: '100%',
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
}));

export const BoxCard = styled(Box)<{ isMobile?: boolean }>(({ theme, isMobile }) => ({
  padding: theme.spacing(2, 1),
  position: 'absolute',
  top: '70%',
  right: isMobile ? '40%' : '55%',
  boxShadow: '0 5px 8px 0 rgba(0, 0, 0, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
  borderRadius: theme.spacing(1),
  backgroundColor: theme.palette.textColor.white,
  width: theme.spacing(23),
}));

export const SmallTextHeading = styled(Typography)(({ theme }) => ({
  color: theme.palette.tertiary.main,
  fontWeight: 600,
  fontSize: theme.spacing(2),
  textAlign: 'center',
}));

export const SmallTextHeighlight = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.main,
  fontWeight: 600,
  fontSize: theme.spacing(2.5),
  textAlign: 'center',
  display: 'inline-block',
}));

export const SmallTextDesc = styled(Typography)(({ theme }) => ({
  color: theme.palette.textColor.gray,
  fontWeight: 500,
  fontSize: theme.spacing(2),
  textAlign: 'center',
  display: 'inline-block',
}));

export const ImgBox = styled(`img`)<{ isMobile?: boolean }>(({ theme, isMobile }) => ({
  padding: isMobile ? theme.spacing(2.5) : theme.spacing(4),
  height: '500px',
  width: isMobile ? '280px' : '330px',
  borderRadius: '230px',
  backgroundColor: theme.palette.secondary.main,
  position: 'relative',
}));

export const Container = styled(Box)<{ isMobile?: boolean }>(({ theme, isMobile }) => ({
  padding: theme.spacing(1),
  width: '100%',
  textAlign: 'left',
  display: 'flex',
  flexDirection: isMobile ? 'column-reverse' : 'row',
  alignItems: 'center',
  justifyContent: 'center',
}));

export const Heading = styled(Typography)(({ theme }) => ({
  color: theme.palette.tertiary.main,
  fontWeight: 600,
  fontSize: theme.spacing(3),
  textAlign: 'left',
}));

export const Description = styled(Typography)(({ theme }) => ({
  color: theme.palette.textColor.gray,
  fontWeight: 500,
  fontSize: theme.spacing(2),
  margin: theme.spacing(2, 0),
}));

export const LeftContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(1),
  width: '50%',
  textAlign: 'left',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
}));

export const RightContainer = styled(Box)<{ isMobile?: boolean }>(({ theme, isMobile }) => ({
  padding: theme.spacing(1),
  width: isMobile ? '100%' : '50%',
  textAlign: 'left',
  display: 'flex',
  flexDirection: 'column',
}));
