import React from 'react';
import { DeviceEventEmitter } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ThemeProvider } from 'styled-components/native';
import { lightTheme } from '@/themes/lightTheme';
import { darkTheme } from '@/themes/darkTheme';
import { CHANGE_THEME_EVENT, IS_DARK_THEME } from '@/constants/constants';
import { FontsProvider } from '@/components/templates/FontProvider';

const withTheme = <P extends object>(WrappedComponent: React.ComponentType<P>) =>
    function WithTheme(props: P) {
        const getThemeValue = async () => {
            const isDarkTheme = await AsyncStorage.getItem(IS_DARK_THEME);
            return isDarkTheme && !!JSON.parse(isDarkTheme) ? darkTheme : lightTheme;
        };

        const [theme, setTheme] = React.useState(lightTheme);

        React.useEffect(() => {
            getThemeValue().then((response) => {
                setTheme(response);
            });

            DeviceEventEmitter.addListener(CHANGE_THEME_EVENT, async () => {
                setTheme(await getThemeValue());
            });

            return () => {
                DeviceEventEmitter.removeAllListeners(CHANGE_THEME_EVENT);
            };
        }, []);

        return (
            <FontsProvider>
                <ThemeProvider theme={theme}>
                    <WrappedComponent {...props} />
                </ThemeProvider>
            </FontsProvider>
        );
    };

export default withTheme;
