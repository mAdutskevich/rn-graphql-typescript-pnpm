import * as Location from 'expo-location';

export const getLocation = async (): Promise<Location.LocationObject> =>
    await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.High,
        // distanceInterval: 0,
        // timeInterval: 5000,
    });
