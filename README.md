# rn-graphql-typescript-pnpm

## Create public android development build
Check https://docs.expo.dev/develop/development-builds/create-a-build/
1. `eas build --profile development --platform android`
2. Install and run the Android build on an emulator? - No
3. Open Expo go and scan QR code from your terminal. It will redirects you to Expo.
4. Download the app from Expo and install it to your device.
5. Check 'Run on the Android device' section

## Create local android development build
Check https://docs.expo.dev/build-reference/local-builds/
1. `eas build --profile development --platform android --local`
It will create .apk in the projects root folder.
2. Copy the .apk to your device and install the app.
3. Check 'Run on the Android device' section

## Run on the Android device
1. `pnpm i`
2. `npx expo start --dev-client`
3. open Expo go and scan QR code

## Information
1. `.npmrc` is required for correct pnpm deps installation
2. `expo-linking` is required for opening third-party applications on the phone



