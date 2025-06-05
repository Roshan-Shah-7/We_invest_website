"use client"

import * as React from "react"
import { useState, useEffect } from "react"
import { ChevronRight, FileText, Calendar, Download, Mail, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { lastUpdated, effectiveDate, termsSections, TermContentBlock, TermSection } from "@/data/termsData"

interface Section {
    id: string
    title: string
    content: TermContentBlock[]
    subsections?: { id: string; title: string }[]
}

const sections: Section[] = termsSections.map((section: TermSection) => ({
    id: section.id,
    title: section.title,
    content: section.content,
    subsections: section.subsections,
}));

export default function TermsAndConditions() {
    const [activeSection, setActiveSection] = useState<string>("")

    useEffect(() => {
        const handleScroll = () => {

            const scrollPosition = window.scrollY + 150; // Offset for fixed header/better visibility

            let currentActiveSectionId = "";
            for (let i = sections.length - 1; i >= 0; i--) {
                const section = sections[i];
                const element = document.getElementById(section.id);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    // Check if the section is in view and its top is above the scroll position
                    if (rect.top + window.scrollY <= scrollPosition) {
                        currentActiveSectionId = section.id;
                        break;
                    }
                }
            }

            if (currentActiveSectionId && currentActiveSectionId !== activeSection) {
                setActiveSection(currentActiveSectionId);
            } else if (!currentActiveSectionId && activeSection) {
                // If no section is active (e.g., at the very top of the page), clear activeSection
                setActiveSection("");
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll(); // Call once on mount to set initial active section
        return () => window.removeEventListener("scroll", handleScroll);
    }, [activeSection]);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId)
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" })
        }
    }

    const renderContent = (contentBlocks: TermContentBlock[]) => {
        return (
            <div className="space-y-6">
                {contentBlocks.map((block, blockIndex) => {
                    if (block.type === 'paragraph') {
                        return (
                            <div key={blockIndex}>
                                {block.title && <h4 className="text-lg font-semibold text-gray-900 mb-4">{block.title}</h4>}
                                <p className="text-gray-700 leading-relaxed">{block.text}</p>
                            </div>
                        );
                    } else if (block.type === 'list') {
                        const iconColorClass = block.color === 'red' ? 'text-red-500' : block.color === 'yellow' ? 'text-yellow-600' : 'text-brand-green';
                        return (
                            <ul key={blockIndex} className="space-y-2 text-gray-700">
                                {block.items?.map((item, itemIndex) => (
                                    <li key={itemIndex} className="flex items-start">
                                        <ChevronRight className={`w-4 h-4 ${iconColorClass} mr-3 flex-shrink-0 mt-1`} />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        );
                    } else if (block.type === 'highlight') {
                        const bgColorClass = block.color === 'blue' ? 'bg-blue-50 border-blue-200' : block.color === 'yellow' ? 'bg-yellow-50 border-yellow-200' : '';
                        const textColorClass = block.color === 'blue' ? 'text-blue-800' : block.color === 'yellow' ? 'text-yellow-800' : '';
                        const titleColorClass = block.color === 'blue' ? 'text-blue-900' : block.color === 'yellow' ? 'text-yellow-900' : '';
                        return (
                            <div key={blockIndex} className={`border rounded-xl p-6 ${bgColorClass}`}>
                                <h4 className={`font-semibold mb-3 ${titleColorClass}`}>{block.title}</h4>
                                <p className={`leading-relaxed ${textColorClass}`}>{block.text}</p>
                            </div>
                        );
                    }
                    return null;
                })}
            </div>
        );
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="bg-white border-b border-gray-200 py-12 sm:py-16">
                <div className="container mx-auto px-6 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-dark-green rounded-2xl mb-6">
                        <FileText className="w-8 h-8 text-white" />
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Terms and Conditions</h1>
                    <div className="flex items-center justify-center space-x-6 text-sm text-gray-600">
                        <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-2" />
                            <span>Last Updated: {lastUpdated}</span>
                        </div>
                        <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-2" />
                            <span>Effective: {effectiveDate}</span>
                        </div>
                    </div>
                    {/* <div className="mt-6 flex justify-center space-x-4">
                        <Button variant="outline" size="sm">
                            <Download className="w-4 h-4 mr-2" />
                            Download PDF
                        </Button>
                    </div> */}
                </div>
            </header>

            <div className="container mx-auto px-6 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    {/* Table of Contents */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 sticky top-20">
                            <h3 className="font-semibold text-gray-900 mb-4">Table of Contents</h3>
                            <nav className="space-y-2">
                                {sections.map((section: TermSection) => (
                                    <div key={section.id}>
                                        <button
                                            onClick={() => scrollToSection(section.id)}
                                            className={`w-full text-left p-2 rounded-lg text-sm transition-colors 
                                                duration-500 ${activeSection === section.id ? "bg-brand_teal text-white" : "text-gray-700 hover:bg-gray-50"
                                                }`}
                                        >
                                            {section.title}
                                        </button>
                                        {section.subsections && activeSection === section.id && (
                                            <div className="ml-4 mt-2 space-y-1">
                                                {section.subsections.map((subsection: { id: string; title: string }) => (
                                                    <button
                                                        key={subsection.id}
                                                        onClick={() => scrollToSection(subsection.id)}
                                                        className="w-full text-left p-1 text-xs text-gray-600 hover:text-brand_green transition-colors duration-200"
                                                    >
                                                        {subsection.title}
                                                    </button>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </nav>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="lg:col-span-3">
                        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
                            {sections.map((section, index) => (
                                <section
                                    key={section.id}
                                    id={section.id}
                                    className={`p-8 ${index !== sections.length - 1 ? "border-b border-gray-200" : ""}`}
                                >
                                    <h2 className="text-2xl font-bold text-gray-900 mb-6">{section.title}</h2>
                                    {renderContent(section.content)}
                                    {section.id === 'contact' && (
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                                            <div className="bg-gray-50 rounded-xl p-6 text-center">
                                                <Mail className="w-8 h-8 text-brand-green mx-auto mb-3" />
                                                <h4 className="font-semibold text-gray-900 mb-2">Email</h4>
                                                <p className="text-gray-600 text-sm mb-3">For general inquiries and support</p>
                                                <p className="text-brand-green font-medium">legal@weinvest.com</p>
                                            </div>

                                            <div className="bg-gray-50 rounded-xl p-6 text-center">
                                                <Phone className="w-8 h-8 text-brand-green mx-auto mb-3" />
                                                <h4 className="font-semibold text-gray-900 mb-2">Phone</h4>
                                                <p className="text-gray-600 text-sm mb-3">Business hours: Mon-Fri, 9 AM-6 PM EST</p>
                                                <p className="text-brand-green font-medium">1-800-INVEST-1</p>
                                            </div>

                                            <div className="bg-gray-50 rounded-xl p-6 text-center">
                                                <MapPin className="w-8 h-8 text-brand-green mx-auto mb-3" />
                                                <h4 className="font-semibold text-gray-900 mb-2">Address</h4>
                                                <p className="text-gray-600 text-sm mb-3">Legal Department</p>
                                                <p className="text-brand-green font-medium">
                                                    123 Investment Ave
                                                    <br />
                                                    Suite 500
                                                    <br />
                                                    New York, NY 10001
                                                </p>
                                            </div>
                                        </div>
                                    )}
                                </section>
                            ))}
                        </div>

                        {/* Footer */}
                        <div className="mt-8 bg-brand_teal rounded-xl p-8 text-white text-center">
                            <h3 className="text-xl font-semibold mb-4">Agreement Acknowledgment</h3>
                            <p className="text-gray-200 leading-relaxed max-w-2xl mx-auto">
                                By using We Invest&apos;s services, you acknowledge that you have read, understood, and agree to be bound by
                                these Terms and Conditions. These terms constitute the entire agreement between you and We Invest
                                regarding your use of our services.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
