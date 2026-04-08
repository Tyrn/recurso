// components/Counter.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import useCounterStore from '@/storage/useCounterStore';
import { Button } from '@/components/Button';

type CounterProps = {
  deviceId: string;
};

function Counter({ deviceId }: CounterProps) {
  const count = useCounterStore((state) => state.getCount(deviceId));
  const increment = () => useCounterStore.getState().increment(deviceId);
  const reset = () => useCounterStore.getState().reset(deviceId);

  return (
    <View style={styles.container}>
      <Text style={styles.count}>{count}</Text>
      <View style={styles.buttonContainer}>
        <Button onPress={increment} title="+" variant="primary" size="small" />
        <Button onPress={reset} title="Reset" variant="danger" size="small" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 0,
  },
  count: {
    fontSize: 42,
    fontWeight: 'bold',
    marginRight: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 16,
  },
});

export default Counter;
