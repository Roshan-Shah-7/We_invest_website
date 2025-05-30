import React from 'react';
import {
    Rocket,
    Layers,
    Cpu,
    Mic,
    Navigation,
    TrendingUp,
    CheckCircle,
} from 'lucide-react';

interface ServiceDetail {
    title: string;
    description: string;
}

interface Service {
    id: string;
    icon: React.ElementType;
    mainTitle: string;
    mainDescription: string;
    details?: ServiceDetail[];
}

const servicesData: Service[] = [
    {
        id: 'school-of-startups',
        icon: Rocket, // Changed from School for more dynamism
        mainTitle: 'School of Startups',
        mainDescription:
            'Our School of Startups is a dynamic programme designed to accelerate the growth of early-stage ventures. This holistic support system includes:',
        details: [
            {
                title: 'Acceleration Program',
                description:
                    'An intensive, mentor-driven initiative that fast-tracks startup development through access to industry experts, investors, and strategic resources.',
            },
            {
                title: 'Co-working Environment',
                description:
                    'A collaborative workspace fostering innovation, networking, and community, where entrepreneurs can connect and thrive.',
            },
        ],
    },
    {
        id: 'comprehensive-support',
        icon: Layers, // Changed from Briefcase for a more "stacked support" feel
        mainTitle: 'Comprehensive Startup Support',
        mainDescription:
            'We provide end-to-end support to help startups succeed, covering all aspects of business development. Our services include:',
        details: [
            {
                title: 'Business Strategy',
                description: 'Guidance on crafting robust business models and market entry strategies.',
            },
            {
                title: 'Marketing and Branding',
                description: 'Tailored marketing plans to enhance visibility and customer engagement.',
            },
            {
                title: 'Legal and Compliance',
                description: 'Expert advice to navigate regulatory requirements and protect intellectual property.',
            },
        ],
    },
    {
        id: 'incubation-classes',
        icon: Cpu, // Changed from Lightbulb, more "cutting-edge"
        mainTitle: 'Incubation Classes',
        mainDescription:
            'Our incubation classes inspire creativity and equip entrepreneurs with cutting-edge skills to stay ahead of the competition. These sessions cover:',
        details: [
            { title: 'Industry Trends', description: 'Insights into emerging technologies and market dynamics.' },
            {
                title: 'Skill Development',
                description: 'Training in leadership, financial management, and innovation to build resilient businesses.',
            },
        ],
    },
    {
        id: 'pitch-coaching',
        icon: Mic, // Changed from Presentation, more direct
        mainTitle: 'Pitch and Presentation Coaching',
        mainDescription:
            'We help startups craft compelling pitches and presentations to captivate investors, partners, and stakeholders. Our coaching includes:',
        details: [
            { title: 'Storytelling Techniques', description: 'Building narratives that resonate with audiences.' },
            {
                title: 'Delivery Training',
                description: 'Enhancing confidence and clarity for high-impact presentations.',
            },
        ],
    },
    {
        id: 'mentorship-guidance',
        icon: Navigation, // Changed from Users, more "guidance" focused
        mainTitle: 'Mentorship and Strategic Guidance',
        mainDescription:
            'Our experienced team provides hands-on mentorship and strategic support, partnering with founders to refine their vision and achieve sustainable growth. Services include:',
        details: [
            { title: 'Product Development', description: 'Insights to optimise product-market fit and innovation.' },
            {
                title: 'Scaling Strategies',
                description: 'Guidance on operational efficiency, customer acquisition, and market expansion.',
            },
        ],
    },
    {
        id: 'funding',
        icon: TrendingUp, // Changed from DollarSign, more growth-oriented
        mainTitle: 'Funding for Startups',
        mainDescription:
            'We provide critical capital to fuel early-stage startups, turning bold ideas into successful enterprises. Our funding support includes:',
        details: [
            { title: 'Seed and Early-Stage Investment', description: 'Flexible financing tailored to startup needs.' },
            {
                title: 'Investor Connections',
                description: 'Access to our extensive network of investors to secure additional funding.',
            },
        ],
    },
];

const OurServices: React.FC = () => {
    return (
        <section className="bg-transparent border border-brand_teal py-16 md:py-24 w-full lg:rounded-tr-[50rem] lg:rounded-tl-[50rem]">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-brand_teal text-sm font-semibold tracking-wide uppercase">
                        Our Services
                    </h2>
                    <p className="mt-2 text-3xl lg:text-4xl font-bold tracking-tight text-brand_text_primary sm:text-4xl">
                        Empowering Visionaries, Building Futures
                    </p>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-brand_text_secondary">
                        At We Invest, we are dedicated to transforming innovative ideas into thriving businesses. Our services guide startups through every stage, ensuring success in competitive markets.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {servicesData.map((service) => (
                        <div
                            key={service.id}
                            className="bg-white p-6 rounded-xl border border-brand_teal/10 shadow-lg hover:shadow-2xl transition-shadow
                             duration-500 ease-in-out flex flex-col group"
                        >
                            <div className="flex-shrink-0">
                                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-brand_green
                                 text-white group-hover:bg-brand_teal transition-colors duration-300">
                                    <service.icon className="h-6 w-6" aria-hidden="true" />
                                </div>
                            </div>
                            <div className="mt-4 flex-grow text-justify">
                                <h3 className="text-xl font-semibold text-brand_teal group-hover:text-brand_green transition-colors duration-300">
                                    {service.mainTitle}
                                </h3>
                                <p className="mt-2 text-sm text-brand_text_secondary">
                                    {service.mainDescription}
                                </p>
                                {service.details && service.details.length > 0 && (
                                    <ul className="mt-3 space-y-2 text-sm">
                                        {service.details.map((detail, index) => (
                                            <li key={index} className="flex items-start">
                                                <CheckCircle className="flex-shrink-0 h-5 w-5 text-brand_green mr-2 mt-0.5" />
                                                <span className="text-brand_text_secondary">
                                                    <strong className="text-brand_text_primary">{detail.title}:</strong> {detail.description}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurServices;