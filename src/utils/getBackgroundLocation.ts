import * as Location from 'expo-location';
import { BACKGROUND_LOCATION_TASK } from '@/constants/constants';

export const getBackgroundLocation = async () => {
    console.warn('Run bg location tracking task');

    return await Location.startLocationUpdatesAsync(BACKGROUND_LOCATION_TASK, {
        accuracy: Location.Accuracy.Balanced,
        timeInterval: 5000,
        distanceInterval: 0,
        // showsBackgroundLocationIndicator: true, // Show a persistent notification during background location tracking (Android only)
    });
};
