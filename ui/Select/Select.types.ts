import { VariantProps } from "class-variance-authority";
import { selectVariants } from "./Select.styles";
import { InputHTMLAttributes } from "react";

export interface Option {
  label: string;
  value: string;
}

type Select = Omit<InputHTMLAttributes<HTMLSelectElement>, "size">;

type VariantType = VariantProps<typeof selectVariants>;

export interface SelectTextfieldProps extends Select, VariantType {
  label?: string;
  options: Option[];
}
