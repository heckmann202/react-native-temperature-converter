import { View, TextInput, Text } from "react-native";
import { s } from "./Input.style";

export const Input = ({ defaultValue, onChange, unit }) => {
  return (
    <View style={s.root}>
      <TextInput
        style={s.input}
        maxLength={4}
        placeholder="Type your temperature"
        defaultValue={defaultValue.toString()}
        onChangeText={(text) => onChange(text)}
        inputMode={"numeric"}
      />
      <Text style={s.unit}>{unit}</Text>
    </View>
  );
};
