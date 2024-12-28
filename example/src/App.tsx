import { View, StyleSheet } from 'react-native';
import RNSwitchKit from 'rn-switch-kit';

export default function App() {
  const handleChange = (value: boolean) => {
    console.log(value);
  };

  return (
    <View style={styles.container}>
      <RNSwitchKit
        label="test"
        onColor="green"
        offColor="gray"
        initialValue={false}
      />
      <RNSwitchKit
        label="test"
        onColor="blue"
        offColor="red"
        initialValue={true}
        onToggle={(value) => handleChange(value)}
      />
      <RNSwitchKit
        label="test"
        onColor="green"
        offColor="gray"
        initialValue={false}
        labelPosition="right"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
