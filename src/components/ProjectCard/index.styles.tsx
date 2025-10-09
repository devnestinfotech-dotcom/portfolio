import { Box, Button, Grid2, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Card = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3),
  width: '100%',
  textAlign: 'left',
  display: 'flex',
  flexDirection: 'column',
  background: theme.palette.textColor.white,
  borderRadius: '30px',
}));

export const Grid2Wrapper = styled(Grid2)(({ theme }) => ({
  height: 'fit-content',
}));

export const Grid2Container = styled(Grid2)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
}));

export const ImageContainer = styled('img')<{ clickable?: boolean, isMobile?: boolean }>(({ theme, clickable, isMobile }) => ({
  width: '100%',
  height: (clickable || isMobile) ? '250px' : '400px',
  textAlign: 'left',
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  borderRadius: '10px',
  cursor: clickable ? 'pointer' : 'auto',
}));

export const CardBox = styled(Box)(({ theme }) => ({
  position: 'relative',
  '&:hover .overlay': {
    display: 'block',
  },
}));

export const OverLay = styled(Box)(({ theme }) => ({
  borderRadius: '10px',
  position: 'absolute',
  width: '100%',
  height: '250px',
  display: 'none',
  top: 0,
  cursor: 'pointer',
  background: 'linear-gradient(0deg, rgba(0,0,0,0.9) 0%, rgba(255,255,255,0.2) 100%) transparent',
}));

export const OpenButton = styled(Button)(({ theme }) => ({
  width: theme.spacing(6),
  height: theme.spacing(6),
  minWidth: theme.spacing(6),
  position: 'absolute',
  borderRadius: '50%',
  background: theme.palette.secondary.main,
  top: '50%',
  left: '50%',
  padding: theme.spacing(1),
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  transform: 'translate(-50%, -50%)',
}));

export const BottomBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(0, 3),
  width: '100%',
  textAlign: 'left',
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2.5),
  background: theme.palette.textColor.white,
  borderRadius: '30px',
}));

export const IconBox = styled(Button)(({ theme }) => ({
  padding: theme.spacing(1),
  height: '50px',
  width: '50px',
  minWidth: '50px',
  background: `${theme.palette.secondary.dark}`,
  borderRadius: '50px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

export const Title = styled(Typography)(({ theme }) => ({
  color: theme.palette.tertiary.main,
  fontWeight: 600,
  fontSize: theme.spacing(2.5),
}));

export const Description = styled(Typography)(({ theme }) => ({
  color: theme.palette.textColor.primary,
  fontWeight: 600,
  fontSize: theme.spacing(1.7),
  textAlign: 'left',
  margin: theme.spacing(0.5, 0),
  opacity: '70%',
}));

export const ProjectDetail = styled(Box)(({ theme, color }) => ({
  display: 'flex',
  alignItems: 'left',
  width: '100%',
  flexDirection: 'row',
  justifyContent: 'space-between',
}));

export const ChipBox = styled(Box)(({ theme, color }) => ({
  display: 'flex',
  alignItems: 'left',
  width: '100%',
  flexDirection: 'row',
  flexFlow: 'wrap',
  gap: theme.spacing(2),
}));
