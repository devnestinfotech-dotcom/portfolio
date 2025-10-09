import { Box, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

export const SectionWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  flexDirection: 'row',
  margin: theme.spacing(3.5, 0),
}));

export const SocialButton = styled(Button)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: theme.spacing(1),
  textTransform: 'none',
  padding: theme.spacing(1),
  borderRadius: '50% 50% 50% 0%',
  fontSize: theme.typography.body1.fontSize,
  boxShadow: theme.shadows[1],
  backgroundColor: theme.palette.primary.dark,
  height: '50px',
  width: '50px',
  minWidth: '50px',
  opacity: 0.9,
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: theme.shadows[3],
    border: `1px solid ${theme.palette.primary.main}`,
  },
}));
