import { buttonVariants } from "./Button.styles";
import { VariantProps } from "class-variance-authority";

type Button = React.ButtonHTMLAttributes<HTMLButtonElement>;
type VariantType = VariantProps<typeof buttonVariants>;

export interface ButtonProps extends Button, VariantType {
  asChild?: boolean;
  children: React.ReactNode;
}
