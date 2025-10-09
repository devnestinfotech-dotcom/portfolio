import { AppBar, IconButton, List, Box, Theme } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledAppBar = styled(AppBar)<{ isAtTop: boolean }>(({ theme, isAtTop }) => ({
  backgroundColor: theme.palette.primary.main,
  boxShadow: !isAtTop
    ? `${theme.spacing(0)} ${theme.spacing(0)} ${theme.spacing(
        1
      )} ${theme.spacing(0.5)} rgba(0, 0, 0, 0.15)`
    : 'none',
}));

export const NavLinks = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '1.5rem',
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}));

export const HamburgerMenu = styled(IconButton)(({ theme }) => ({
  display: 'none',
  [theme.breakpoints.down('md')]: {
    display: 'block',
  },
}));

export const DrawerList = styled(List)(({ theme }) => ({
  width: '250px',
  backgroundColor: theme.palette.bg.main,
  height: '100%',
}));

export const NavLink = styled('a')<{ selected: boolean }>(({ theme, selected }) => ({
  cursor: 'pointer',
  textDecoration: 'none',
  fontWeight: selected ? 600 : 500,
  color: selected ? theme.palette.secondary.main : theme.palette.textColor.primary,
  '&:hover': {
    textDecoration: 'none',
    color: theme.palette.secondary.main,
  },
}));

export const DrawerNavLink = styled('a')<{ selected: boolean }>(({ theme, selected }) => ({
  cursor: 'pointer',
  ...(selected ? { color: theme.palette.secondary.main } : {}),
  '&:hover': {
    color: theme.palette.secondary.main,
  },
}));
