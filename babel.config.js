module.exports = function (api) {
    api.cache(true);
    return {
        presets: ['babel-preset-expo'],
        plugins: [
            [
                // for reading .env variables
                'module:react-native-dotenv',
                {
                    moduleName: '@env',
                    path: '.env',
                    blacklist: null,
                    whitelist: null,
                    safe: false,
                    allowUndefined: true,
                },
            ],
            [
                'module-resolver',
                {
                    alias: {
                        // This needs to be mirrored in tsconfig.json
                        '@': './src',
                    },
                },
            ],
        ],
    };
};
