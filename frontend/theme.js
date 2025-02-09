'use client';
import { createTheme } from '@mui/material/styles';
import { purple, deepPurple } from '@mui/material/colors';



const theme = createTheme({
  typography: {
    fontFamily: 'var(--font-roboto)',
  },
  palette: {
    primary: {
      main: deepPurple[500],
      light: deepPurple[300],
      dark: deepPurple[800],
      contrastText: deepPurple[50],
    },
    secondary: {
      light: purple[100],
      main: purple[200],
      dark: purple[300],
      contrastText: purple[50],
    },
  },
  cssVariables: true,
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true, // No more ripple, on the whole application 💣!
      },
    },
    MuiSvgIcon: {
      htmlColor: deepPurple[50],
    }
  },
});

export default theme;

