import { cn } from "ui/lib/cn";
import { TextfieldProps, TextFieldTypes } from "./Textfield.types";
import { textFieldVariants } from "./Textfield.styles";

const DefaultTextfield: React.FC<TextfieldProps> = ({ ...props }) => {
  // @ts-expect-error strange error with size
  return <input size="default" {...props} />;
};

const textFieldTypes: Record<TextFieldTypes, React.FC<TextfieldProps>> = {
  text: DefaultTextfield,
  email: DefaultTextfield,
  date: DefaultTextfield,
};

export const Textfield: React.FC<TextfieldProps> = ({
  variant,
  size,
  type = "text",
  className,
  label,
  ...props
}) => {
  const TextFieldComponent = textFieldTypes[type] || DefaultTextfield;

  return (
    <div className="flex flex-col gap-1 w-full">
      <p className="font-bold">{label}</p>
      <TextFieldComponent
        type={type}
        className={cn(textFieldVariants({ variant, size, className }))}
        {...props}
      />
    </div>
  );
};
