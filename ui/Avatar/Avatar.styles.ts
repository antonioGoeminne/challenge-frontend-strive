import { cva } from "class-variance-authority";

export const avatarVariants = cva(
  `inline-flex border p-1 border-primary select-none items-center justify-center overflow-hidden rounded-full align-middle`,
  {
    variants: {
      variant: {},
      size: {
        default: "h-[155px] w-[155px]",
        md: "h-[175px] w-[175px]",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
);
