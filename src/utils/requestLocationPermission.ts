import * as Location from 'expo-location';

interface ILocationPermission {
    foregroundPermission: Location.PermissionStatus | null;
    backgroundPermission: Location.PermissionStatus | null;
}

export const requestLocationPermission = async (): Promise<ILocationPermission> => {
    const foregroundPermission = await Location.requestForegroundPermissionsAsync();
    const backgroundPermission = foregroundPermission.status
        ? await Location.requestBackgroundPermissionsAsync()
        : null;

    return {
        foregroundPermission: foregroundPermission?.status ?? null,
        backgroundPermission: backgroundPermission?.status ?? null,
    };
};
