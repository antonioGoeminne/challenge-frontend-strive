import { InputHTMLAttributes } from "react";
import { textFieldVariants } from "./Textfield.styles";
import { VariantProps } from "class-variance-authority";

export type TextFieldTypes = "text";

type Input = Omit<InputHTMLAttributes<HTMLInputElement>, "size">;
type VariantType = VariantProps<typeof textFieldVariants>;

export interface TextfieldProps extends Input, VariantType {
  label?: string;
  type?: TextFieldTypes;
}
