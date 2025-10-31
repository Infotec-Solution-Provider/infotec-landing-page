import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#496ca3',
      light: '#6b8bc4',
      dark: '#2e4a75',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#25D366', // WhatsApp green
      light: '#4fde87',
      dark: '#1aa850',
      contrastText: '#ffffff',
    },
    background: {
      default: '#ffffff',
      paper: '#f8f9fa',
      dark: '#1e4364',
    },
    text: {
      primary: '#2c3e50',
      secondary: '#5a6c7d',
    },
    accent: {
      orange: '#ff6b35',
      blue: '#4a90e2',
      purple: '#9b59b6',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 800,
      fontSize: '3.5rem',
      lineHeight: 1.2,
      letterSpacing: '-0.02em',
      '@media (max-width:600px)': {
        fontSize: '2.5rem',
      },
    },
    h2: {
      fontWeight: 700,
      fontSize: '2.75rem',
      lineHeight: 1.3,
      letterSpacing: '-0.01em',
      '@media (max-width:600px)': {
        fontSize: '2rem',
      },
    },
    h3: {
      fontWeight: 700,
      fontSize: '2.25rem',
      lineHeight: 1.4,
      '@media (max-width:600px)': {
        fontSize: '1.75rem',
      },
    },
    h4: {
      fontWeight: 600,
      fontSize: '1.75rem',
      lineHeight: 1.5,
      '@media (max-width:600px)': {
        fontSize: '1.5rem',
      },
    },
    h5: {
      fontWeight: 600,
      fontSize: '1.5rem',
      lineHeight: 1.5,
      '@media (max-width:600px)': {
        fontSize: '1.25rem',
      },
    },
    body1: {
      fontSize: '1.125rem',
      lineHeight: 1.7,
      '@media (max-width:600px)': {
        fontSize: '1rem',
      },
    },
    body2: {
      fontSize: '1rem',
      lineHeight: 1.6,
    },
  },
  spacing: 8,
  shape: {
    borderRadius: 12,
  },
  shadows: [
    'none',
    '0px 2px 4px rgba(0,0,0,0.05)',
    '0px 4px 8px rgba(0,0,0,0.08)',
    '0px 8px 16px rgba(0,0,0,0.1)',
    '0px 12px 24px rgba(0,0,0,0.12)',
    '0px 16px 32px rgba(0,0,0,0.15)',
    ...Array(19).fill('0px 16px 32px rgba(0,0,0,0.15)'),
  ],
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 600,
          borderRadius: 8,
          padding: '12px 32px',
          fontSize: '1rem',
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0px 8px 16px rgba(0,0,0,0.15)',
          },
        },
        contained: {
          boxShadow: '0px 4px 12px rgba(73, 108, 163, 0.3)',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: '0px 4px 20px rgba(0,0,0,0.08)',
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'translateY(-8px)',
            boxShadow: '0px 12px 32px rgba(0,0,0,0.15)',
          },
        },
      },
    },
  },
});

export default theme;
