import * as Location from 'expo-location';

interface ILocationPermission {
    foregroundPermission: Location.PermissionResponse;
    backgroundPermission: Location.PermissionResponse;
}

export const getLocationPermission = async (): Promise<ILocationPermission> => {
    const foregroundPermission = await Location.getForegroundPermissionsAsync();
    const backgroundPermission = await Location.getBackgroundPermissionsAsync();

    return {
        foregroundPermission,
        backgroundPermission,
    };
};
