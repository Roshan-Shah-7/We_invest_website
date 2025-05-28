import React from 'react';
import { CheckCircle } from 'lucide-react';

interface ObjectiveCardProps {
    title: string;
    description: string;
}

const ObjectiveCard: React.FC<ObjectiveCardProps> = ({ title, description }) => {
    return (
        <div className="objective_card bg-white p-6 rounded-xl shadow-md flex flex-col items-start hover:scale-105 
        transition-transform duration-500 ease-in-out">
            <CheckCircle className="text-green-500 mb-4 w-8 h-8" />
            <h3 className="text-xl font-bold mb-2 text-black">{title}</h3>
            <p className="text-gray-600 leading-relaxed">{description}</p>
        </div>
    );
};

export default ObjectiveCard;
