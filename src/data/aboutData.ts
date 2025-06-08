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
        description: "As our Founding Leader, Laxmi is instrumental in driving operational efficiency and financial performance. She steers the company's strategic direction, ensuring sustainable growth for all our partners.",
        avatarFallback: "LD",
        avatarSrc: "/placeholder.svg?height=96&width=96",
        bgColorFrom: "#00BCD4",
        bgColorTo: "#00695C",
        badgeColor: "#00BCD4",
    },
    {
        name: "Keshab Jaisi",
        role: "Talent Scout",
        description: "Keshab is our keen Talent Scout, expertly identifying high-potential ventures and cultivating strategic partnerships. His sharp insight and expertise are key to turning visionary ideas into tangible realities.",
        avatarFallback: "KJ",
        avatarSrc: "/placeholder.svg?height=96&width=96",
        bgColorFrom: "#00BCD4",
        bgColorTo: "#00695C",
        badgeColor: "#00BCD4",
    },
    {
        name: "Bipendra Chudal",
        role: "Analytics Expert",
        description: "Our Analytics Expert, Bipendra, provides crucial data-driven insights that inform our investment strategies. His sharp analytical skills keep us ahead in dynamic markets.",
        avatarFallback: "BC",
        avatarSrc: "/placeholder.svg?height=96&width=96",
        bgColorFrom: "#00BCD4",
        bgColorTo: "#00695C",
        badgeColor: "#00BCD4",
    },
    {
        name: "Yubraj Sharma",
        role: "NEPSE Analyst",
        description: "Yubraj, our NEPSE Analyst, optimizes portfolio performance by meticulously analyzing Nepal's stock market trends. He delivers actionable insights crucial for our local investments.",
        avatarFallback: "YS",
        avatarSrc: "/placeholder.svg?height=96&width=96",
        bgColorFrom: "#00C853",
        bgColorTo: "#00695C",
        badgeColor: "#00C853",
    },
    {
        name: "Sushil Silwal",
        role: "Financial & Project Advisor",
        description: "As our Financial & Project Advisor, Sushil ensures that ventures are financially sound. He provides strategic guidance on funding and precise project execution.",
        avatarFallback: "SS",
        avatarSrc: "/placeholder.svg?height=96&width=96",
        bgColorFrom: "#00695C",
        bgColorTo: "#075661",
        badgeColor: "#00C853",
    },
    {
        name: "Jyotika Thapa",
        role: "Operations Head",
        description: "Jyotika, our Operations Head, is responsible for streamlining workflows and enhancing efficiency. Her strategic leadership and operational expertise ensure seamless project execution.",
        avatarFallback: "JT",
        avatarSrc: "/placeholder.svg?height=96&width=96",
        bgColorFrom: "#00C853",
        bgColorTo: "#00BCD4",
        badgeColor: "#00C853",
    },
    {
        name: "Ana Magar",
        role: "Market Analyst",
        description: "Ana, our Head Research Analyst, drives strategic decisions through in-depth market research. She excels at identifying high-potential opportunities with her data-driven insights.",
        avatarFallback: "AM",
        avatarSrc: "/placeholder.svg?height=96&width=96",
        bgColorFrom: "#00695C",
        bgColorTo: "#00C853",
        badgeColor: "#00695C",
    },
    {
        name: "Alish Dangol",
        role: "Social Media Manager",
        description: "Alish, our Social Media Manager, boosts brand visibility through creative digital campaigns. He expertly connects our community with innovative engagement strategies.",
        avatarFallback: "AD",
        avatarSrc: "/placeholder.svg?height=96&width=96",
        bgColorFrom: "#00695C",
        bgColorTo: "#00BCD4",
        badgeColor: "#00695C",
    },
    {
        name: "Roisha Dangol",
        role: "HR Manager",
        description: "As HR Manager, Roisha is dedicated to fostering a vibrant team culture. She recruits top talent and drives employee growth, providing strategic human resources expertise essential to our mission.",
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
