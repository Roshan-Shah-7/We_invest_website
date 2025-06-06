"use client";

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react"
import { colors } from "@/data/aboutData"
import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ContactCtaSection = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const introTitleRef = useRef<HTMLHeadingElement>(null);
    const introParagraphRef = useRef<HTMLParagraphElement>(null);
    const contactItemsRef = useRef<Array<HTMLDivElement | null>>([]);
    const cardRef = useRef<HTMLDivElement>(null);
    const taglineRef = useRef<HTMLParagraphElement>(null);

    useEffect(() => {
        if (sectionRef.current) {
            // Intro text animation
            gsap.fromTo(
                [introTitleRef.current, introParagraphRef.current],
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

            // Contact items animation
            gsap.fromTo(
                contactItemsRef.current,
                { opacity: 0, x: -50 },
                {
                    opacity: 1,
                    x: 0,
                    duration: 0.8,
                    stagger: 0.1,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top 60%',
                        toggleActions: 'play none none none',
                    },
                }
            );

            // Card animation
            gsap.fromTo(
                cardRef.current,
                { opacity: 0, scale: 0.9 },
                {
                    opacity: 1,
                    scale: 1,
                    duration: 0.8,
                    ease: 'back.out(1.7)',
                    scrollTrigger: {
                        trigger: cardRef.current,
                        start: 'top 80%',
                        toggleActions: 'play none none none',
                    },
                }
            );

            // Tagline animation
            gsap.fromTo(
                taglineRef.current,
                { opacity: 0, y: 20 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: taglineRef.current,
                        start: 'top 90%',
                        toggleActions: 'play none none none',
                    },
                }
            );
        }
    }, []);

    return (
        <section ref={sectionRef} className="py-24 px-4 relative overflow-hidden" style={{ backgroundColor: colors.brand_teal }}>
            {/* Background Elements */}
            <div className="absolute top-20 left-10 w-32 h-32 bg-[#00C853]/20 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#00695C]/20 rounded-full blur-xl animate-pulse delay-1000"></div>

            <div className="container mx-auto max-w-6xl relative z-10">
                <div className="text-center mb-16">
                    <h2 ref={introTitleRef} className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Transform Your Vision?</h2>
                    <p ref={introParagraphRef} className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
                        Connect with us to explore how We Invest can support your entrepreneurial journey. Let's build the future
                        together.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="text-white">
                        <h3 className="text-2xl font-bold mb-8">Get in Touch</h3>
                        <div className="space-y-6">
                            <div className="flex items-center space-x-4 group" ref={el => { contactItemsRef.current[0] = el; }}>
                                <div className="bg-white/20 rounded-lg p-3 group-hover:bg-white/30 transition-colors">
                                    <Mail className="h-6 w-6 text-white" />
                                </div>
                                <div>
                                    <div className="text-white/80 text-sm">Email</div>
                                    <div className="text-white font-medium">investwe3@gmail.com</div>
                                </div>
                            </div>
                            <div className="flex items-center space-x-4 group" ref={el => { contactItemsRef.current[1] = el; }}>
                                <div className="bg-white/20 rounded-lg p-3 group-hover:bg-white/30 transition-colors">
                                    <Phone className="h-6 w-6 text-white" />
                                </div>
                                <div>
                                    <div className="text-white/80 text-sm">Phone</div>
                                    <div className="text-white font-medium">+977-9828240210</div>
                                    <div className="text-white font-medium">+977-9851408600</div>
                                </div>
                            </div>
                            <div className="flex items-center space-x-4 group" ref={el => { contactItemsRef.current[2] = el; }}>
                                <div className="bg-white/20 rounded-lg p-3 group-hover:bg-white/30 transition-colors">
                                    <MapPin className="h-6 w-6 text-white" />
                                </div>
                                <div>
                                    <div className="text-white/80 text-sm">Address</div>
                                    <div className="text-white font-medium">Bishalnagar, Kathmandu 44600, Nepal</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div ref={cardRef}>
                        <Card className="border-0 shadow-2xl bg-white">
                            <CardContent className="p-8">
                                <h4 className="text-2xl font-bold text-[#333333] mb-6 text-center">Start Your Journey</h4>
                                <p className="text-[#666666] mb-8 text-center">
                                    Ready to take your venture to the next level? We'd love to hear from you.
                                </p>
                                <div className="space-y-4">
                                    <Link href={'/contact'}>
                                        <Button
                                            size="lg"
                                            className="w-full bg-[#00C853] hover:bg-[#00B248] text-white font-semibold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                                        >
                                            Schedule a Consultation <ArrowRight className="ml-2 h-5 w-5" />
                                        </Button>
                                    </Link>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>

                <div className="text-center mt-16">
                    <p ref={taglineRef} className="text-white/90 text-lg font-medium">
                        Join us at We Invest, where your vision meets our expertise.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default ContactCtaSection;
