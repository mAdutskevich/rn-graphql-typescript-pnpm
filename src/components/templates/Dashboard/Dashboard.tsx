import { DeviceEventEmitter, Text, Alert } from 'react-native';
import * as Linking from 'expo-linking';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CHANGE_THEME_EVENT, IS_DARK_THEME, GOOGLE_MAPS_URL } from '@/constants/constants';
import { ButtonDesignType } from '@/enums/ButtonDesignType';
import { Button } from '@/components/atoms/Button';
import { StyledContainer } from './StyledComponents';

export const Dashboard: React.FC = () => {
    const handleThemeSwitch = async () => {
        const isDarkTheme = await AsyncStorage.getItem(IS_DARK_THEME);

        await AsyncStorage.setItem(
            IS_DARK_THEME,
            isDarkTheme && !!JSON.parse(isDarkTheme) ? 'false' : 'true',
        );

        DeviceEventEmitter.emit(CHANGE_THEME_EVENT);
    };

    const openMap = () => {
        const address = ''; // add address
        const url = `${GOOGLE_MAPS_URL}/maps?q=${encodeURIComponent(address)}`;

        Linking.openURL(url).catch(() => {
            Alert.alert('Error', 'Unable to open map application');
        });
    };

    const handleOpenMap = () => {
        Linking.canOpenURL(GOOGLE_MAPS_URL).then((supported) => {
            if (supported) {
                openMap();
            } else {
                Alert.alert('Error', 'No map application available');
            }
        });
    };

    const handleOpenAppSettings = () => {
        Linking.openSettings();
    };

    return (
        <StyledContainer>
            <Text>dashboard</Text>
            <Button
                title="Switch Theme"
                onClick={handleThemeSwitch}
                $designType={ButtonDesignType.SECONDARY}
            />
            <Button
                title="Open Map"
                onClick={handleOpenMap}
                $designType={ButtonDesignType.SECONDARY}
            />
            <Button
                title="Open Settings"
                onClick={handleOpenAppSettings}
                $designType={ButtonDesignType.SECONDARY}
            />
        </StyledContainer>
    );
};
