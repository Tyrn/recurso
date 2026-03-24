// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import useDevice from '@/storage/useDevice';
// import { Button } from '@/components/Button';
//
// function Counter() {
//   const { count, increment, reset } = useDevice();
//
//   return (
//     <View style={styles.container}>
//       <Text style={styles.count}>{count}</Text>
//       <View style={styles.buttonContainer}>
//         <Button onPress={increment} title="+" variant="primary" size="small" />
//         <Button onPress={reset} title="Reset" variant="danger" size="small" />
//       </View>
//     </View>
//   );
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//   },
//   count: {
//     fontSize: 48,
//     fontWeight: 'bold',
//     marginBottom: 30,
//   },
//   buttonContainer: {
//     flexDirection: 'row',
//     gap: 16,
//   },
// });
//
// export default Counter;

// Updated Counter.tsx with deviceId prop
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import useDeviceStore from '@/storage/useDevice';
import { Button } from '@/components/Button';

type CounterProps = {
  deviceId: string;
};

function Counter({ deviceId }: CounterProps) {
  const count = useDeviceStore((state) => state.getCount(deviceId));
  const increment = () => useDeviceStore.getState().increment(deviceId);
  const reset = () => useDeviceStore.getState().reset(deviceId);

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
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  count: {
    fontSize: 48,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 16,
  },
});

export default Counter;
