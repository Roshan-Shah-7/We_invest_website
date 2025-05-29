'use client';

import React, { useRef } from 'react';
import { gsap } from 'gsap';

const PageWrapper = ({ children }: { children: React.ReactNode }) => {
    const wrapperRef = useRef<HTMLDivElement>(null);

    return (
        <div ref={wrapperRef}>
            {children}
        </div>
    );
};

export default PageWrapper;
