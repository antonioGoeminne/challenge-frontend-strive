import { selectVariants } from "./Select.styles";
import { cn } from "ui/lib/cn";
import { SelectTextfieldProps } from "./Select.types";
import { ArrowDownIcon } from "images/icons/ArrowDownIcon";

export const Select: React.FC<SelectTextfieldProps> = ({
  className,
  variant,
  size,
  label,
  options,
  ...props
}) => {
  return (
    <div className="flex flex-col gap-1 w-full">
      <p className="font-bold">{label}</p>
      <div className="flex relative">
        <select
          className={cn(selectVariants({ variant, size, className }))}
          {...props}
        >
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        <div className="absolute top-2 right-2">
          <ArrowDownIcon />
        </div>
      </div>
    </div>
  );
};
