/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  Animated,
  type StyleProp,
  type ViewStyle,
  type TextStyle,
} from 'react-native';

interface RNSwitchKitProps {
  label?: string;
  onColor?: string;
  offColor?: string;
  thumbColor?: string;
  initialValue?: boolean;
  style?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
  labelPosition?: 'left' | 'right';
  onToggle?: (value: boolean) => void;
  disabled?: boolean;
  width?: number;
}

const RNSwitchKit: React.FC<RNSwitchKitProps> = ({
  label,
  onColor = '#4caf50',
  offColor = '#ccc',
  thumbColor = '#fff',
  initialValue = false,
  style,
  labelStyle,
  labelPosition = 'left',
  onToggle,
  disabled = false,
  width = 100,
}) => {
  const [isEnabled, setIsEnabled] = useState<boolean>(initialValue);
  const animatedValue = useRef(
    new Animated.Value(initialValue ? 26 : 2)
  ).current;

  useEffect(() => {
    setIsEnabled(initialValue);

    Animated.timing(animatedValue, {
      toValue: initialValue ? 27 : 2,
      duration: 200,
      useNativeDriver: false,
    }).start();
  }, [initialValue]);

  const toggleSwitch = () => {
    if (disabled) return;
    const newValue = !isEnabled;
    setIsEnabled(newValue);

    Animated.timing(animatedValue, {
      toValue: newValue ? 27 : 2,
      duration: 200,
      useNativeDriver: false,
    }).start();

    if (onToggle) {
      onToggle(newValue);
    }
  };

  const calculatedWidth = label ? width : 50;

  return (
    <View style={[styles.container, { width: calculatedWidth }, style]}>
      {label && labelPosition === 'left' && (
        <Text style={[styles.label, labelStyle]}>{label}</Text>
      )}
      <TouchableOpacity
        style={[
          styles.switch,
          {
            backgroundColor: disabled
              ? offColor
              : isEnabled
                ? onColor
                : offColor,
          },
          disabled && styles.disabledSwitch,
        ]}
        onPress={toggleSwitch}
        activeOpacity={1}
        disabled={disabled}
        accessible={true}
        accessibilityRole="switch"
        accessibilityLabel={label}
        accessibilityState={{ checked: isEnabled, disabled }}
      >
        <Animated.View
          style={[
            styles.thumb,
            {
              backgroundColor: thumbColor,
              transform: [{ translateX: animatedValue }],
            },
          ]}
        />
      </TouchableOpacity>
      {label && labelPosition === 'right' && (
        <Text style={[styles.label, labelStyle]}>{label}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 0,
  },
  label: {
    fontSize: 16,
    marginRight: 10,
  },
  switch: {
    width: 50,
    height: 25,
    borderRadius: 13,
    padding: 2,
    justifyContent: 'center',
  },
  thumb: {
    width: 21,
    height: 21,
    borderRadius: 11,
    position: 'absolute',
  },
  disabledSwitch: {
    opacity: 0.5,
  },
});

export default RNSwitchKit;
