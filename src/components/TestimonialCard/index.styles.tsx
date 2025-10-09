import { Box, Divider, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import FormatQuoteSharpIcon from '@mui/icons-material/FormatQuoteSharp';

export const Card = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  textAlign: 'left',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  background: theme.palette.textColor.white,
  borderRadius: '14px',
  border: `1px solid ${theme.palette.secondary.main}`,
  margin: theme.spacing(0, 2),
  boxShadow: `${theme.spacing(0)} ${theme.spacing(0)} ${theme.spacing(
    1
  )} ${theme.spacing(0)} rgba(0, 0, 0, 0.15)`,
}));

export const QuoteIcon = styled(FormatQuoteSharpIcon)(({ theme }) => ({
  transform: 'rotate(180deg)',
  fontSize: '56px',
}));

export const Heading = styled(Typography)(({ theme }) => ({
  color: theme.palette.tertiary.main,
  fontWeight: 600,
  fontSize: theme.spacing(2.5),
}));

export const Title = styled(Typography)(({ theme }) => ({
  color: theme.palette.textColor.gray,
  fontWeight: 600,
  marginTop: theme.spacing(0.5),
  fontSize: theme.spacing(1.5),
}));

export const Description = styled(Typography)(({ theme }) => ({
  color: theme.palette.textColor.secondary,
  fontWeight: 600,
  fontSize: theme.spacing(1.7),
  textAlign: 'center',
  margin: theme.spacing(1.5, 0, 2.5),
  opacity: '70%',
}));

export const DividerComp = styled(Divider)(({ theme }) => ({
  color: theme.palette.textColor.gray,
  margin: theme.spacing(3, 0, 1.5),
  width: '100%',
}));
