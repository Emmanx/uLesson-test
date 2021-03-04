import { extendTheme } from '@chakra-ui/react';

const colors = {
  brand: {},
};

const styles = {
  global: {
    html: {
      fontSize: '62.5%',
      boxSizing: 'border-box',
    },
    body: {
      fontSize: '1.4rem',
      fontFamily: "'Mulish', sans-serif",
      background: '#EDEDEE',
    },
    a: {
      color: '#000',
    },
    '::placeholder': {
      color: '#000',
    },
  },
};

const customTheme = extendTheme({ styles, colors });

export default customTheme;
