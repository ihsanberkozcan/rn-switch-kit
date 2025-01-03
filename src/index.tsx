import React, { useState } from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
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
}) => {
  const [isEnabled, setIsEnabled] = useState<boolean>(initialValue);

  const toggleSwitch = () => {
    const newValue = !isEnabled;
    setIsEnabled(newValue);
    if (onToggle) {
      onToggle(newValue);
    }
  };

  return (
    <View style={[styles.container, style]}>
      {label && labelPosition === 'left' && (
        <Text style={[styles.label, labelStyle]}>{label}</Text>
      )}
      <TouchableOpacity
        style={[
          styles.switch,
          { backgroundColor: isEnabled ? onColor : offColor },
        ]}
        onPress={toggleSwitch}
        activeOpacity={0.8}
      >
        <View
          style={[
            styles.thumb,
            {
              backgroundColor: thumbColor,
              transform: [{ translateX: isEnabled ? 26 : 2 }],
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
    padding: 10,
    width: 200,
  },
  label: {
    fontSize: 16,
    marginRight: 10,
  },
  switch: {
    width: 50,
    height: 26,
    borderRadius: 13,
    padding: 2,
    justifyContent: 'center',
  },
  thumb: {
    width: 22,
    height: 22,
    borderRadius: 11,
    position: 'absolute',
  },
});

export default RNSwitchKit;
