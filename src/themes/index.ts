import {DefaultTheme as NavigationDefaultTheme} from '@react-navigation/native';
import {DefaultTheme as PaperDefaultTheme} from 'react-native-paper';

const LightTheme = {
  ...PaperDefaultTheme,
  ...NavigationDefaultTheme,
  colors: {
    ...PaperDefaultTheme.colors,
    ...NavigationDefaultTheme.colors,
    primary: '#9f662f',
    secondary: '#d6af5a',
    accent: '#f5f6fa',
    warning: '#e67e22',
    danger: '#EA2027',
    white: '#ffffff',
  },
};

export default {...LightTheme};
