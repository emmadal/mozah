import React, {PropsWithChildren} from 'react';
import {Provider as PaperProvider} from 'react-native-paper';

import theme from '../themes';

export type ThemeOverride = typeof theme;

const ThemeProvider: React.FC<PropsWithChildren> = ({children}) => {
  return <PaperProvider theme={theme}>{children}</PaperProvider>;
};

export default ThemeProvider;
