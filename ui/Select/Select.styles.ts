import { cva } from "class-variance-authority";

export const selectVariants = cva("appearance-none w-full relative", {
  variants: {
    variant: {
      default: "border border-gray-200 rounded-md w-full",
    },
    size: {
      default: "h-[44px] px-4 font-medium text-gray text-md",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});
