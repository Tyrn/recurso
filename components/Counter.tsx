import React from 'react';
import { View, Text, Pressable } from 'react-native';
import useDevice from '@/storage/useDevice';

function Counter() {
  const { count, increment, reset } = useDevice();

  return (
    <View>
      <Text>{count}</Text>
      <Pressable onPress={increment}>
        <Text>+</Text>
      </Pressable>
      <Pressable onPress={reset}>
        <Text>Reset</Text>
      </Pressable>
    </View>
  );
}

export default Counter;
