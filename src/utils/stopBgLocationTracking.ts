import * as Location from 'expo-location';
import { BACKGROUND_LOCATION_TASK } from '@/constants/constants';

export const stopBgLocationTracking = async () => {
    console.warn('Stop bg tracking!');
    const isTaskHasStarted = await Location.hasStartedLocationUpdatesAsync(
        BACKGROUND_LOCATION_TASK,
    );

    if (isTaskHasStarted) {
        await Location.stopLocationUpdatesAsync(BACKGROUND_LOCATION_TASK);
    }
};
