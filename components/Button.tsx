// components/Button.tsx
import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { PressableScale } from 'pressto';

type ButtonProps = {
  onPress: () => void;
  title: string;
  variant?: 'primary' | 'danger' | 'secondary';
  size?: 'small' | 'medium' | 'large';
};

export function Button({
  onPress,
  title,
  variant = 'primary',
  size = 'medium',
}: ButtonProps) {
  return (
    <PressableScale
      onPress={onPress}
      style={[styles.button, styles[variant], styles[size]]}
    >
      <Text
        style={[styles.text, styles[`${variant}Text`], styles[`${size}Text`]]}
      >
        {title}
      </Text>
    </PressableScale>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  primary: {
    backgroundColor: '#007AFF',
  },
  danger: {
    backgroundColor: '#FF3B30',
  },
  secondary: {
    backgroundColor: '#8E8E93',
  },
  small: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  medium: {
    paddingHorizontal: 24,
    paddingVertical: 12,
  },
  large: {
    paddingHorizontal: 32,
    paddingVertical: 16,
  },
  text: {
    fontWeight: '600',
  },
  primaryText: {
    color: '#FFFFFF',
  },
  dangerText: {
    color: '#FFFFFF',
  },
  secondaryText: {
    color: '#FFFFFF',
  },
  smallText: {
    fontSize: 14,
  },
  mediumText: {
    fontSize: 16,
  },
  largeText: {
    fontSize: 18,
  },
});
