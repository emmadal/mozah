import {MD3LightTheme as DefaultTheme} from 'react-native-paper';
import {DefaultTheme as NavigationDefaultTheme} from '@react-navigation/native';

const theme = {
  ...DefaultTheme,
  ...NavigationDefaultTheme,
  myOwnProperty: true,
  colors: {
    ...NavigationDefaultTheme.colors,
    primary: '#9f662f',
    purple: '#9c27b0',
    error: '#F44335',
    light: '#FFFFFF',
    clouds: '#E0E0E0',
    accent: '#f5f6fa',
    dark: '#000000',
    warning: '#e67e22',
    success: '#4BB543',
    grey: '#636e72',
  },
};

export default theme;
