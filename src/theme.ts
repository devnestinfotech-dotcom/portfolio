import { createTheme, ThemeOptions, Theme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    tertiary: Palette['primary'];
    bg: Palette['primary'];
    textColor: {
      primary: string;
      secondary: string;
      white: string;
      gray: string;
      grayLight: string;
    };
    socialMedia: {
      instagram: string;
      facebook: string;
      twitter: string;
      linkdin: string;
    };
    serviceCard: {
      red: string;
      yellow: string;
      pink: string;
      green: string;
      blue: string;
      purple: string;
      darkRed: string;
      darkYellow: string;
      darkPink: string;
      darkGreen: string;
      darkBlue: string;
      darkPurple: string;
    };
  }
  interface PaletteOptions {
    tertiary?: PaletteOptions['primary'];
    bg?: PaletteOptions['primary'];
    textColor?: {
      primary: string;
      secondary: string;
      white: string;
      gray: string;
      grayLight: string;
    };
    socialMedia?: {
      instagram: string;
      facebook: string;
      twitter: string;
      linkdin: string;
    };
    serviceCard?: {
      red: string;
      yellow: string;
      pink: string;
      green: string;
      blue: string;
      purple: string;
      darkRed: string;
      darkYellow: string;
      darkPink: string;
      darkGreen: string;
      darkBlue: string;
      darkPurple: string;
    };
  }
}

const theme: Theme = createTheme({
  palette: {
    primary: {
      main: '#fffaf4',
      dark: '#111829'
    },
    secondary: {
      main: '#f59e0b',
      light: '#fef1e0',
      dark: '#d97707',
    },
    tertiary: {
      main: '#161c2d',
    },
    bg: {
      main: '#f9fafb',
      dark: '#574532',
    },
    socialMedia: {
      instagram: '#b7347c',
      facebook: '#2658aa',
      twitter: '#000000',
      linkdin: '#2658aa',
    },
    textColor: {
      primary: '#49494b',
      secondary: '#989898',
      white: '#fff',
      gray: '#a8a8a9',
      grayLight: '#e5e5e5',
    },
    serviceCard: {
      red: '#f6d5d3',
      yellow: '#fff4d7',
      pink: '#f2d7e5',
      green: '#daefef',
      blue: '#d4ddee',
      purple: '#e6dff6',
      darkRed: '#c92728',
      darkYellow: '#ffcd00',
      darkPink: '#b6317a',
      darkGreen: '#8ed2ce',
      darkBlue: '#2658aa',
      darkPurple: '#8060ce',
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    h1: {
      fontSize: '2rem',
      fontWeight: 700,
    },
    h2: {
      fontSize: '1.5rem',
      fontWeight: 600,
    },
  },
});

export default theme;
