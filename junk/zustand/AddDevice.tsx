// components/AddDevice.tsx
import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Alert } from 'react-native';
import useDeviceStore from '@/storage/useDeviceStore';
import { Button } from '@/components/Button';

function AddDevice() {
  const [deviceName, setDeviceName] = useState('');
  const addDevice = useDeviceStore((state) => state.addDevice);

  const handleGenerateRandom = () => {
    setDeviceName(`Oh-${Date.now() % 10000}`);
  };

  const handleAddDevice = () => {
    if (deviceName.trim()) {
      addDevice(deviceName);
      setDeviceName('');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={deviceName}
        onChangeText={setDeviceName}
        placeholder="Enter device name"
        placeholderTextColor="#999"
      />
      <Button
        onPress={handleGenerateRandom}
        title="🎲 Random"
        variant="secondary"
        size="small"
      />
      <Button
        onPress={handleAddDevice}
        title="Add Device"
        variant="primary"
        size="medium"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 16,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
    gap: 12,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#E5E5E5',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    fontSize: 16,
    backgroundColor: '#FFFFFF',
  },
});

export default AddDevice;
