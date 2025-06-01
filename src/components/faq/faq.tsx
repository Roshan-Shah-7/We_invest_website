"use client"

import { useState, useMemo } from "react"
import { ChevronDown, ChevronUp, Phone, Mail, HelpCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { faqCategories, faqData, FAQItem } from "@/data/faqData"

export default function FAQ() {
    const [searchTerm, setSearchTerm] = useState("")
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
    const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set())

    const filteredFAQs = useMemo(() => {
        let filtered = faqData

        // Filter by category
        if (selectedCategory) {
            filtered = filtered.filter((faq) => faq.category === selectedCategory)
        }

        // Filter by search term
        if (searchTerm) {
            const searchLower = searchTerm.toLowerCase()
            filtered = filtered.filter(
                (faq) =>
                    faq.question.toLowerCase().includes(searchLower) ||
                    faq.answer.toLowerCase().includes(searchLower) ||
                    faq.keywords.some((keyword) => keyword.toLowerCase().includes(searchLower)),
            )
        }

        return filtered
    }, [searchTerm, selectedCategory])

    const toggleExpanded = (id: string) => {
        const newExpanded = new Set(expandedItems)
        if (newExpanded.has(id)) {
            newExpanded.delete(id)
        } else {
            newExpanded.add(id)
        }
        setExpandedItems(newExpanded)
    }

    const groupedFAQs = useMemo(() => {
        if (selectedCategory) {
            return { [selectedCategory]: filteredFAQs }
        }

        return filteredFAQs.reduce(
            (acc, faq) => {
                if (!acc[faq.category]) {
                    acc[faq.category] = []
                }
                acc[faq.category].push(faq)
                return acc
            },
            {} as Record<string, FAQItem[]>,
        )
    }, [filteredFAQs, selectedCategory])

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="bg-white border-b border-gray-200 py-16 sm:py-20">
                <div className="container mx-auto px-6 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-dark-green rounded-2xl mb-6">
                        <HelpCircle className="w-8 h-8 text-white" />
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h1>
                    <p className="text-xl text-gray-700 max-w-2xl mx-auto mb-8">
                        Find answers to common questions about our investment programs, processes, and services.
                    </p>
                </div>
            </section>

            <div className="container mx-auto px-6 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    {/* Sidebar - Categories */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 sticky top-20">
                            <h3 className="font-semibold text-gray-900 mb-4">Categories</h3>

                            <button
                                onClick={() => setSelectedCategory(null)}
                                className={`w-full text-left p-3 rounded-lg mb-2
                                    transition-colors duration-200 ${selectedCategory === null ? "bg-brand_teal text-white" : "text-gray-700 hover:bg-gray-50"
                                    }`}
                            >
                                All Questions
                            </button>

                            {faqCategories.map((category) => {
                                const Icon = category.icon
                                const categoryCount = faqData.filter((faq) => faq.category === category.id).length

                                return (
                                    <button
                                        key={category.id}
                                        onClick={() => setSelectedCategory(category.id)}
                                        className={`w-full text-left p-3 rounded-lg mb-2 transition-colors 
                                            duration-500 ${selectedCategory === category.id ? "border border-brand_green text-black" : "text-gray-700 hover:bg-gray-50"
                                            }`}
                                    >
                                        <div className="flex items-center">
                                            <Icon className="w-4 h-4 mr-3" />
                                            <div className="flex-1">
                                                <div className="font-medium text-sm">{category.name}</div>
                                                <div
                                                    className={`text-xs ${selectedCategory === category.id ? "text-black" : "text-gray-600"}`}
                                                >
                                                    {categoryCount} questions
                                                </div>
                                            </div>
                                        </div>
                                    </button>
                                )
                            })}
                        </div>
                    </div>

                    {/* Main Content - FAQ Items */}
                    <div className="lg:col-span-3">
                        {searchTerm && (
                            <div className="mb-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                                <p className="text-blue-800">
                                    Found {filteredFAQs.length} result{filteredFAQs.length !== 1 ? "s" : ""} for &quot;{searchTerm}&quot;
                                </p>
                            </div>
                        )}

                        {Object.entries(groupedFAQs).map(([categoryId, faqs]) => {
                            const category = faqCategories.find((cat) => cat.id === categoryId)

                            return (
                                <div key={categoryId} className="mb-8">
                                    {!selectedCategory && category && (
                                        <div className="mb-6">
                                            <h2 className="text-2xl font-bold text-gray-900 mb-2">{category.name}</h2>
                                            <p className="text-gray-600">{category.description}</p>
                                        </div>
                                    )}

                                    <div className="space-y-4">
                                        {faqs.map((faq) => {
                                            const isExpanded = expandedItems.has(faq.id)

                                            return (
                                                <div key={faq.id} className="bg-white rounded-xl border border-gray-200 shadow-sm">
                                                    <button
                                                        onClick={() => toggleExpanded(faq.id)}
                                                        className="w-full text-left p-6 focus:outline-none focus:ring-2 focus:ring-brand-green focus:ring-inset rounded-xl"
                                                    >
                                                        <div className="flex items-center justify-between">
                                                            <h3 className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</h3>
                                                            {isExpanded ? (
                                                                <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
                                                            ) : (
                                                                <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                                                            )}
                                                        </div>
                                                    </button>

                                                    {isExpanded && (
                                                        <div className="px-6 pb-6">
                                                            <div className="border-t border-gray-100 pt-4">
                                                                <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            )
                        })}

                        {filteredFAQs.length === 0 && (
                            <div className="text-center py-12">
                                <HelpCircle className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">No results found</h3>
                                <p className="text-gray-600 mb-6">Try adjusting your search terms or browse our categories.</p>
                                <Button
                                    onClick={() => {
                                        setSearchTerm("")
                                        setSelectedCategory(null)
                                    }}
                                    variant="outline"
                                >
                                    Clear Search
                                </Button>
                            </div>
                        )}
                    </div>
                </div>

                {/* Contact Support Section */}
                <div className="mt-16 bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
                    <div className="text-center">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Still have questions?</h3>
                        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                            Can&apos;t find what you&apos;re looking for? Our support team is here to help you with any questions about our
                            investment programs and services.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                            <div className="text-center p-6 bg-gray-50 rounded-xl">
                                <Phone className="w-8 h-8 text-brand-green mx-auto mb-3" />
                                <h4 className="font-semibold text-gray-900 mb-2">Call Us</h4>
                                <p className="text-gray-700 text-sm mb-3">Mon-Fri, 9 AM-6 PM EST</p>
                                <Button variant="outline" size="sm">
                                    1-800-INVEST-1
                                </Button>
                            </div>

                            <div className="text-center p-6 bg-gray-50 rounded-xl">
                                <Mail className="w-8 h-8 text-brand-green mx-auto mb-3" />
                                <h4 className="font-semibold text-gray-900 mb-2">Email Us</h4>
                                <p className="text-gray-700 text-sm mb-3">We&apos;ll respond within 24 hours</p>
                                <Button variant="outline" size="sm">
                                    support@weinvest.com
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
