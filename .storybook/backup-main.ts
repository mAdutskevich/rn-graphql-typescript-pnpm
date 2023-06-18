// import type { StorybookConfig } from '@storybook/react-webpack5';
// import * as path from 'path';

// const config: StorybookConfig = {
//     stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
//     addons: [
//         '@storybook/addon-links',
//         '@storybook/addon-essentials',
//         '@storybook/addon-react-native-web',
//         // '@storybook/addon-styling',
//     ],
//     core: {
//         builder: 'webpack5',
//     },
//     framework: {
//         name: '@storybook/react',
//         options: {},
//     },
//     docs: {
//         autodocs: 'tag',
//     },
//     webpackFinal: async (config) => {
//         if (config?.resolve) {
//             config.resolve.alias = {
//                 ...config.resolve.alias,
//                 '@/': path.resolve(__dirname, '../src/'),
//                 '@/enums': path.resolve(__dirname, '../src/enums'),
//                 '@/utils': path.resolve(__dirname, '../src/utils'),
//                 '@/themes': path.resolve(__dirname, '../src/themes'),
//             };
//         }

//         return config;
//     },
//     typescript: {
//         check: false,
//         checkOptions: {},
//         reactDocgen: 'react-docgen-typescript',
//         reactDocgenTypescriptOptions: {
//             // makes union prop types like variant and size appear as select controls
//             shouldExtractLiteralValuesFromEnum: true,
//             // makes string and boolean types that can be undefined appear as inputs and switches
//             shouldRemoveUndefinedFromOptional: true,
//             // Filter out third-party props from node_modules except @mui packages
//             propFilter: (prop) =>
//                 prop.parent ? !/node_modules\/(?!@mui)/.test(prop.parent.fileName) : true,
//         },
//     },
// };

// export default config;

// // import type { StorybookConfig } from '@storybook/react-webpack5';

// // const config: StorybookConfig = {
// //     // stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
// //     stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
// //     addons: [
// //         '@storybook/addon-actions',
// //         '@storybook/addon-links',
// //         '@storybook/preset-typescript',
// //         // 'storybook-addon-styled-component-theme',
// //     ],
// //     framework: {
// //         name: '@storybook/react-webpack5',
// //         options: {},
// //     },
// //     docs: {
// //         autodocs: 'tag',
// //     },
// // };

// // export default config;
