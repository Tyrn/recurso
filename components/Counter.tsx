import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useAtomValue, useSetAtom } from 'jotai';
import {
  countersAtom,
  incrementCounterAtom,
  resetCounterAtom,
} from '@/store/deviceAtoms';
import { Button } from '@/components/Button';

type CounterProps = {
  deviceId: string;
};

function Counter({ deviceId }: CounterProps) {
  // Get the entire counters object, then extract the specific value
  const allCounters = useAtomValue(countersAtom);
  const count = allCounters[deviceId] || 0;

  const increment = useSetAtom(incrementCounterAtom);
  const reset = useSetAtom(resetCounterAtom);

  return (
    <View style={styles.container}>
      <Text style={styles.count}>{count}</Text>
      <View style={styles.buttonContainer}>
        <Button
          onPress={() => increment(deviceId)}
          title="+"
          variant="primary"
          size="small"
        />
        <Button
          onPress={() => reset(deviceId)}
          title="Reset"
          variant="danger"
          size="small"
        />
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
