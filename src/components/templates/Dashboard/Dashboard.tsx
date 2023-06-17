import { DeviceEventEmitter, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CHANGE_THEME_EVENT, IS_DARK_THEME } from '@/constants/constants';
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

    return (
        <StyledContainer>
            <Text>dashboard</Text>
            <Button
                title="Switch Theme"
                onClick={handleThemeSwitch}
                $designType={ButtonDesignType.SECONDARY}
            />
        </StyledContainer>
    );
};
