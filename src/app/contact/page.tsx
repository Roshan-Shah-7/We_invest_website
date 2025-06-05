'use client'

import { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle, ExternalLink, Loader2, Building, Clock } from 'lucide-react';

export default function Contact() {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submissionStatus, setSubmissionStatus] = useState<'success' | 'error' | null>(null);
    const [validationErrors, setValidationErrors] = useState<Partial<typeof formData>>({});

    const validateForm = (): boolean => {
        const errors: Partial<typeof formData> = {};
        let isValid = true;

        if (!formData.fullName.trim()) {
            errors.fullName = 'Full Name is required.';
            isValid = false;
        }
        if (!formData.email.trim()) {
            errors.email = 'Email Address is required.';
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = 'Invalid email address format.';
            isValid = false;
        }
        if (!formData.phone.trim()) {
            errors.phone = 'Phone Number is required.';
            isValid = false;
        } else if (!/^\+?[0-9\s\-()]{7,20}$/.test(formData.phone)) {
            errors.phone = 'Invalid phone number format.';
            isValid = false;
        }
        if (!formData.subject.trim()) {
            errors.subject = 'Subject is required.';
            isValid = false;
        }
        if (!formData.message.trim()) {
            errors.message = 'Message is required.';
            isValid = false;
        }

        setValidationErrors(errors);
        return isValid;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (validationErrors[name as keyof typeof formData]) {
            setValidationErrors(prev => {
                const newErrors = { ...prev };
                delete newErrors[name as keyof typeof formData];
                return newErrors;
            });
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const isValid = validateForm();
        if (!isValid) {
            setSubmissionStatus('error');
            setIsSubmitting(false);
            return;
        }

        setIsSubmitting(true);
        setSubmissionStatus(null);

        try {
            const response = await fetch('/api/submit-contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    fullName: formData.fullName,
                    email: formData.email,
                    phone: formData.phone,
                    subject: formData.subject,
                    message: formData.message,
                }),
            });

            const result = await response.json();

            if (response.ok) {
                setSubmissionStatus('success');
                setFormData({ fullName: '', email: '', phone: '', subject: '', message: '' });
            } else {
                console.error('Contact form submission error:', result);
                setSubmissionStatus('error');
            }
        } catch (error) {
            console.error('Network or unexpected error:', error);
            setSubmissionStatus('error');
        } finally {
            setIsSubmitting(false);
            setTimeout(() => setSubmissionStatus(null), 5000);
        }
    };

    return (
        <div className="min-h-screen bg-[#f8fbfa]">
            {/* Hero Section */}
            <section className="pt-28 pb-20 sm:pt-32 sm:pb-24 bg-gradient-to-b from-[#e0f2f1] to-[#f8fbfa]">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto text-center">
                        <div className="inline-flex items-center justify-center bg-[#00695C] text-white p-3 rounded-full mb-6">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
                            Get in Touch
                        </h1>
                        <div className="w-20 h-1 bg-[#00695C] rounded-full mx-auto mb-6"></div>
                        <p className="text-lg sm:text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
                            We&apos;re here to help with any questions, support, or opportunities you&apos;d like to discuss.
                        </p>
                        <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 sm:gap-6">
                            <a href="tel:+9779851408600" className="flex items-center bg-white hover:bg-[#00695C] group hover:text-white p-4 rounded-lg shadow-md transition-all duration-300 ease-in-out min-w-[240px] justify-center border border-gray-200">
                                <Phone className="w-5 h-5 sm:w-6 sm:h-6 mr-2.5 text-[#00695C] group-hover:text-white" />
                                <span className="font-medium">+977-9851408600</span>
                            </a>
                            <a href="mailto:contact@weeinvest.com" className="flex items-center bg-[#00695C] hover:bg-white text-white group hover:text-black p-4 rounded-lg shadow-md transition-all duration-300 ease-in-out min-w-[240px] justify-center">
                                <Mail className="w-5 h-5 sm:w-6 sm:h-6 mr-2.5 text-white group-hover:text-black" />
                                <span className="font-medium">contact@weeinvest.com</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
                    {/* Contact Form */}
                    <div className="lg:col-span-3 h-fit lg:sticky top-20 bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                        <h2 className="text-3xl font-bold text-gray-800 mb-6 pb-4 border-b border-gray-200">
                            Send Us a Message
                        </h2>
                        {submissionStatus === 'success' && (
                            <div className="mb-6 p-4 bg-green-50 text-green-700 rounded-lg flex items-center border border-green-200">
                                <CheckCircle className="w-6 h-6 mr-3 text-green-600 flex-shrink-0" />
                                <div>
                                    <p className="font-semibold">Thank you for your message!</p>
                                    <p className="text-sm">We&apos;ll get back to you within 24 hours.</p>
                                </div>
                            </div>
                        )}
                        {submissionStatus === 'error' && (
                            <div className="mb-6 p-4 bg-red-50 text-red-700 rounded-lg flex items-center border border-red-200">
                                <Loader2 className="w-6 h-6 mr-3 text-red-600 flex-shrink-0" />
                                <div>
                                    <p className="font-semibold">Submission failed!</p>
                                    <p className="text-sm">There was an error sending your message. Please try again.</p>
                                </div>
                            </div>
                        )}
                        {Object.keys(validationErrors).length > 0 && submissionStatus === 'error' && (
                            <div className="mb-6 p-4 bg-red-50 text-red-700 rounded-lg flex items-center border border-red-200">
                                <Loader2 className="w-6 h-6 mr-3 text-red-600 flex-shrink-0" />
                                <div>
                                    <p className="font-semibold">Please correct the errors in the form.</p>
                                    <ul className="list-disc list-inside text-sm mt-1">
                                        {Object.values(validationErrors).map((error, index) => (
                                            <li key={index}>{error}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        )}
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                                    <input
                                        type="text"
                                        id="fullName"
                                        name="fullName"
                                        value={formData.fullName}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-3 bg-white border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00695C] focus:border-[#00695C] transition duration-150 ${validationErrors.fullName ? 'border-red-500' : 'border-gray-300'}`}
                                        required
                                        placeholder="Your Full Name"
                                    />
                                    {validationErrors.fullName && <p className="text-red-500 text-xs mt-1">{validationErrors.fullName}</p>}
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-3 bg-white border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00695C] focus:border-[#00695C] transition duration-150 ${validationErrors.email ? 'border-red-500' : 'border-gray-300'}`}
                                        required
                                        placeholder="your@email.com"
                                    />
                                    {validationErrors.email && <p className="text-red-500 text-xs mt-1">{validationErrors.email}</p>}
                                </div>
                            </div>
                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-3 bg-white border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00695C] focus:border-[#00695C] transition duration-150 ${validationErrors.phone ? 'border-red-500' : 'border-gray-300'}`}
                                    required
                                    placeholder="+977-9812345678"
                                />
                                {validationErrors.phone && <p className="text-red-500 text-xs mt-1">{validationErrors.phone}</p>}
                            </div>
                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-3 bg-white border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00695C] focus:border-[#00695C] transition duration-150 ${validationErrors.subject ? 'border-red-500' : 'border-gray-300'}`}
                                    required
                                    placeholder="Reason for contacting"
                                />
                                {validationErrors.subject && <p className="text-red-500 text-xs mt-1">{validationErrors.subject}</p>}
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={5}
                                    value={formData.message}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-3 bg-white border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00695C] focus:border-[#00695C] transition duration-150 ${validationErrors.message ? 'border-red-500' : 'border-gray-300'}`}
                                    required
                                    placeholder="Your detailed message..."
                                ></textarea>
                                {validationErrors.message && <p className="text-red-500 text-xs mt-1">{validationErrors.message}</p>}
                            </div>
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-[#00695C] hover:bg-[#005546] text-white py-3.5 px-6 rounded-lg font-semibold text-base flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-[#00695C] focus:ring-offset-2 transition-all duration-300 ease-in-out disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? (
                                    <>
                                        <Loader2 className="animate-spin -ml-1 mr-3 h-5 w-5" />
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        Send Message
                                        <Send className="ml-2 w-5 h-5" />
                                    </>
                                )}
                            </button>
                        </form>
                    </div>

                    {/* Map & Info Section */}
                    <div className="lg:col-span-2 space-y-8">
                        <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                            <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-3 border-b border-gray-200">
                                Our Location
                            </h2>
                            <div className="relative h-80 w-full rounded-xl overflow-hidden shadow-lg mb-6 border border-gray-200">
                                {/* Embedded Google Map */}
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.359986575374!2d85.31660871506208!3d27.70421908279267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1908434cb1c1%3A0x1bcee5f5b6d5d6f8!2sBishal%20Nagar%2C%20Kathmandu%2044600%2C%20Nepal!5e0!3m2!1sen!2sus!4v1658837892349!5m2!1sen!2sus"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>

                            <div className="bg-[#f0f9f7] p-4 rounded-lg">
                                <div className="flex items-start">
                                    <Building className="w-6 h-6 text-[#00695C] mt-1 mr-3 flex-shrink-0" />
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-800">Headquarters</h3>
                                        <p className="text-gray-600 mt-1">
                                            Bishal Nagar, Kathmandu 44600, Nepal
                                        </p>
                                        <a
                                            href="https://maps.google.com/?q=Bishal+Nagar+Kathmandu+Nepal"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="mt-3 inline-flex items-center text-[#00695C] hover:text-[#005546] font-medium transition-colors"
                                        >
                                            View on Google Maps
                                            <ExternalLink className="ml-2 w-4 h-4" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                            <h3 className="text-xl font-semibold text-gray-800 mb-5 flex items-center pb-3 border-b border-gray-200">
                                <Clock className="w-5 h-5 mr-2.5 text-[#00695C]" />
                                Office Hours
                            </h3>
                            <div className="space-y-4 text-gray-600">
                                <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                                    <span>Monday - Friday:</span>
                                    <span className="font-medium text-gray-800">9:00 AM - 6:00 PM</span>
                                </div>
                                <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                                    <span>Saturday:</span>
                                    <span className="font-medium text-gray-500">10:00 AM - 4:00 PM</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span>Sunday:</span>
                                    <span className="font-medium text-gray-500">Closed</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-16 sm:mt-20 lg:mt-24 pt-16 border-t border-gray-200">
                    <div className="max-w-3xl mx-auto text-center mb-12">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
                            Quick Contact Options
                        </h2>
                        <p className="text-gray-600">
                            Choose the most convenient way to reach our team
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                        {[
                            {
                                icon: Phone,
                                title: "Call Us Directly",
                                detail: (
                                    <>
                                        <span>+977-9851408600 <br /> +977-9847690076</span>
                                    </>
                                ),
                                description: "For urgent matters or quick questions.",
                                href: "tel:+9779851408600",
                                color: "bg-[#e0f7f4]"
                            },
                            {
                                icon: Mail,
                                title: "Email Our Team",
                                detail: "investwe3@gmail.com",
                                description: "We typically respond within 24 hours.",
                                href: "mailto:investwe3@gmail.com",
                                color: "bg-[#e8f5e9]"
                            },
                            {
                                icon: MapPin,
                                title: "Visit Our Office",
                                detail: "Bishal Nagar, Kathmandu",
                                description: "Open during business hours for meetings.",
                                href: "https://maps.google.com/?q=Bishal+Nagar+Kathmandu+Nepal",
                                color: "bg-[#e3f2fd]"
                            }
                        ].map((item, index) => {
                            const IconComponent = item.icon;
                            return (
                                <a
                                    key={index}
                                    href={item.href}
                                    target={item.title === "Visit Our Office" ? "_blank" : undefined}
                                    rel={item.title === "Visit Our Office" ? "noopener noreferrer" : undefined}
                                    className="block bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out group border border-gray-100 hover:border-[#00695C]/30"
                                >
                                    <div className={`w-14 h-14 ${item.color} rounded-xl flex items-center justify-center mb-5 transition-transform`}>
                                        <IconComponent className="w-6 h-6 text-[#00695C]" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-[#00695C] transition-colors">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm text-gray-500 mb-4">{item.description}</p>
                                    <p className="text-[#00695C] font-medium flex items-center">
                                        {item.detail}
                                        {item.title === "Visit Our Office" && (
                                            <ExternalLink className="ml-2 w-4 h-4" />
                                        )}
                                    </p>
                                </a>
                            );
                        })}
                    </div>
                </div>
            </main>

            <footer className="bg-[#00695C] text-white py-12">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto text-center flex flex-col items-center justify-center">
                        <h3 className="text-2xl font-bold mb-4">Wee Invest Global Pvt. Ltd.</h3>
                        <p className="max-w-2xl mx-auto text-[#c8e6c9]">
                            Building financial futures through strategic investments and innovative solutions
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
