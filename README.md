# ShareTest11
Highlights a compatibility bug in react-native-share-extension for iOS 11

*To recreate the bug on a device running iOS 11:*

1. Install the dependencies using `npm install`

2. Bundle the project using `react-native bundle --platform ios --dev false --entry-file index.ios.js --bundle-output iOS/main.jsbundle`

3. Open Xcode 9 and deploy to device from the ShareTest11 scheme

4. Head to Photos on the device once the app is booted and share an app to ShareTest11Ext, to show the extension

5. Close the extension

6. Take a screenshot anywahere and open the screenshot editor that appears at the bottom left of the screen

7. Attempt to share the photo to the share extension, it should crash.
