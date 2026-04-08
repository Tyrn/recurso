import React, { memo } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import Animated, { ZoomOut, LinearTransition } from 'react-native-reanimated';
import { useAtomValue, useSetAtom } from 'jotai';
import {
  devicesAtom,
  removeDeviceAtom,
  countersAtom,
} from '@/store/deviceAtoms';
import Counter from './Counter';

// Individual item component - gets device directly from devices array
const DeviceItem = memo(
  ({ deviceId, deviceName }: { deviceId: string; deviceName: string }) => {
    const removeDevice = useSetAtom(removeDeviceAtom);

    return (
      <Animated.View
        exiting={ZoomOut.duration(200)}
        layout={LinearTransition.springify().damping(20).mass(1).stiffness(500)}
        style={styles.cardWrapper}
      >
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.deviceName}>{deviceName}</Text>
            <TouchableOpacity
              onPress={() => removeDevice(deviceId)}
              style={styles.removeButton}
            >
              <Text style={styles.removeButtonText}>✕</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.cardHeader}>
            <Text style={styles.deviceId}>{deviceId}</Text>
          </View>
          <Counter deviceId={deviceId} />
        </View>
      </Animated.View>
    );
  },
);

DeviceItem.displayName = 'DeviceItem';

function DeviceList() {
  const devices = useAtomValue(devicesAtom);

  const renderItem = ({ item }: { item: { id: string; name: string } }) => (
    <DeviceItem deviceId={item.id} deviceName={item.name} />
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
    textAlign: 'left',
  },
  deviceId: {
    fontSize: 12,
    fontWeight: '400',
    color: '#666666',
    flex: 1,
    textAlign: 'left',
  },
  removeButton: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#FF3B30',
    justifyContent: 'center',
    alignItems: 'center',
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
