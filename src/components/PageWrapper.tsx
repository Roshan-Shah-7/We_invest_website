'use client';

import React, { useRef } from 'react';

const PageWrapper = ({ children }: { children: React.ReactNode }) => {
    const wrapperRef = useRef<HTMLDivElement>(null);

    return (
        <div ref={wrapperRef}>
            {children}
        </div>
    );
};

export default PageWrapper;
