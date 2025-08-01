import { HTMLAttributes } from "react";
import { cva } from "class-variance-authority";
import Image from "next/image";

const classes = cva('border h-12 rounded-md px-6 font-medium flex items-center gap-3', {
  variants: {
    variant: {
      primary: 'bg-[#1A1A1A] text-white border-[#464646] hover:bg-[#2A2A2A] hover:border-[#666666] cursor-pointer transition-colors duration-200',
      secondary: 'border-white',
      'wear-filter': 'px-3 py-2 rounded-md text-md font-regular transition-all duration-200 border border-[#464646] bg-[#1E1E1E] hover:bg-[#2A2A2A]',
    },
  },
});

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  variant: "primary" | "secondary" | "wear-filter";
  icon?: string;
  iconAlt?: string;
  selected?: boolean;
  customColor?: string;
}

export default function Button({ 
  variant, 
  children, 
  icon, 
  iconAlt, 
  selected = false,
  customColor,
  className,
  style,
  ...props 
}: ButtonProps) {
  const baseClasses = classes({ variant });
  
  // For wear-filter variant, apply conditional styling
  let finalClasses = baseClasses;
  let finalStyle = style;
  
  if (variant === 'wear-filter') {
    finalClasses = `${baseClasses} ${selected 
      ? 'border-opacity-100' 
      : 'border-opacity-50 text-gray-400'
    }`;
    
    if (selected && customColor) {
      finalStyle = {
        ...style,
        color: customColor,
        borderColor: customColor,
      };
    }
  }

  return (
    <button className={`${finalClasses} ${className || ''}`} style={finalStyle} {...props}>
      {icon && (
        <Image src={icon} alt={iconAlt || "Icon"} width={25} height={25} />
      )}
      {children}
    </button>
  );
} 