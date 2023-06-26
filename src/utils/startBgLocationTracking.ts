import * as Location from 'expo-location';
import * as TaskManager from 'expo-task-manager';
import { getBackgroundLocation } from '@/utils/getBackgroundLocation';
import { BACKGROUND_LOCATION_TASK } from '@/constants/constants';

export const startBgLocationTracking = async () => {
    console.warn('Start bg tracking!');
    const isTaskDefined = await TaskManager.isTaskDefined(BACKGROUND_LOCATION_TASK);
    const isTaskHasStarted = await Location.hasStartedLocationUpdatesAsync(
        BACKGROUND_LOCATION_TASK,
    );

    if (isTaskDefined && !isTaskHasStarted) {
        getBackgroundLocation();
    }
};
