# A React Native BLE sandbox

...for the time being

- The project has been created with

```
yarn create expo-app recurso -t tabs
```

- The BLE code borrowed from
  [here](https://github.com/cmcWebCode40/React-Native-Expo-Bluetooth-Integration);
  [notes](https://medium.com/@chinweikemichaelchinonso/bluetooth-ble-integration-in-react-native-expo-new-architecture-ios-android-5c0100960979)

## Workflow

- Build
  - Clean the project (not always necessary)

  ```
  rm -rf android node_modules
  ```

  - Install dependencies

  ```
  yarn install
  ```

  - Take care of the native part (not always necessary)

  ```
  npx expo prebuild --clean -p android
  ```

- Run
  - Debug

  ```
  npx expo run:android
  ```

  - Release

  ```
  npx expo run:android --variant release
  ```

  ## Tips

- Keep the stable toolchain in `~/.mise.toml` (globally)

```
yarn = '1'
node = '24.11'
```

- Install the toolchain while in the home directory

```
mise install
```

- Check the project's Expo version

```
npx expo -v
```

- Project health and
  [dependencies](https://github.com/expo/fyi/blob/main/resolving-dependency-issues.md)

```
npx expo-doctor
```

- Project upgrade

```
npx expo install expo@latest
```

```
npx expo install --fix
```

- Getting rid of the warnings

```
yarn add -D @babel/core
```

- [Deduplicating transitive dependencies](https://github.com/expo/fyi/blob/main/resolving-dependency-issues.md#3-deduplicating-transitive-dependencies-in-your-lockfile)
  for [Yarn v1 (Classic)](https://classic.yarnpkg.com/lang/en/)

```
npx yarn-deduplicate && yarn
```

- On the Android device, keep the track of the application
  permissions. For now, _Location permission: Allow only
  while using the app_.
