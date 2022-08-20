export type themeProps = {
  colors: {
    white: string;
    redLight: string;
    blackLight: string;
    black: string;
    blue: string;
    beige: string;
  },
  spaces: {
    small: string;
    medium: string;
    large: string;
    xLarge: string;
    xxLarge: string;
    extraLarge: string;
  },
  fonts: string[],
  fontSizes: {
    fz0: string;
    fz1: string;
    fz2: string;
    fz3: string;
    fz4: string;
    fz5: string;
    fz6: string;
  },
}

export const theme = {
  colors: {
    white: '#FFF',
    redLight: '#f46262',
    blackLight: '#54565d',
    black: '#000',
    blue: '#3f53d8',
    beige: '#f7f4f2',
  },
  spaces: {
    small: '8px',
    medium: '16px',
    large: '24px',
    xLarge: '32px',
    xxLarge: '40px',
    extraLarge: '48px',
  },
  fonts: ['sans-serif', 'Roboto'],
  fontSizes: {
    fz0: '.8rem',
    fz1: '1rem',
    fz2: '1.25rem',
    fz3: '1.5rem',
    fz4: '1.75rem',
    fz5: '2rem',
    fz6: '2.5rem',
  },
};

export default theme;
