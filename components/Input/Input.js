import { TextInput } from "react-native";
import { styles } from "./styles";

const Input = ({ style, ...props }) => (
  <TextInput {...props} style={{ ...styles.input }} />
);

export default Input;
