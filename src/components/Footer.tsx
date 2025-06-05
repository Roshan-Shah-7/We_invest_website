'use client'

import React from 'react';
import { Facebook, Instagram, MapPin, Mail, Phone, Clock, Send, MessageSquare } from 'lucide-react';
import Link from 'next/link';
import NewsletterSubscriptionForm from './NewsletterSubscriptionForm';
import Image from 'next/image';
import wWhiteLogo from "../../public/w-white-l.png"

export default function Footer() {
    return (
        <footer className="bg-[#f8fbfa] text-gray-800 w-full relative pt-24 pb-16">
            {/* Decorative top wave */}
            <div className="absolute top-0 left-0 right-0 h-24 overflow-hidden">
                <svg
                    className="absolute top-0 w-full h-full text-[#00695C]"
                    viewBox="0 0 1440 120"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M0,60 C240,120 480,0 720,60 C960,120 1200,0 1440,60 L1440,0 L0,0 Z"
                        fill="currentColor"
                    />
                </svg>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-16">
                    {/* Brand Section */}
                    <div className="md:col-span-4">
                        <div className="mb-6">
                            <div className="flex items-center">
                                <div className="bg-[#00695C] text-white p-3 rounded-xl mr-3">
                                    <Image src={wWhiteLogo} alt='We Investment Logo' width={30} height={30} />
                                </div>
                                <span className="text-2xl font-bold text-[#00695C] font-poppins">We Invest</span>
                            </div>
                        </div>

                        <p className="text-gray-600 mb-6 text-sm leading-relaxed max-w-md">
                            At We Invest Global Pvt. Ltd., we empower visionaries with the capital, mentorship, and resources to turn bold ideas into thriving businesses. Founded with a passion for innovation, we support startups across diverse sectors.
                        </p>

                        <div className="flex gap-4 mt-6">
                            <Link href="https://t.me/weinvestglobal/11" target="_blank" rel="noopener noreferrer" className="bg-white p-2.5 rounded-full shadow-md hover:bg-[#00695C] hover:text-white transition-colors duration-300">
                                <Send className="w-5 h-5" /> {/* Using Send for Telegram */}
                            </Link>
                            <Link href="https://facebook.com/share/1BEWZehzx7/?mibextid=qi2Omg" target="_blank" rel="noopener noreferrer" className="bg-white p-2.5 rounded-full shadow-md hover:bg-[#00695C] hover:text-white transition-colors duration-300">
                                <Facebook className="w-5 h-5" />
                            </Link>
                            <Link href="https://instagram.com/weinvestglobal?igsh=MXJrd2I2MThvMWRoZA==" target="_blank" rel="noopener noreferrer" className="bg-white p-2.5 rounded-full shadow-md hover:bg-[#00695C] hover:text-white transition-colors duration-300">
                                <Instagram className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="md:col-span-2">
                        <h3 className="text-lg font-semibold text-gray-800 mb-5 pb-2 border-b border-[#00695C]/20">Quick Links</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/" className="text-gray-600 hover:text-[#00695C] transition-colors flex items-center">
                                    <span className="w-2 h-2 bg-[#00695C] rounded-full mr-3"></span>
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/investment" className="text-gray-600 hover:text-[#00695C] transition-colors flex items-center">
                                    <span className="w-2 h-2 bg-[#00695C] rounded-full mr-3"></span>
                                    Investment
                                </Link>
                            </li>
                            <li>
                                <Link href="/market-overview" className="text-gray-600 hover:text-[#00695C] transition-colors flex items-center">
                                    <span className="w-2 h-2 bg-[#00695C] rounded-full mr-3"></span>
                                    Market Overview
                                </Link>
                            </li>
                            <li>
                                <Link href="/investment-programs" className="text-gray-600 hover:text-[#00695C] transition-colors flex items-center">
                                    <span className="w-2 h-2 bg-[#00695C] rounded-full mr-3"></span>
                                    Investment Program
                                </Link>
                            </li>
                            <li>
                                <Link href="/apply" className="text-gray-600 hover:text-[#00695C] transition-colors flex items-center">
                                    <span className="w-2 h-2 bg-[#00695C] rounded-full mr-3"></span>
                                    Apply Now
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="md:col-span-3">
                        <h3 className="text-lg font-semibold text-gray-800 mb-5 pb-2 border-b border-[#00695C]/20">Contact Info</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <div className="bg-[#e0f2f1] p-2 rounded-lg mr-4">
                                    <Mail className="w-5 h-5 text-[#00695C]" />
                                </div>
                                <div>
                                    <span className="text-sm text-gray-500">Email</span>
                                    <Link href="mailto:investwe3@gmail.com" className="text-gray-800
                                     hover:text-[#00695C] transition-colors block">investwe3@gmail.com</Link>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <div className="bg-[#e0f2f1] p-2 rounded-lg mr-4">
                                    <Phone className="w-5 h-5 text-[#00695C]" />
                                </div>
                                <div>
                                    <span className="text-sm text-gray-500">Phone</span>
                                    <span className="text-gray-800 block">+977-9828240210</span>
                                    <span className="text-gray-800 block">+977-9851408600</span>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <div className="bg-[#e0f2f1] p-2 rounded-lg mr-4">
                                    <MapPin className="w-5 h-5 text-[#00695C]" />
                                </div>
                                <div>
                                    <span className="text-sm text-gray-500">Address</span>
                                    <span className="text-gray-800 block">Bishalnagar, Kathmandu 44600, Nepal</span>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <div className="bg-[#e0f2f1] p-2 rounded-lg mr-4">
                                    <Clock className="w-5 h-5 text-[#00695C]" />
                                </div>
                                <div>
                                    <span className="text-sm text-gray-500">Office Hours</span>
                                    <span className="text-gray-800 block">Sun-Fri, 9:00 AM - 5:00 PM (NPT)</span>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div className="md:col-span-3">
                        <h3 className="text-lg font-semibold text-gray-800 mb-5 pb-2 border-b border-[#00695C]/20">Stay Updated</h3>
                        <p className="text-gray-600 mb-4 text-sm">
                            Subscribe to our newsletter for the latest investment opportunities and news.
                        </p>
                        <NewsletterSubscriptionForm />
                    </div>
                </div>

                <div className='pt-4 border-t border-gray-200 mb-4'>
                    <p className='text-justify text-gray-700'>
                        <span className='font-bold text-black'>Investment Disclaimer: </span>
                        Investments come with inherent market risks, and the value of your investment may vary due to numerous
                        factors affecting financial markets. The historical performance of any sector or investment does not assure
                        future results. We strongly advise investors to carefully examine all relevant scheme documents and seek guidance
                        from qualified professionals to grasp the legal, tax, and financial consequences of their investment decisions.
                        It&apos;s crucial to make informed choices to ensure your investments align with your financial objectives.
                    </p>
                </div>

                <div className="pt-4 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-600 text-sm text-center md:text-left mb-4 md:mb-0">
                        © {new Date().getFullYear()} We Invest Global Pvt. Ltd. All rights reserved.
                    </p>
                    <div className="flex space-x-6">
                        <Link href="/privacy" className="text-gray-600 hover:text-[#00695C] text-sm transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="text-gray-600 hover:text-[#00695C] text-sm transition-colors">Terms of Service</Link>
                        <Link href="/faq" className="text-gray-600 hover:text-[#00695C] text-sm transition-colors">FAQ</Link>
                        <Link href="/contact" className="text-gray-600 hover:text-[#00695C] text-sm transition-colors">Contact</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
