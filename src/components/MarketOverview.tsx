// components/MarketOverview.tsx
'use client';

import React from 'react';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip as RechartsTooltip,
    ResponsiveContainer,
    BarChart,
    Bar,
    Legend,
} from 'recharts';
// import Badge  from '@/components/ui/Badge';

const globalMarketData = [
    { month: 'Jan', value: 2 },
    { month: 'Feb', value: 1.5 },
    { month: 'Mar', value: 3 },
    { month: 'Apr', value: 2.5 },
    { month: 'May', value: 5 },
    { month: 'Jun', value: 1.8 },
    { month: 'Jul', value: 4.8 },
];

const sectorPerformanceData = [
    { name: 'Tech', value: 2.5 },
    { name: 'Healthcare', value: 1.8 },
    { name: 'Finance', value: 0.9 },
    { name: 'Energy', value: 1.6 },
    { name: 'Consumer', value: 3.9 },
];

const MarketOverview: React.FC = () => {
    return (
        <section className="py-16 px-6 md:px-12 bg-[#f9fdf9] text-gray-800 w-full rounded-[8rem] mb-10">
            <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center">Market Overview</h2>
            <div className="grid md:grid-cols-2 gap-8">
                {/* Global Market Trends */}
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                    <h3 className="text-lg font-semibold mb-2">Global Market Trends</h3>
                    <p className="text-3xl font-bold text-green-600">+7.5%</p>
                    <p className="text-sm mb-4">
                        YTD <span className="text-green-500">+1.2%</span>
                    </p>
                    <ResponsiveContainer width="100%" height={300}>
                        <LineChart data={globalMarketData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="month" />
                            <YAxis />
                            <RechartsTooltip />
                            <Line type="monotone" dataKey="value" stroke="#22c55e" strokeWidth={2} />
                        </LineChart>
                    </ResponsiveContainer>
                </div>

                {/* Sector Performance */}
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                    <h3 className="text-lg font-semibold mb-2">Sector Performance</h3>
                    <p className="text-3xl font-bold text-green-600">+4.2%</p>
                    <p className="text-sm mb-4">
                        Q2 2024 <span className="text-red-500">-0.5%</span>
                    </p>
                    <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={sectorPerformanceData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <RechartsTooltip />
                            <Legend />
                            <Bar dataKey="value" fill="#60a5fa" radius={[4, 4, 0, 0]} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>

            {/* Description */}
            <div className="mt-10 text-gray-700 max-w-7xl">
                <p>
                    At We Invest, we operate at the intersection of innovation
                    and opportunity. Our investment funds are tailored to support a
                    wide range of industries, including technology, healthcare,
                    renewable energy, and the arts. By combining deep market knowledge with a
                    client-centric approach, we help entrepreneurs navigate the complexities
                    of the financial landscape and achieve sustainable growth.
                </p>
            </div>
        </section>
    );
};

export default MarketOverview;
