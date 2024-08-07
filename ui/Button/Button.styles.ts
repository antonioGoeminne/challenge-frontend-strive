import { cva } from "class-variance-authority";
import clsx from "clsx";

export const buttonVariants = cva(
  clsx(
    `inline-flex items-center roboto justify-center`,
    `whitespace-nowrap rounded-[11px] ring-offset-background`,
    `transition-colors disabled:pointer-events-none`,
    `disabled:opacity-50 transition all ease-in-out`
  ),
  {
    variants: {
      variant: {
        default: clsx(
          `bg-primary text-white text-md hover:bg-primary-darker-100 active:bg-primary-darker-200`,
          ` focus:border-2 focus:border-primary-darker-200 disabled:bg-primary-disabled`
        ),
      },
      size: {
        default: "h-[35px] px-2 py-3 ",
        md: "h-[45px] px-12 py-3  font-medium text-xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);
