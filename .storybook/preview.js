import { withThemeFromJSXProvider } from '@storybook/addon-styling';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from '../src/themes/lightTheme';
import { darkTheme } from '../src/themes/darkTheme';

export const decorators = [
    withThemeFromJSXProvider({
        themes: {
            light: lightTheme,
            dark: darkTheme,
        },
        defaultTheme: 'light',
        Provider: ThemeProvider,
        GlobalStyles,
    }),
];

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
};
