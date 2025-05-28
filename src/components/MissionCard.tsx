import React from 'react';
import Image from 'next/image'; // Import Image component

interface MissionCardProps {
    icon: string; // icon will be a URL string
    title: string;
    description: string;
}

const MissionCard: React.FC<MissionCardProps> = ({ icon, title, description }) => {
    return (
        <div className='mission_card bg-white p-6 rounded-lg flex flex-col border border-brand_green/30
        transform transition-transform duration-500 hover:scale-105'>
            <div className="icon mb-4 text-4xl">
                <Image src={icon} alt={title} width={40} height={40} />
            </div>
            <h2 className="text-2xl font-semibold mb-4">{title}</h2>
            <p className="text-gray-700">{description}</p>
        </div>
    );
};

export default MissionCard;
