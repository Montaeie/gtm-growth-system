import { cn } from "@/lib/utils";
import Image from "next/image";

interface LogoProps {
  width?: number;
  height?: number;
  className?: string;
}

export function Logo({ width, height, className }: LogoProps) {
  return (
    <Image
      src="/images/gtm-logo.svg"
      alt="GTM Growth System"
      width={width ?? 80}
      height={height ?? 40}
      className={cn("object-contain dark:invert", className)}
    />
  );
}
