'use client'

import React from 'react';
import { Twitter, Linkedin, Youtube, Instagram, MapPin, Mail, Phone, Clock } from 'lucide-react';
import Link from 'next/link';

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
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                <span className="text-2xl font-bold text-[#00695C] font-poppins">Wee Invest</span>
                            </div>
                        </div>

                        <p className="text-gray-600 mb-6 text-sm leading-relaxed max-w-md">
                            At Wee Invest Global Pvt. Ltd., we empower visionaries with the capital, mentorship, and resources to turn bold ideas into thriving businesses. Founded with a passion for innovation, we support startups across diverse sectors.
                        </p>

                        <div className="flex gap-4 mt-6">
                            <Link href="https://twitter.com/weinvest" target="_blank" rel="noopener noreferrer" className="bg-white p-2.5 rounded-full shadow-md hover:bg-[#00695C] hover:text-white transition-colors duration-300">
                                <Twitter className="w-5 h-5" />
                            </Link>
                            <Link href="https://linkedin.com/company/weinvest" target="_blank" rel="noopener noreferrer" className="bg-white p-2.5 rounded-full shadow-md hover:bg-[#00695C] hover:text-white transition-colors duration-300">
                                <Linkedin className="w-5 h-5" />
                            </Link>
                            <Link href="https://youtube.com/weinvest" target="_blank" rel="noopener noreferrer" className="bg-white p-2.5 rounded-full shadow-md hover:bg-[#00695C] hover:text-white transition-colors duration-300">
                                <Youtube className="w-5 h-5" />
                            </Link>
                            <Link href="https://instagram.com/weinvest" target="_blank" rel="noopener noreferrer" className="bg-white p-2.5 rounded-full shadow-md hover:bg-[#00695C] hover:text-white transition-colors duration-300">
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
                                <Link href="/what-we-provide" className="text-gray-600 hover:text-[#00695C] transition-colors flex items-center">
                                    <span className="w-2 h-2 bg-[#00695C] rounded-full mr-3"></span>
                                    What We Provide
                                </Link>
                            </li>
                            <li>
                                <Link href="/why-we-invest" className="text-gray-600 hover:text-[#00695C] transition-colors flex items-center">
                                    <span className="w-2 h-2 bg-[#00695C] rounded-full mr-3"></span>
                                    Why We Invest
                                </Link>
                            </li>
                            <li>
                                <Link href="/portfolio" className="text-gray-600 hover:text-[#00695C] transition-colors flex items-center">
                                    <span className="w-2 h-2 bg-[#00695C] rounded-full mr-3"></span>
                                    Portfolio
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
                                    <Link href="mailto:info@weinvest.com" className="text-gray-800 hover:text-[#00695C] transition-colors block">info@weinvest.com</Link>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <div className="bg-[#e0f2f1] p-2 rounded-lg mr-4">
                                    <Phone className="w-5 h-5 text-[#00695C]" />
                                </div>
                                <div>
                                    <span className="text-sm text-gray-500">Phone</span>
                                    <span className="text-gray-800 block">+977-1-555-0123</span>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <div className="bg-[#e0f2f1] p-2 rounded-lg mr-4">
                                    <MapPin className="w-5 h-5 text-[#00695C]" />
                                </div>
                                <div>
                                    <span className="text-sm text-gray-500">Address</span>
                                    <span className="text-gray-800 block">123 Innovation Lane, Kathmandu, Nepal</span>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <div className="bg-[#e0f2f1] p-2 rounded-lg mr-4">
                                    <Clock className="w-5 h-5 text-[#00695C]" />
                                </div>
                                <div>
                                    <span className="text-sm text-gray-500">Office Hours</span>
                                    <span className="text-gray-800 block">Mon-Fri, 9:00 AM - 5:00 PM (NPT)</span>
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
                        <form className="space-y-3">
                            <div>
                                <input
                                    type="email"
                                    placeholder="Your email address"
                                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00695C] focus:border-[#00695C] transition duration-150 text-sm"
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-[#00695C] hover:bg-[#005546] text-white py-3 px-4 rounded-lg font-medium text-sm flex items-center justify-center transition-colors duration-300"
                            >
                                Subscribe
                                <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </button>
                        </form>
                    </div>
                </div>

                <div className='pt-4 border-t border-gray-200 mb-4'>
                    <p className='text-justify text-gray-700'>
                        <span className='font-bold text-black'>Investment Disclaimer: </span>
                        Investments come with inherent market risks, and the value of your investment may vary due to numerous
                        factors affecting financial markets. The historical performance of any sector or investment does not assure
                        future results. We strongly advise investors to carefully examine all relevant scheme documents and seek guidance
                        from qualified professionals to grasp the legal, tax, and financial consequences of their investment decisions.
                        It's crucial to make informed choices to ensure your investments align with your financial objectives.
                    </p>
                </div>

                <div className="pt-4 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-600 text-sm text-center md:text-left mb-4 md:mb-0">
                        © {new Date().getFullYear()} Wee Invest Global Pvt. Ltd. All rights reserved.
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