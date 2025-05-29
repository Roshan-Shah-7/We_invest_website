import React from 'react';

interface DueDiligenceCardProps {
    title: string;
    description: string;
    icon: React.ReactNode;
}

const DueDiligenceCard: React.FC<DueDiligenceCardProps> = ({
    title,
    description,
    icon
}) => (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
        <div className="flex items-start">
            <div className="flex-shrink-0 bg-brand_teal text-white rounded-full p-3 mr-4">
                {icon}
            </div>
            <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
                <p className="text-gray-600">{description}</p>
            </div>
        </div>
    </div>
);

export default DueDiligenceCard;