// components/DeviceList.tsx with FlatList
import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import Counter from './Counter';

type Device = {
  id: string;
  name: string;
};

const DEFAULT_DEVICES: Device[] = [
  { id: '1', name: 'Device 1' },
  { id: '2', name: 'Device 2' },
  { id: '3', name: 'Device 3' },
  { id: '4', name: 'Device 4' },
  { id: '5', name: 'Device 5' },
];

function DeviceList({ devices = DEFAULT_DEVICES }: { devices?: Device[] }) {
  const renderItem = ({ item }: { item: Device }) => (
    <View style={styles.card}>
      <Text style={styles.deviceName}>{item.name}</Text>
      <Counter deviceId={item.id} />
    </View>
  );

  return (
    <FlatList
      data={devices}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.listContent}
      showsVerticalScrollIndicator={false}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
    />
  );
}

const styles = StyleSheet.create({
  listContent: {
    padding: 16,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  deviceName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
    marginBottom: 12,
    textAlign: 'center',
  },
  separator: {
    height: 12,
  },
});

export default DeviceList;
