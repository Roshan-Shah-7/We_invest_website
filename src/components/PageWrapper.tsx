'use client';

import React, { useEffect, useRef } from 'react';
import { useLoading } from '@/contexts/LoadingContext';
import { gsap } from 'gsap';

const PageWrapper = ({ children }: { children: React.ReactNode }) => {
    const { isAppLoading } = useLoading();
    const wrapperRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (wrapperRef.current) {
            if (isAppLoading) {
                gsap.set(wrapperRef.current, { opacity: 0 });
            } else {
                gsap.to(wrapperRef.current, {
                    opacity: 1,
                    duration: 0.4, 
                    delay: 0.05, 
                });
            }
        }
    }, [isAppLoading]);

    return (
        <div ref={wrapperRef} style={{ opacity: 0 }}>
            {children}
        </div>
    );
};

export default PageWrapper;
