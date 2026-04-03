# A React Native BLE sandbox

...for the time being

- The project has been created with

```
yarn create expo-app recurso -t tabs
```

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
pnpm = '10'
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

- Project health

```
npx expo-doctor
```

```
npx expo install --fix
```

- On the Android device, keep the track of the application
  permissions. For now, _Location permission: Allow only
  while using the app_.
