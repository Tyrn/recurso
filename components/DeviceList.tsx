import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import Animated, { ZoomOut, LinearTransition } from 'react-native-reanimated';
import useDeviceStore from '@/storage/useDeviceStore';
import Counter from './Counter';

function DeviceList() {
  const devices = useDeviceStore((state) => state.devices);
  const removeDevice = useDeviceStore((state) => state.removeDevice);

  const renderItem = ({ item }: { item: { id: string; name: string } }) => (
    <Animated.View
      exiting={ZoomOut.duration(200)}
      layout={LinearTransition.springify().damping(20).mass(1).stiffness(500)}
      style={styles.cardWrapper}
    >
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Text style={styles.deviceName}>{item.name}</Text>
          <TouchableOpacity
            onPress={() => removeDevice(item.id)}
            style={styles.removeButton}
          >
            <Text style={styles.removeButtonText}>✕</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.cardHeader}>
          <Text style={styles.deviceName}>{item.id}</Text>
        </View>
        <Counter deviceId={item.id} />
      </View>
    </Animated.View>
  );

  return (
    <FlatList
      data={devices}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.listContent}
      showsVerticalScrollIndicator={true}
      persistentScrollbar={true}
      style={styles.list}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
    />
  );
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
    width: '100%',
  },
  listContent: {
    padding: 16,
  },
  cardWrapper: {
    width: '100%',
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
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  deviceName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
    flex: 1,
    textAlign: 'center',
  },
  removeButton: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#FF3B30',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 0,
    top: 0,
  },
  removeButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  separator: {
    height: 12,
  },
});

export default DeviceList;
