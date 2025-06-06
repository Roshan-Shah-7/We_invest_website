"use client"

import type React from "react"

import { useState, useEffect } from "react"
import {
    Shield,
    Calendar,
    Download,
    Mail,
    Phone,
    MapPin,
    ChevronRight,
    Lock,
    Globe,
    User,
    Bell,
    TrendingUp,
    FileText,
    AlertTriangle,
    Settings,
    Share2,
    Archive,
    UserCheck,
    RefreshCw,
} from "lucide-react"
import {
    privacyPolicySections,
    lastUpdated,
    effectiveDate,
    contactDetails,
    privacyPolicyMetadata,
} from "@/data/privacy-policy-data"

import { PrivacyContentBlock, PrivacySection } from "@/data/privacy-policy-data"

interface Section {
    id: string
    title: string
    icon: string // Changed to string
    content: PrivacyContentBlock[]
    subsections?: { id: string; title: string }[]
}

const iconMap: Record<string, React.ElementType> = {
    "introduction-commitment": Shield,
    "information-we-collect": Globe, // Using Globe for general info collection
    "how-we-use-your-information": Settings, // Using Settings for how info is used
    "how-we-share-your-information": Share2, // Using Share2 for sharing info
    "data-security": Lock,
    "data-retention": Archive, // Using Archive for data retention
    "your-rights-responsibilities": UserCheck, // Using UserCheck for rights and responsibilities
    "changes-to-privacy-policy": RefreshCw, // Using RefreshCw for changes to policy
    "contact-us": Mail,
}

const sections: Section[] = privacyPolicySections.map((section: PrivacySection) => ({
    id: section.id,
    title: section.title,
    icon: section.icon, // Directly use the string icon name
    content: section.content, // Directly use the content array
    subsections: section.subsections,
}))

