import React from 'react';

interface SectionHeaderProps {
    title: string;
    subtitle?: string;
    color?: 'teal' | 'white';
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
    title,
    subtitle,
    color = 'teal'
}) => {
    const textColor = color === 'teal' ? 'text-brand_teal' : 'text-white';

    return (
        <div className="text-center mb-12">
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${textColor}`}>
                {title}
            </h2>
            {subtitle && (
                <p className={`text-lg max-w-3xl mx-auto ${color === 'teal' ? 'text-gray-600' : 'text-gray-300'
                    }`}>
                    {subtitle}
                </p>
            )}
        </div>
    );
};

export default SectionHeader;