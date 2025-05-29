import React from 'react';
import { cn } from "@/lib/utils";

interface NumberedBadgeProps {
  number: string;
  color: string;
  className?: string;
}

const NumberedBadge: React.FC<NumberedBadgeProps> = ({ number, color, className }) => {
  return (
    <span
      className={cn(
        "w-10 h-10 rounded-full flex items-center justify-center",
        className
      )}
      style={{ backgroundColor: color }}
    >
      <span className="text-white text-lg font-bold">{number}</span>
    </span>
  );
};

export default NumberedBadge;
