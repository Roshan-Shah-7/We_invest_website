import {
    Rocket,
    Layers,
    Cpu,
    Mic,
    Navigation,
    TrendingUp,
} from 'lucide-react';

export interface ServiceDetail {
    title: string;
    description: string;
}

export interface Service {
    id: string;
    icon: React.ElementType;
    mainTitle: string;
    mainDescription: string;
    details?: ServiceDetail[];
}

const servicesData: Service[] = [
    {
        id: 'school-of-startups',
        icon: Rocket,
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
        icon: Layers,
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
        icon: Cpu,
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
        icon: Mic,
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
        icon: Navigation,
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
        icon: TrendingUp,
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

export default servicesData;
