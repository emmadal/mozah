import { ThemeOverride } from './src/hooks/useTheme.tsx'

declare global {
  namespace ReactNativePaper {
    interface Theme extends ThemeOverride
  }
}