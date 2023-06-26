import { Text, Alert } from 'react-native';
import * as Location from 'expo-location';
import { getLocationPermission } from '@/utils/getLocationPermission';
import { startBgLocationTracking } from '@/utils/startBgLocationTracking';
import { stopBgLocationTracking } from '@/utils/stopBgLocationTracking';
import { ButtonDesignType } from '@/enums/ButtonDesignType';
import { Button } from '@/components/atoms/Button';
import { StyledContainer } from './StyledComponents';

export const Navi: React.FC = () => {
    const handleStartBgTracking = async () => {
        const isGPSEnabled = await Location.getProviderStatusAsync();
        const { foregroundPermission, backgroundPermission } = await getLocationPermission();

        if (!isGPSEnabled.gpsAvailable) {
            Alert.alert('Error', 'GPS is turned off');
            // IntentLauncher doesn't send the user to device gps page
            // IntentLauncher.startActivityAsync(
            //     IntentLauncher.ActivityAction.LOCATION_SOURCE_SETTINGS,
            // );
        }

        if (
            foregroundPermission.status === Location.PermissionStatus.GRANTED &&
            backgroundPermission.status === Location.PermissionStatus.GRANTED
        ) {
            // const brPerm = await Location.getBackgroundPermissionsAsync();
            // await Location.enableNetworkProviderAsync();
            startBgLocationTracking();
        } else {
            Alert.alert('Error', 'Location permisions are not granted');
        }
    };

    const handleStopBgTracking = () => {
        stopBgLocationTracking();
    };

    return (
        <StyledContainer style={{ flex: 1, alignItems: 'center' }}>
            <Text>Navi</Text>
            <Button
                title="Start background tracking"
                onClick={handleStartBgTracking}
                $designType={ButtonDesignType.SECONDARY}
            />
            <Button
                title="Stop background tracking"
                onClick={handleStopBgTracking}
                $designType={ButtonDesignType.SECONDARY}
            />
        </StyledContainer>
    );
};
