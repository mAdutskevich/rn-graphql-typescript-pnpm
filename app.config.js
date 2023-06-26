module.exports = ({ config }) => ({
    ...config,
    android: {
        ...config.android,
        permissions: [
            'ACCESS_FINE_LOCATION',
            'ACCESS_COARSE_LOCATION',
            // 'ACCESS_BACKGROUND_LOCATION',
            // 'FOREGROUND_SERVICE',
        ],
    },
    plugins: [
        ...config.plugins,
        [
            'expo-location',
            {
                locationAlwaysAndWhenInUsePermission: `Allow ${config.name} ${config.name} to use your location.`,
                isIosBackgroundLocationEnabled: true,
                isAndroidBackgroundLocationEnabled: true,
            },
        ],
        [
            'react-native-background-geolocation',
            {
                license: 'YOUR_LICENSE_KEY_HERE',
            },
        ],
        [
            'expo-gradle-ext-vars',
            {
                googlePlayServicesLocationVersion: '20.0.0',
                appCompatVersion: '1.4.2',
            },
        ],
        'react-native-background-fetch',
    ],
});
