import React from 'react';

interface BadgeProps {
  number: string;
  color: string;
}

const Badge: React.FC<BadgeProps> = ({ number, color }) => {
  return (
    <span
      className="w-10 h-10 rounded-full flex items-center justify-center badge"
      style={{ backgroundColor: color }}
    >
      <span className="text-white text-lg font-bold">{number}</span>
    </span>
  );
};

export default Badge;
