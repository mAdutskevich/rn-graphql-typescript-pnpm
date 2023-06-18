// import type { Preview } from '@storybook/react';
// import { withThemeFromJSXProvider } from '@storybook/addon-styling';
// import { ThemeProvider } from 'styled-components';
// import { lightTheme } from '../src/themes/lightTheme';
// import { darkTheme } from '../src/themes/darkTheme';

// export const decorators = [
//     withThemeFromJSXProvider({
//         themes: {
//             light: lightTheme,
//             dark: darkTheme,
//         },
//         defaultTheme: 'light',
//         Provider: ThemeProvider,
//     }),
// ];

// const preview: Preview = {
//     parameters: {
//         actions: { argTypesRegex: '^on[A-Z].*' },
//         controls: {
//             matchers: {
//                 color: /(background|color)$/i,
//                 date: /Date$/,
//             },
//         },
//     },
// };

// export default preview;

// // import React from 'react';
// // import { Preview } from '@storybook/react';
// // import { ThemeProvider } from 'styled-components';
// // import { lightTheme } from '../src/themes/lightTheme';
// // import { darkTheme } from '../src/themes/darkTheme';
// // import { FontsProvider } from '../src/components/templates/FontProvider/FontProvider';

// // const preview: Preview = {
// //   decorators: [
// //     (Story) => (
// //       <FontsProvider>
// //         <ThemeProvider theme={lightTheme}>
// //           {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
// //           <Story />
// //         </ThemeProvider>
// //       </FontsProvider>
// //     ),
// //   ],
// // };

// // export default preview;