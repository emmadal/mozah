import React, {PropsWithChildren} from 'react';
import {Provider as PaperProvider} from 'react-native-paper';

import theme from '../themes';

const ThemeProvider: React.FC<PropsWithChildren> = ({children}) => {
  return <PaperProvider theme={theme}>{children}</PaperProvider>;
};

export default ThemeProvider;
