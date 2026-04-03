import { PermissionsAndroid, Platform } from 'react-native';

export const handleAndroidPermissions = async () => {
  if (Platform.OS !== 'android') return;

  // For Android 12 (API 31) and above
  if (Platform.Version >= 31) {
    const result = await PermissionsAndroid.requestMultiple([
      PermissionsAndroid.PERMISSIONS.BLUETOOTH_SCAN,
      PermissionsAndroid.PERMISSIONS.BLUETOOTH_CONNECT,
    ]);

    // Notice we do NOT request ACCESS_FINE_LOCATION here
    // because you have 'neverForLocation' in app.json
    return (
      result['android.permission.BLUETOOTH_SCAN'] === 'granted' &&
      result['android.permission.BLUETOOTH_CONNECT'] === 'granted'
    );
  } else {
    // For Android 11 and below, Location is MANDATORY for BLE
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    );
    return granted === PermissionsAndroid.RESULTS.GRANTED;
  }
};
