import React from 'react';
import { View, Text, Pressable } from 'react-native';
import useDevice from '@/storage/useDevice';
import { PressableScale } from 'pressto';

function Counter() {
  const { count, increment, reset } = useDevice();

  return (
    <View>
      <Text>{count}</Text>
      <PressableScale onPress={increment}>
        <Text>+</Text>
      </PressableScale>
      <PressableScale onPress={reset}>
        <Text>Reset</Text>
      </PressableScale>
    </View>
  );
}

export default Counter;
