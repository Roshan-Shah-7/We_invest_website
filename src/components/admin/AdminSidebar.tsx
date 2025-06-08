'use client';

import React from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { signOut } from 'next-auth/react';
import { LayoutDashboard, Users, Mail, DollarSign, Home } from 'lucide-react'; // Icons for navigation

interface AdminSidebarProps {
    activeTab: 'investments' | 'contacts' | 'newsletters';
    setActiveTab: (tab: 'investments' | 'contacts' | 'newsletters') => void;
}

export default function AdminSidebar({ activeTab, setActiveTab }: AdminSidebarProps) {
    const router = useRouter();
    const pathname = usePathname();

    const navItems = [
        { id: 'investments', label: 'Investment Forms', icon: DollarSign },
        { id: 'contacts', label: 'Contact Submissions', icon: Users },
        { id: 'newsletters', label: 'Newsletter Subscriptions', icon: Mail },
    ];

    return (
        <div className="w-64 bg-gray-800 text-white flex flex-col h-screen p-4 shadow-lg">
            <div className="text-2xl font-bold mb-8 text-brand_teal">Admin Panel</div>

            <nav className="flex-grow">
                <ul>
                    {navItems.map((item) => {
                        const Icon = item.icon;
                        return (
                            <li key={item.id} className="mb-2">
                                <button
                                    onClick={() => setActiveTab(item.id as 'investments' | 'contacts' | 'newsletters')}
                                    className={`flex items-center w-full py-2 px-4 rounded-md text-left transition-colors duration-200 ${activeTab === item.id ? 'bg-brand_green text-white' : 'hover:bg-gray-700 text-gray-300'
                                        }`}
                                >
                                    <Icon className="mr-3 h-5 w-5" />
                                    {item.label}
                                </button>
                            </li>
                        );
                    })}
                </ul>
            </nav>

            <div className="mt-auto border-t border-gray-700 pt-4">
                <button
                    onClick={() => router.push('/')}
                    className="flex items-center w-full py-2 px-4 rounded-md text-left transition-colors duration-200 hover:bg-gray-700 text-gray-300 mb-2"
                >
                    <Home className="mr-3 h-5 w-5" />
                    Go to Home Page
                </button>
                <button
                    onClick={() => signOut({ callbackUrl: '/admin/login' })}
                    className="flex items-center w-full py-2 px-4 rounded-md text-left transition-colors duration-200 bg-red-700 hover:bg-red-800 text-white"
                >
                    <LayoutDashboard className="mr-3 h-5 w-5" /> {/* Using LayoutDashboard for sign out for now */}
                    Sign Out
                </button>
            </div>
        </div>
    );
}
