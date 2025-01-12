# rn-switch-kit

rn-switch-kit is a customizable React Native switch component, designed for seamless integration and modern UI needs.


<img width="196" alt="Screenshot 2025-01-12 at 21 47 04" src="https://github.com/user-attachments/assets/07ab2178-a19e-49d4-85da-859f93b8bac0" />


## Installation

```sh
npm install rn-switch-kit
```

## Usage


```js
import RNSwitchKit from 'rn-switch-kit';

// ...

  const [status1, setStatus1] = useState(true);
  const handleChange1 = (value: boolean) => {
    setStatus1(value);
  };

// ...

      <Text>test 1: {status1 ? 'True' : 'False'}</Text>
      <RNSwitchKit
        label="test 1"
        onColor="green"
        offColor="gray"
        initialValue={status1}
        onToggle={(value) => handleChange1(value)}
      />

// ...
      <RNSwitchKit onColor="#f205c3" offColor="red" initialValue={status1} />

```

## Props

| Name            | Type                   | Default     | Description                                                                                 |
|-----------------|------------------------|-------------|---------------------------------------------------------------------------------------------|
| `label`         | `string`               | `undefined` | Optional label displayed next to the switch.                                               |
| `onColor`       | `string`               | `#4caf50`   | Background color of the switch when it is in the "on" state.                               |
| `offColor`      | `string`               | `#ccc`      | Background color of the switch when it is in the "off" state.                              |
| `thumbColor`    | `string`               | `#fff`      | Color of the switch thumb.                                                                 |
| `initialValue`  | `boolean`              | `false`     | Initial state of the switch (`true` for "on", `false` for "off").                          |
| `style`         | `StyleProp<ViewStyle>` | `undefined` | Custom styles for the switch container.                                                   |
| `labelStyle`    | `StyleProp<TextStyle>` | `undefined` | Custom styles for the label text.                                                         |
| `labelPosition` | `'left' | 'right'`      | `'left'`    | Position of the label relative to the switch.                                              |
| `onToggle`      | `(value: boolean) => void` | `undefined` | Callback function invoked when the switch is toggled. Receives the new state as a parameter. |
| `disabled`      | `boolean`              | `false`     | Disables the switch when set to `true`.                                                   |
| `width`         | `number`               | `100`       | Width of the container. If no `label` is provided, the width defaults to the switch size (`50`). |

---

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
