import React from 'react';
import { DeviceEventEmitter, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StatusBar } from 'expo-status-bar';
import { CHANGE_THEME_EVENT, IS_DARK_THEME } from '@/constants/constants';
import { ButtonDesignType } from '@/enums/ButtonDesignType';
import { Button } from '@/components/atoms/Button';

export const Root: React.FC = () => {
    const handleThemeSwitch = async () => {
        const isDarkTheme = await AsyncStorage.getItem(IS_DARK_THEME);

        await AsyncStorage.setItem(
            IS_DARK_THEME,
            isDarkTheme && !!JSON.parse(isDarkTheme) ? 'false' : 'true',
        );

        DeviceEventEmitter.emit(CHANGE_THEME_EVENT);
    };

    return (
        <>
            <Text>Test 2</Text>
            <Button
                title="Switch Theme D"
                onClick={handleThemeSwitch}
                $designType={ButtonDesignType.SECONDARY}
            />
            <Text>Check D</Text>
            <StatusBar style="auto" />
        </>
    );
};
