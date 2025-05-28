'use client'

import React, { useEffect } from 'react';
import Image from 'next/image';
import Building from "@/assets/about/building.jpg"
import Empowerment from '@/assets/about/empowerment.svg';
import Integrity from '@/assets/about/integrity.svg';
import Growth from '@/assets/about/growth.svg';
import MissionCard from '@/components/MissionCard';
import TeamMemberCard from '@/components/TeamMemberCard'; // Import TeamMemberCard
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import MarketOverview from '@/components/MarketOverview';
import OurStorySection from '@/components/OurStorySection';

gsap.registerPlugin(ScrollTrigger);


const About = () => {
    const missionData = [
        {
            icon: Empowerment,
            title: 'Empowerment',
            description: 'We empower individuals and businesses to take control of their financial future through education and strategic investment.',
        },
        {
            icon: Integrity,
            title: 'Integrity',
            description: 'We uphold the highest standards of integrity in all our interactions, ensuring transparency and trust with our clients.',
        },
        {
            icon: Growth,
            title: 'Innovation', // Assuming 'Growth' icon is for 'Innovation' based on previous context
            description: 'We embrace innovation and leverage cutting-edge technology to provide our clients with the best investment solutions available.',
        },
    ];

    const teamData = [
        {
            name: 'Keshab Jaisi',
            role: 'Talent Scout',
            badge: 'Co-Founder',
            description: 'Our talent scout, Keshab has an exceptional ability to identify promising ventures and forge strategic partnerships. His vision and expertise help turn bold ideas into reality.',
            imageUrl: '/assets/team/keshab.jpg',
        },
        {
            name: 'Laxmi Dangol',
            role: 'Operational Efficiency Master',
            badge: 'Operations Lead',
            description: 'A master of operational efficiency, Laxmi specializes in optimizing processes and driving financial performance. Her expertise ensures our partners achieve sustainable growth.',
            imageUrl: '/assets/team/laxmi.jpg',
        },
        {
            name: 'Bipendra Chudal',
            role: 'Analytical Expert',
            badge: 'Advisor',
            description: 'Our analytical expert, Bipendra uncovers critical insights from data to guide our investment strategies. His sharp mind keeps us ahead in an ever-changing market.',
            imageUrl: '/assets/team/bipendra.jpg',
        },
        {
            name: 'Dr. Banuram Niraula',
            role: 'Seasoned Economist',
            badge: 'Chief Economist',
            description: 'A seasoned economist with experience at the World Bank, Dr. Niraula provides strategic foresight and deep insights into global economic trends, shaping our investment decisions.',
            imageUrl: '/assets/team/banuram.jpg',
        },
        {
            name: 'Vijay Chhetri',
            role: 'Finance Head',
            badge: 'Finance Director',
            description: 'Our Finance Head and former expert at Nepal Rastra Bank, Vijay oversees our financial strategies with precision, ensuring a strong foundation for all our ventures.',
            imageUrl: '/assets/team/vijay.jpg',
        },
    ];


    return (
        <main className="relative w-full">
            <div className='max-w-[80%] mx-auto flex flex-col items-center gap-8'>
                {/* Hero Section */}
                <section className="hero h-screen relative flex items-center">
                    <Image src={Building} alt='building'
                        className='hero_image h-[80vh] rounded-[2rem]' />

                    {/* Overlay */}
                    <div className="absolute h-[80vh] inset-0 rounded-[2rem] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full bg-black/40 z-0" />

                    {/* Content */}
                    <div className="absolute bottom-20 left-10  z-10 flex flex-col justify-center text-white text-start p-8 mt-[20rem]">
                        <h1 className="text-4xl md:text-6xl font-bold mb-4">About Us</h1>
                        <p className="text-lg md:text-xl max-w-3xl mb-8">
                            At We Invest, we are dedicated to helping our clients achieve their
                            financial goals through personalized investment strategies and expert guidance.
                            Our team of experienced professionals is committed to providing exceptional service and delivering long-term value.
                        </p>
                    </div>
                </section>

                {/* Our Mission */}
                <section className="our_mission py-16">
                    <h1 className="text-4xl font-bold mb-12 text-center">Our Mission</h1>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[80%] m-auto'>
                        {missionData.map((mission, index) => (
                            <MissionCard
                                key={index}
                                icon={mission.icon}
                                title={mission.title}
                                description={mission.description}
                            />
                        ))}
                    </div>
                </section>

                {/* Our Story */}
                <OurStorySection />

                {/* Our Team */}
                <section className="our_team py-16 w-full">
                    <h1 className="text-4xl font-bold mb-12 text-center">Meet Our Team</h1>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[80%] m-auto'>
                        {teamData.map((member, index) => (
                            <TeamMemberCard
                                key={index}
                                name={member.name}
                                role={member.role}
                                description={member.description}
                                imageUrl={member.imageUrl}
                                badge={member.badge}
                            />
                        ))}
                    </div>
                </section>

                {/* Market Overview */}
                <MarketOverview />
            </div>
        </main >
    );
};

export default About;
