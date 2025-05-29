// src/contexts/LoadingContext.tsx
'use client';

import React, { createContext, useContext, useState, ReactNode, Dispatch, SetStateAction } from 'react';

interface LoadingContextType {
    isAppLoading: boolean;
    setAppLoading: Dispatch<SetStateAction<boolean>>; // Allow direct state setting
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

export const useLoading = () => {
    const context = useContext(LoadingContext);
    if (!context) {
        throw new Error('useLoading must be used within a LoadingProvider');
    }
    return context;
};

export const LoadingProvider = ({ children }: { children: ReactNode }) => {
    const [isAppLoading, setAppLoading] = useState(true);
    console.log('[LoadingContext] Provider: isAppLoading =', isAppLoading);

    return (
        <LoadingContext.Provider value={{ isAppLoading, setAppLoading }}>
            {children}
        </LoadingContext.Provider>
    );
};