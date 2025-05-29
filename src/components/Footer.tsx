'use client'

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Twitter, Linkedin, Youtube, Instagram } from 'lucide-react';
import Link from 'next/link'; // Import Link component

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
    const footerRef = useRef<HTMLDivElement>(null);
    const logoRef = useRef<HTMLDivElement>(null);
    const columnsRef = useRef<(HTMLDivElement | null)[]>([]);
    // const ctaButtonRef = useRef<HTMLButtonElement>(null); // Removed ref for CTA button

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Staggered animation for columns
            gsap.fromTo(
                columnsRef.current.filter((col): col is HTMLDivElement => col !== null),
                { opacity: 0, y: 20 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    stagger: 0.2,
                    scrollTrigger: {
                        trigger: footerRef.current,
                        start: 'top 90%',
                        once: true,
                    },
                }
            );

            // Logo animation
            gsap.fromTo(
                logoRef.current,
                { opacity: 0 },
                { opacity: 1, duration: 1, delay: 0.5, scrollTrigger: { trigger: footerRef.current, start: 'top 90%' } }
            );


            // Social icon hover effect
            document.querySelectorAll('.social-icon').forEach(icon => {
                const socialHoverTween = gsap.to(icon, {
                    scale: 1.1,
                    duration: 0.3,
                    paused: true,
                    ease: 'power1.out',
                });
                icon.addEventListener('mouseenter', () => socialHoverTween.play());
                icon.addEventListener('mouseleave', () => socialHoverTween.reverse());
            });
        });

        return () => ctx.revert();
    }, []);

    return (
        <footer ref={footerRef} className="bg-[#F5F7FA] text-black w-full border-t border-border py-16">
            {/* Wavy Divider */}
            <svg className="w-full h-4 fill-background rotate-180" viewBox="0 0 1440 60">
                <path d="M0,30 Q360,0 720,30 T1440,30 V60 H0 Z" />
            </svg>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
                {/* Logo/Tagline */}
                <div ref={logoRef} className="flex justify-center mb-6 opacity-0">
                    <span className="text-xl font-bold text-brand_teal font-poppins">For Visionaries - By Visionaries</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-6 pb-6 border-b border-opacity-20 border-border text-center md:text-left w-full">
                    {/* About Us */}
                    <div ref={el => { columnsRef.current[0] = el; }} className="footer-column">
                        <h3 className="text-xl font-semibold text-primary-foreground mb-2 font-poppins">About Us</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                            At Wee Invest Global Pvt. Ltd., we are driven by a singular mission: to empower visionaries with the capital, mentorship, and resources they need to turn bold ideas into thriving businesses. Founded with a passion for innovation, we support startups across diverse sectors.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div ref={el => { columnsRef.current[1] = el; }} className="footer-column">
                        <h3 className="text-xl font-semibold text-primary-foreground mb-2 font-poppins">Quick Links</h3>
                        <ul className="text-muted-foreground text-sm space-y-1">
                            <li><Link href="/" className="hover:text-brand_teal">Home</Link></li>
                            <li><a href="/what-we-provide" className="hover:text-brand_teal">What We Provide</a></li>
                            <li><a href="/why-we-invest" className="hover:text-brand_teal">Why We Invest</a></li>
                            <li><a href="/portfolio" className="hover:text-brand_teal">Portfolio</a></li>
                            <li><a href="/apply" className="hover:text-brand_teal">Apply Now</a></li>
                        </ul>
                    </div>

                    {/* Contact Us */}
                    <div ref={el => { columnsRef.current[2] = el; }} className="footer-column">
                        <h3 className="text-xl font-semibold text-primary-foreground mb-2 font-poppins">Contact Us</h3>
                        <ul className="text-muted-foreground text-sm space-y-1">
                            <li><Link href="mailto:info@weinvest.com" className="hover:text-brand_teal">Email: info@weinvest.com</Link></li>
                            <li>Phone: +977-1-555-0123</li>
                            <li>Address: 123 Innovation Lane, Kathmandu, Nepal</li>
                            <li>Office Hours: Mon-Fri, 9:00 AM - 5:00 PM (NPT)</li>
                        </ul>
                    </div>

                    {/* Connect With Us */}
                    <div ref={el => { columnsRef.current[3] = el; }} className="footer-column">
                        <h3 className="text-xl font-semibold text-primary-foreground mb-2 font-poppins">Connect With Us</h3>
                        <div className="flex gap-4 mt-2 justify-center md:justify-start">
                            <Link href="https://twitter.com/weinvest" target="_blank" rel="noopener noreferrer" className="social-icon text-muted-foreground hover:text-brand_teal">
                                <Twitter className="w-6 h-6" />
                            </Link>
                            <Link href="https://linkedin.com/company/weinvest" target="_blank" rel="noopener noreferrer" className="social-icon text-muted-foreground hover:text-brand_teal">
                                <Linkedin className="w-6 h-6" />
                            </Link>
                            <Link href="https://youtube.com/weinvest" target="_blank" rel="noopener noreferrer" className="social-icon text-muted-foreground hover:text-brand_teal">
                                <Youtube className="w-6 h-6" />
                            </Link>
                            <Link href="https://instagram.com/weinvest" target="_blank" rel="noopener noreferrer" className="social-icon text-muted-foreground hover:text-brand_teal">
                                <Instagram className="w-6 h-6" />
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="text-center mt-10 w-full">
                    <p className="text-muted-foreground text-xs mt-4">
                        © {new Date().getFullYear()} Wee Invest Global Pvt. Ltd. All rights reserved. |{' '}
                        <Link href="/privacy" className="hover:text-brand_teal">Privacy Policy</Link> |{' '}
                        <Link href="/terms" className="hover:text-brand_teal">Terms of Service</Link>
                    </p>
                </div>
            </div>
        </footer>
    );
}
