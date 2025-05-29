import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

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
    const headlineRef = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        const letters = headlineRef.current?.querySelectorAll('span');
        if (!letters) return;

        gsap.fromTo(
            letters,
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                stagger: 0.05,
                duration: 1,
                ease: 'power3.out',
            }
        );
    }, []);

    return (
        <h1
            ref={headlineRef}
            className={`mb-6 leading-tight ${style} ${isExpanded ? 'expanded' : ''}`}
            onClick={onToggleExpansion}
        >
            {text.split(' ').map((word, i) => (
                <span key={i} style={{ display: 'inline-block', marginRight: '0.25em' }}>
                    {word.split('').map((char, j) => (
                        <span key={j} style={{ display: 'inline-block' }}>
                            {char}
                        </span>
                    ))}
                </span>
            ))}
        </h1>
    );
};

export default AnimatedHeadline;