export default function PrivacyPolicy() {
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
        // Call handleScroll once on mount to set initial active section
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, [activeSection]);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId)
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" })
        }
    }


    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="bg-white border-b border-gray-200 py-12 sm:py-16">
                <div className="container mx-auto px-6 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-dark-green rounded-2xl mb-6">
                        <Shield className="w-8 h-8 text-white" />
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-6">
                        Our commitment to protecting your personal information and privacy.
                    </p>
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

            {/* Regulatory Notice */}
            <div className="bg-yellow-50 border-b border-yellow-200 py-4">
                <div className="container mx-auto px-6">
                    <div className="flex items-center justify-center text-yellow-800">
                        <AlertTriangle className="w-5 h-5 mr-2" />
                        <span className="text-sm font-medium">
                            Registered Investment Company In The Process of Obtaining License from SEBOM
                        </span>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-6 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    {/* Table of Contents */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 sticky top-20">
                            <h3 className="font-semibold text-gray-900 mb-4">Table of Contents</h3>
                            <nav className="space-y-2">
                                {sections.map((section: PrivacySection) => {
                                    const IconComponent = iconMap[section.icon]; // Get the icon component from the map
                                    return (
                                        <div key={section.id}>
                                            <button
                                                onClick={() => scrollToSection(section.id)}
                                                className={`w-full text-left p-2 rounded-lg text-sm transition-colors duration-500
                                                    flex items-center ${activeSection === section.id ? "bg-brand_teal text-white" : "text-gray-700 hover:bg-gray-50"
                                                    }`}
                                            >
                                                {IconComponent && <IconComponent className="w-4 h-4 mr-2" />}
                                                <span>{section.title}</span>
                                            </button>
                                            {section.subsections && activeSection === section.id && (
                                                <div className="ml-7 mt-2 space-y-1">
                                                    {section.subsections.map((subsection: { id: string; title: string }) => (
                                                        <button
                                                            key={subsection.id}
                                                            onClick={() => scrollToSection(subsection.id)}
                                                            className="w-full text-left p-1 text-xs text-gray-600 
                                                            hover:text-brand_green transition-colors duration-200"
                                                        >
                                                            {subsection.title}
                                                        </button>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    )
                                })}
                            </nav>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="lg:col-span-3">
                        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
                            {sections.map((section, index) => {
                                return (
                                    <section
                                        key={section.id}
                                        id={section.id}
                                        className={`p-8 ${index !== sections.length - 1 ? "border-b border-gray-200" : ""}`}
                                    >
                                        <div className="flex items-center mb-6">
                                            <h2 className="text-2xl font-bold text-gray-900">{section.title}</h2>
                                        </div>
                                        <div className="space-y-6">
                                            {section.content.map((block: PrivacyContentBlock, blockIndex: number) => {
                                                switch (block.type) {
                                                    case "paragraph":
                                                        return (
                                                            <div key={blockIndex}>
                                                                {block.title && (
                                                                    <h4 className="text-lg font-semibold text-gray-900 mb-3">
                                                                        {block.title}
                                                                    </h4>
                                                                )}
                                                                <p className="text-gray-700 leading-relaxed">
                                                                    {block.text}
                                                                </p>
                                                            </div>
                                                        )
                                                    case "list":
                                                        return (
                                                            <ul key={blockIndex} className="space-y-2 text-gray-700">
                                                                {block.items?.map((item, itemIndex) => (
                                                                    <li key={itemIndex} className="flex items-start">
                                                                        <ChevronRight className="w-4 h-4 text-brand_teal mr-3 flex-shrink-0 mt-1" />
                                                                        <span dangerouslySetInnerHTML={{ __html: item }} />
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        )
                                                    case "highlight":
                                                        return (
                                                            <div
                                                                key={blockIndex}
                                                                className={`p-4 rounded-lg ${block.color === "blue"
                                                                    ? "bg-blue-50 text-blue-800"
                                                                    : block.color === "yellow"
                                                                        ? "bg-yellow-50 text-yellow-800"
                                                                        : block.color === "red"
                                                                            ? "bg-red-50 text-red-800"
                                                                            : block.color === "green"
                                                                                ? "bg-green-50 text-green-800"
                                                                                : "bg-gray-50 text-gray-800"
                                                                    }`}
                                                            >
                                                                {block.title && (
                                                                    <h4 className="font-semibold mb-2">{block.title}</h4>
                                                                )}
                                                                <p>{block.text}</p>
                                                            </div>
                                                        )
                                                    case "grid-list":
                                                        return (
                                                            <div key={blockIndex} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                                {block.gridItems?.map((item, itemIndex) => (
                                                                    <div key={itemIndex} className="bg-gray-50 p-4 rounded-lg">
                                                                        <h5 className="font-semibold text-gray-900 mb-1">{item.title}</h5>
                                                                        <p className="text-gray-700 text-sm">{item.description}</p>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        )
                                                    default:
                                                        return null
                                                }
                                            })}
                                        </div>
                                    </section>
                                )
                            })}
                        </div>

                        {/* Contact Information */}
                        <div className="mt-8 bg-white rounded-xl p-8 shadow-sm border border-gray-200">
                            <h3 className="text-xl font-semibold text-gray-900 mb-6">Contact Information</h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="bg-gray-50 rounded-xl p-6 text-center">
                                    <Mail className="w-8 h-8 text-brand-green mx-auto mb-3" />
                                    <h4 className="font-semibold text-gray-900 mb-2">Email</h4>
                                    <p className="text-gray-600 text-sm mb-3">For all inquiries</p>
                                    <p className="text-brand-green font-medium">{contactDetails.email}</p>
                                </div>

                                <div className="bg-gray-50 rounded-xl p-6 text-center">
                                    <Phone className="w-8 h-8 text-brand-green mx-auto mb-3" />
                                    <h4 className="font-semibold text-gray-900 mb-2">Phone</h4>
                                    <p className="text-gray-600 text-sm mb-3">Business hours support</p>
                                    <p className="text-brand-green font-medium">{contactDetails.phone}</p>
                                </div>

                                <div className="bg-gray-50 rounded-xl p-6 text-center">
                                    <MapPin className="w-8 h-8 text-brand-green mx-auto mb-3" />
                                    <h4 className="font-semibold text-gray-900 mb-2">Address</h4>
                                    <p className="text-gray-600 text-sm mb-3">{contactDetails.company}</p>
                                    <p className="text-brand-green font-medium">{contactDetails.address}</p>
                                </div>
                            </div>
                        </div>

                        {/* Footer */}
                        <div className="mt-8 bg-brand_teal rounded-xl p-8 text-white text-center">
                            <h3 className="text-xl font-semibold mb-4">Regulatory Compliance</h3>
                            <p className="text-gray-200 leading-relaxed max-w-2xl mx-auto mb-6">
                                We Invest Private Limited operates under the regulatory oversight of the Securities Board of Nepal
                                (SEBON) and Nepal Rastra Bank. We are committed to maintaining the highest standards of compliance with
                                all applicable laws and regulations in Nepal.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                                <div>
                                    <h4 className="font-semibold text-white mb-2">Regulatory Bodies</h4>
                                    <ul className="text-gray-300 space-y-1">
                                        {privacyPolicyMetadata.regulatoryBodies.map((body: string) => (
                                            <li key={body}>{body}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-white mb-2">Applicable Laws</h4>
                                    <ul className="text-gray-300 space-y-1">
                                        {privacyPolicyMetadata.applicableLaws.map((law: string) => (
                                            <li key={law}>{law}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-white mb-2">Document Info</h4>
                                    <ul className="text-gray-300 space-y-1">
                                        <li>Version: {privacyPolicyMetadata.version}</li>
                                        <li>ID: {privacyPolicyMetadata.documentId}</li>
                                        <li>Jurisdiction: {privacyPolicyMetadata.jurisdiction}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
