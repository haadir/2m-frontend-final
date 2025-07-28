import { HTMLAttributes } from "react";
import { cva } from "class-variance-authority";
import Image from "next/image";

const classes = cva('border h-12 rounded-md px-6 font-medium flex items-center gap-3', {
  variants: {
    variant: {
      primary: 'bg-[#1A1A1A] text-white border-[#464646]',
      secondary: 'border-white',
    },
  },
});

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  variant: "primary" | "secondary";
  icon?: string;
  iconAlt?: string;
}

export default function Button({ variant, children, icon, iconAlt, ...props }: ButtonProps) {
  return (
    <button className={classes({ variant })} {...props}>
      {icon && (
        <Image src={icon} alt={iconAlt || "Icon"} width={25} height={25} />
      )}
      {children}
    </button>
  );
} 