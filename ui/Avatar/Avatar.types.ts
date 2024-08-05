import { VariantProps } from "class-variance-authority";
import { avatarVariants } from "./Avatar.styles";

type VariantType = VariantProps<typeof avatarVariants>;

export interface AvatarProps extends VariantType {
  className?: string;
  src: string;
  alt: string;
}
