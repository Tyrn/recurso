import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { useSetAtom } from 'jotai';
import { Text, View } from '@/components/Themed';
import DeviceList from '@/components/DeviceList';
import AddDevice from '@/components/AddDevice';
import { initializeDevicesAtom } from '@/store/deviceAtoms';

export default function TabTwoScreen() {
  const initializeDevices = useSetAtom(initializeDevicesAtom);

  useEffect(() => {
    initializeDevices();
  }, [initializeDevices]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab Two</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <AddDevice />
      <DeviceList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
