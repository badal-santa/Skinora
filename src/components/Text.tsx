import {
  Text as RNText,
  TextInput as RNTextInput,
  type TextInputProps,
  type TextProps,
} from "react-native";
import { fontFamily } from "../theme/fonts";

const base = { fontFamily };

/** Drop-in `Text` that uses the app font. Accepts `className` and `ref`. */
export function Text({ style, ...props }: TextProps) {
  return <RNText {...props} style={[base, style]} />;
}

/** Drop-in `TextInput` that uses the app font. */
export function TextInput({ style, ...props }: TextInputProps) {
  return <RNTextInput {...props} style={[base, style]} />;
}
