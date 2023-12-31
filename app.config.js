module.exports = {
    expo: {
        name: 'test',
        slug: 'test',
        version: '1.0.0',
        orientation: 'portrait',
        icon: './assets/icon.png',
        userInterfaceStyle: 'light',
        splash: {
            image: './assets/splash.png',
            resizeMode: 'contain',
            backgroundColor: '#ffffff',
        },
        assetBundlePatterns: ['**/*'],
        ios: {
            supportsTablet: true,
        },
        android: {
            adaptiveIcon: {
                foregroundImage: './assets/adaptive-icon.png',
                backgroundColor: '#ffffff',
            },
            package: 'com.madutskevich.test',
        },
        web: {
            favicon: './assets/favicon.png',
        },
        extra: {
            eas: {
                projectId: '5479b9f5-4889-47cd-b1b4-8b292e0bf3ed',
            },
        },
    },
};
