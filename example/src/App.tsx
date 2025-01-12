import { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import RNSwitchKit from 'rn-switch-kit';

export default function App() {
  const [status1, setStatus1] = useState(true);
  const handleChange1 = (value: boolean) => {
    setStatus1(value);
  };

  return (
    <View style={styles.container}>
      <Text>test 1: {status1 ? 'True' : 'False'}</Text>
      <RNSwitchKit
        label="test 1"
        onColor="green"
        offColor="gray"
        initialValue={status1}
        onToggle={(value) => handleChange1(value)}
      />

      <RNSwitchKit
        label="test"
        onColor="blue"
        offColor="red"
        initialValue={false}
      />

      <RNSwitchKit onColor="#f205c3" offColor="red" initialValue={false} />

      <RNSwitchKit
        label="test"
        onColor="green"
        offColor="gray"
        initialValue={false}
        labelPosition="right"
      />
      <RNSwitchKit
        label="test"
        onColor="green"
        offColor="gray"
        initialValue={false}
        labelPosition="right"
        disabled
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
  },
});
