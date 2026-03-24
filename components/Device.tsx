// components/Device.tsx
import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { PressableScale } from 'pressto';

type Device = {
  id: string;
  name: string;
  type: string;
  status: 'online' | 'offline' | 'connecting';
  lastSeen?: string;
};

type DeviceProps = {
  device: Device;
  onPress?: () => void;
  variant?: 'grid' | 'list';
};

function Device({ device, onPress, variant = 'list' }: DeviceProps) {
  const statusColors = {
    online: '#34C759',
    offline: '#8E8E93',
    connecting: '#FF9500',
  };

  const statusText = {
    online: 'Online',
    offline: 'Offline',
    connecting: 'Connecting...',
  };

  if (variant === 'grid') {
    return (
      <PressableScale onPress={onPress} style={styles.gridCard}>
        <View
          style={[
            styles.statusDot,
            { backgroundColor: statusColors[device.status] },
          ]}
        />
        <Text style={styles.gridName} numberOfLines={2}>
          {device.name}
        </Text>
        <Text style={styles.gridType}>{device.type}</Text>
        <Text
          style={[styles.gridStatus, { color: statusColors[device.status] }]}
        >
          {statusText[device.status]}
        </Text>
      </PressableScale>
    );
  }

  return (
    <PressableScale onPress={onPress} style={styles.listItem}>
      <View style={styles.listContent}>
        <View style={styles.listMain}>
          <Text style={styles.listName}>{device.name}</Text>
          <Text style={styles.listType}>{device.type}</Text>
        </View>
        <View style={styles.listStatusContainer}>
          <View
            style={[
              styles.statusDot,
              { backgroundColor: statusColors[device.status] },
            ]}
          />
          <Text
            style={[styles.listStatus, { color: statusColors[device.status] }]}
          >
            {statusText[device.status]}
          </Text>
        </View>
      </View>
      {device.lastSeen && device.status === 'offline' && (
        <Text style={styles.lastSeen}>Last seen: {device.lastSeen}</Text>
      )}
    </PressableScale>
  );
}

const styles = StyleSheet.create({
  // List view styles
  listItem: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
  },
  listContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  listMain: {
    flex: 1,
  },
  listName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
    marginBottom: 4,
  },
  listType: {
    fontSize: 14,
    color: '#8E8E93',
  },
  listStatusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  listStatus: {
    fontSize: 14,
    fontWeight: '500',
  },
  lastSeen: {
    fontSize: 12,
    color: '#8E8E93',
    marginTop: 8,
  },

  // Grid view styles
  gridCard: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    margin: 8,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  gridName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000000',
    textAlign: 'center',
    marginTop: 8,
    marginBottom: 4,
  },
  gridType: {
    fontSize: 12,
    color: '#8E8E93',
    marginBottom: 8,
  },
  gridStatus: {
    fontSize: 12,
    fontWeight: '500',
  },

  // Common styles
  statusDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
});

export default Device;
