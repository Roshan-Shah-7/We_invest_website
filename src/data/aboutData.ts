import Building from "@/assets/about/building.jpg";
import Mission from "@/assets/about/mission.jpg";
import OurStory from "@/assets/about/our story.jpg";

export const colors = {
    brand_green: '#00C853',
    brand_teal: '#00695C',
    soft_white: '#F5F7FA',
    dark_gray: '#333333',
    warm_gray: '#E0E0E0',
    bright_cyan: '#00BCD4',
    golden_yellow: '#FFD54F',
}

export interface TeamMember {
    name: string;
    role: string;
    description: string;
    avatarFallback: string;
    avatarSrc: string;
    bgColorFrom: string;
    bgColorTo: string;
    badgeColor: string;
}

export const teamMembers: TeamMember[] = [
    {
        name: "Laxmi Dangol",
        role: "Founding Leader",
        description: "Key leader Laxmi drives operational efficiency and financial performance, steering the company's strategic direction to ensure sustainable growth for our partners.",
        avatarFallback: "LD",
        avatarSrc: "/placeholder.svg?height=96&width=96",
        bgColorFrom: "#00BCD4",
        bgColorTo: "#00695C",
        badgeColor: "#00BCD4",
    },
    {
        name: "Keshab Jaisi",
        role: "Talent Scout",
        description: "Talent scout Keshab identifies high-potential ventures and builds strategic partnerships, turning visionary ideas into reality with his sharp insight and expertise.",
        avatarFallback: "KJ",
        avatarSrc: "/placeholder.svg?height=96&width=96",
        bgColorFrom: "#00BCD4",
        bgColorTo: "#00695C",
        badgeColor: "#00BCD4",
    },
    {
        name: "Bipendra Chudal",
        role: "Analytics Expert",
        description: "Analytical expert Bipendra provides data-driven insights for investment strategies, keeping us ahead in dynamic markets with his sharp analytical skills.",
        avatarFallback: "BC",
        avatarSrc: "/placeholder.svg?height=96&width=96",
        bgColorFrom: "#00BCD4",
        bgColorTo: "#00695C",
        badgeColor: "#00BCD4",
    },
    {
        name: "Yubraj Sharma",
        role: "NEPSE Analyst",
        description: "NEPSE analyst Yubraj optimises portfolio performance by analysing Nepal's stock market trends, delivering actionable insights for local investments.",
        avatarFallback: "YS",
        avatarSrc: "/placeholder.svg?height=96&width=96",
        bgColorFrom: "#00C853",
        bgColorTo: "#00695C",
        badgeColor: "#00C853",
    },
    {
        name: "Sushil Silwal",
        role: "Financial & Project Advisor",
        description: "As a financial and project advisor, Sushil ensures ventures are financially sound with strategic guidance on funding and project execution.",
        avatarFallback: "SS",
        avatarSrc: "/placeholder.svg?height=96&width=96",
        bgColorFrom: "#00695C",
        bgColorTo: "#075661",
        badgeColor: "#00C853",
    },
    {
        name: "Jyotika Thapa",
        role: "Operations Head",
        description: "Operations Head, Jyotika, streamlines workflows and enhances efficiency, ensuring seamless project execution with her strategic leadership and operational expertise.",
        avatarFallback: "JT",
        avatarSrc: "/placeholder.svg?height=96&width=96",
        bgColorFrom: "#00C853",
        bgColorTo: "#00BCD4",
        badgeColor: "#00C853",
    },
    {
        name: "Ana Magar",
        role: "Market Analyst",
        description: "Head Research Analyst, Ana drives strategic decisions with in-depth market research, identifying high-potential opportunities through data-driven insights.",
        avatarFallback: "AM",
        avatarSrc: "/placeholder.svg?height=96&width=96",
        bgColorFrom: "#00695C",
        bgColorTo: "#00C853",
        badgeColor: "#00695C",
    },
    {
        name: "Alish Dangol",
        role: "Social Media Manager",
        description: "Social media manager Alish boosts brand visibility with creative digital campaigns, connecting our community through innovative engagement strategies.",
        avatarFallback: "AD",
        avatarSrc: "/placeholder.svg?height=96&width=96",
        bgColorFrom: "#00695C",
        bgColorTo: "#00BCD4",
        badgeColor: "#00695C",
    },
    {
        name: "Roisha Dangol",
        role: "HR Manager",
        description: "HR Manager Roisha fosters a vibrant team culture, recruiting top talent and driving employee growth to support our mission with strategic human resources expertise.",
        avatarFallback: "RD",
        avatarSrc: "/placeholder.svg?height=96&width=96",
        bgColorFrom: "#00695C",
        bgColorTo: "#00BCD4",
        badgeColor: "#00695C",
    },
];

export const aboutImages = {
    building: Building,
    mission: Mission,
    ourStory: OurStory,
};
