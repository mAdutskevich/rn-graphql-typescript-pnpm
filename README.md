# rn-graphql-typescript-pnpm

## Create development build
Check https://docs.expo.dev/develop/development-builds/create-a-build/
1. `eas build --profile development --platform android`
2. Install and run the Android build on an emulator? - No
3. Open Expo go and scan QR code from your terminal. It will redirects you to Expo.
4. Download the app from Expo and install it to your device.
5. Check 'Run on the Android device' section

## Run on the Android device
1. `pnpm i`
2. `npx expo start --dev-client`
3. open Expo go and scan QR code

## Information
1. `.npmrc` is required for correct pnpm deps installation



