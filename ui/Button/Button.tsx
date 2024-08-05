// your-button.jsx
import { Slot, Slottable } from "@radix-ui/react-slot";
import { ButtonProps } from "./Button.types";
import { buttonVariants } from "./Button.styles";
import { cn } from "lib/cn";

export const Button: React.FC<ButtonProps> = ({
  asChild = false,
  children,
  size,
  variant,
  className,
  ...props
}) => {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      <Slottable>{children}</Slottable>
    </Comp>
  );
};
