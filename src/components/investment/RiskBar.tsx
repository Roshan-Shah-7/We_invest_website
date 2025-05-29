import React from 'react';

interface RiskBarProps {
    label: string;
    color: string;
    percentage: number;
}

const RiskBar: React.FC<RiskBarProps> = ({ label, color, percentage }) => (
    <div className="flex items-center mb-4 last:mb-0">
        <div className="w-1/3 mr-4 text-right text-gray-200">{label}</div>
        <div className="relative w-2/3 h-4 bg-gray-700 rounded-full overflow-hidden">
            <div
                className={`absolute top-0 left-0 h-full ${color} transition-all duration-1000 ease-out`}
                style={{ width: `${percentage}%` }}
            ></div>
        </div>
    </div>
);

export default RiskBar;