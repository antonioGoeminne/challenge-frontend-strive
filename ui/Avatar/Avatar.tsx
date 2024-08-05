import * as RadixAvatar from "@radix-ui/react-avatar";
import { cn } from "../lib/cn";
import { avatarVariants } from "./Avatar.styles";
import { AvatarProps } from "./Avatar.types";

export const Avatar: React.FC<AvatarProps> = ({
  size,
  variant,
  className,
  src,
  alt,
  ...props
}) => {
  return (
    <RadixAvatar.Root
      data-testid="avatar"
      className={cn(avatarVariants({ size, variant, className }))}
      {...props}
    >
      <RadixAvatar.Image
        className="h-full w-full rounded-[inherit] object-cover"
        src={src}
        alt={alt}
      />
      <RadixAvatar.Fallback
        className="text-violet11 leading-1 flex h-full w-full items-center justify-center bg-white text-[15px] font-medium"
        delayMs={600}
      >
        {alt}
      </RadixAvatar.Fallback>
    </RadixAvatar.Root>
  );
};
