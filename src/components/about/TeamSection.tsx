"use client";

import React, { useRef, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/Badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { teamMembers } from "@/data/aboutData"
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const TeamSection = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const introBadgeRef = useRef<HTMLDivElement>(null);
    const introTitleRef = useRef<HTMLHeadingElement>(null);
    const introParagraphRef = useRef<HTMLParagraphElement>(null);
    const cardRefs = useRef<Array<HTMLDivElement | null>>([]);

    useEffect(() => {
        if (sectionRef.current) {
            // Intro text animation
            gsap.fromTo(
                [introBadgeRef.current, introTitleRef.current, introParagraphRef.current],
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    stagger: 0.15,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top 80%',
                        toggleActions: 'play none none none',
                    },
                }
            );

            gsap.fromTo(
                cardRefs.current,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    stagger: 0.15,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top 60%',
                        toggleActions: 'play none none none',
                    },
                }
            );
        }
    }, []);

    return (
        <section ref={sectionRef} className="py-24 px-4 bg-white">
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-16">
                    <div ref={introBadgeRef} className="inline-flex items-center px-3 py-1 bg-[#E8F5E9] rounded-full mb-6">
                        <span className="text-[#00C853] text-sm font-medium">Our Team</span>
                    </div>
                    <h2 ref={introTitleRef} className="text-4xl md:text-5xl font-bold text-[#333333] mb-6">Meet Our Visionaries</h2>
                    <p ref={introParagraphRef} className="text-xl text-[#666666] max-w-3xl mx-auto">
                        A diverse group of innovators, strategists, and industry experts united by a shared mission to reshape the
                        entrepreneurial landscape.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {teamMembers.map((member, index) => (
                        <div
                            key={index}
                            ref={el => { cardRefs.current[index] = el; }}
                            className={`group ${index === 1 || index === 4 ? "lg:mt-10" : ""} ${index === 2 || index === 5 ? "lg:mt-20" : ""}`}
                        >
                            <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white overflow-hidden">
                                <div className="relative">
                                    <div className={`absolute inset-0 bg-gradient-to-br from-[${member.bgColorFrom}] to-[${member.bgColorTo}] opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                                    <CardContent className="p-8 text-center relative">
                                        <div className="relative mb-6">
                                            <Avatar className="w-24 h-24 mx-auto border-4 border-white shadow-lg">
                                                {/* Removed AvatarImage to always show initials */}
                                                <AvatarFallback className={`bg-gradient-to-br from-[${member.bgColorFrom}] to-[${member.bgColorTo}] text-brand_teal text-xl font-bold flex items-center justify-center`}>
                                                    {member.avatarFallback}
                                                </AvatarFallback>
                                            </Avatar>
                                            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                                                <Badge className={`bg-[${member.badgeColor}] text-white border-0 px-3 py-1`}>
                                                    {member.role}
                                                </Badge>
                                            </div>
                                        </div>
                                        <h3 className="text-xl font-bold text-[#333333] mb-2">{member.name}</h3>
                                        <p className="text-[#666666] leading-relaxed">
                                            {member.description}
                                        </p>
                                    </CardContent>
                                </div>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default TeamSection;
