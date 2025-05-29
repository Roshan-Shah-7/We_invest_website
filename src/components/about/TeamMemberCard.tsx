import React from 'react';
import Image from 'next/image';

interface TeamMemberCardProps {
    name: string;
    role: string;
    description: string;
    imageUrl?: string;
    badge?: string;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({
    name,
    role,
    description,
    imageUrl,
    badge,
}) => {
    return (
        <div className="relative p-8 rounded-2xl backdrop-blur-md bg-white/30 dark:bg-white/10 border
         border-brand_teal/30 shadow-xl flex flex-col items-center text-center transform transition duration-500 
         hover:-translate-y-1 hover:shadow-2xl group max-w-xs mx-auto">
            {/* Optional badge */}
            {badge && (
                <div className="absolute top-3 left-2 text-black text-xs px-2 py-1 rounded-full shadow-md">
                    {badge}
                </div>
            )}

            {/* Avatar with animated gradient border */}
            <div className="relative mb-4">
                <div className="w-32 h-32 rounded-full p-1 bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 animate-gradient-x">
                    <div className="w-full h-full bg-white dark:bg-gray-800 rounded-full flex items-center justify-center overflow-hidden">
                        {imageUrl ? (
                            <Image
                                src={imageUrl}
                                alt={name}
                                width={120}
                                height={120}
                                className="rounded-full object-cover"
                            />
                        ) : (
                            <span className="text-gray-600 dark:text-gray-300 text-5xl font-extrabold">
                                {name.charAt(0).toUpperCase()}
                            </span>
                        )}
                    </div>
                </div>
            </div>

            {/* Name */}
            <h2 className="text-xl font-bold text-brand_teal mb-1">
                {name}
            </h2>

            {/* Role with tooltip */}
            <h3
                className="text-sm text-black mb-2 font-semibold"
                title={`Role: ${role}`}
            >
                {role}
            </h3>

            {/* Description */}
            <p className="text-gray-700 dark:text-gray-600 text-sm leading-relaxed">
                {description}
            </p>
        </div>
    );
};

export default TeamMemberCard;
