import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const SkillBarContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  margin: theme.spacing(2, 0),
  position: 'relative',
  padding: theme.spacing(2),
}));

export const SkillLabel = styled(Typography)(({ theme }) => ({
  color: theme.palette.tertiary.main,
  fontWeight: 600,
  marginBottom: theme.spacing(1.5),
  fontSize: theme.spacing(2),
  textAlign: 'left',
}));

export const PercentageText = styled(Typography)(({ progress }: { progress: number }) => ({
  position: 'absolute',
  left: `${progress}%`,
  top: '50%',
  transform: 'translateX(-50%) translateY(-50%)',
  zIndex: 1,
}));
