import React from 'react';
import { StatusBar } from 'expo-status-bar';
import * as TaskManager from 'expo-task-manager';
import { useTheme } from 'styled-components';
import { BACKGROUND_LOCATION_TASK } from '@/constants/constants';
import { useAppStatus } from '@/hooks/useAppStatus';
import { requestLocationPermission } from '@/utils/requestLocationPermission';
import { getLocationPermission } from '@/utils/getLocationPermission';
import { BottomTabs } from '@/components/organisms/BottomTabs';
import { StyledContainer } from './StyledComponents';

TaskManager.defineTask(BACKGROUND_LOCATION_TASK, async ({ data, error }) => {
    if (error) {
        console.warn('An error in background task occurred:', error);
        return;
    }

    if (data) {
        console.warn(
            'New location in background:',
            `lat:${data.locations[0].coords.latitude}; long:${
                data.locations[0].coords.longitude
            }; time:${Date(data.locations[0].timestamp)}`,
        );
    }
});

export const Root: React.FC = () => {
    const theme = useTheme();
    const appStatus = useAppStatus();
    console.warn('appStatus', appStatus);

    React.useEffect(() => {
        (async () => {
            const { foregroundPermission, backgroundPermission } = await getLocationPermission();

            if (
                (!foregroundPermission.granted && foregroundPermission.canAskAgain) ||
                (!backgroundPermission.granted && backgroundPermission.canAskAgain)
            ) {
                await requestLocationPermission();
            }
        })();
    }, []);

    return (
        <StyledContainer>
            <StatusBar
                style={theme?.name === 'light' ? 'light' : 'dark'}
                backgroundColor={theme?.bg.contrast}
            />
            <BottomTabs />
        </StyledContainer>
    );
};
