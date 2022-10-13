import { createTheme } from '@mui/material';

const CustomTheme = createTheme({
  palette: {
    secondary: {
      main: '#FFF200',
      light: '#FFF100',
      dark: '#E09B00',
      200: '#FFB900'
    },
    primary: {
      main: '#542E90'
    },
    grey: {
      100: '#A7A9AC', 
      200: '#F11133', 
      300: '#575756', 
      400: '#1D1D1B',
      600: '#000000'
    },
    error: {
      main: '#E65C72'
    },
    success: {
      main: '#60B393'
    },
    warning: {
      main: '#FFB31D'
    },
    info: {
      main: '#1877F3', // facebook color
      100: '#1DA1F2' //twitter Color
    }
  },
  typography: {
    fontFamily: ['Open Sans', 'sans-serif'].join(','),
    h1: {
      fontWeight: 600,
      fontSize: '52px',
      lineHeight: '71px'
    },
    h2: {
      fontWeight: 600,
      fontSize: '42px',
      lineHeight: '57px'
    },
    h3: {
      fontWeight: 600,
      fontSize: '28px',
      lineHeight: '33px'
    },
    h4: {
      fontWeight: 600,
      fontSize: '22px',
      lineHeight: '25px',
    },
    h5: {
      fontWeight: 600,
      fontSize: '17px',
      lineHeight: '20px',
    },
    h6: {
      fontWeight: 600,
      fontSize: '14px',
      lineHeight: '17px'
    },
    body1: {
      fontWeight: 400,
      fontSize: '14px',
      lineHeight: '19px'
    },
    body2: {
      fontWeight: 400,
      fontSize: '12px',
      lineHeight: '17px'
    },
    subtitle1: {
      fontSize: '12px',
      lineHeight: '11px'
    },
    subtitle2: {
      fontWeight: 600,
      fontSize: '12px',
      lineHeight: '17px'
    },
  }
});

export default CustomTheme;
