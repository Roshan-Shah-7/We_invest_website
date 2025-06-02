import React from 'react';

interface AnimatedHeadlineProps {
    text: string;
    style: string;
    isExpanded?: boolean;
    onToggleExpansion?: () => void;
}

const AnimatedHeadline: React.FC<AnimatedHeadlineProps> = ({
    text,
    style,
    isExpanded,
    onToggleExpansion
}) => {
    return (
        <h1
            className={`mb-6 leading-tight ${style} ${isExpanded ? 'expanded' : ''}`}
            onClick={onToggleExpansion}
        >
            {text}
        </h1>
    );
};

export default AnimatedHeadline;
