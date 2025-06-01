import type React from "react"
import { Award, TrendingUp, Users, Target } from "lucide-react"

export interface SuccessStory {
    company: string
    achievement: string
    description: string
    website: string
    icon: React.ReactNode
    metrics: string
}

export const successStories: SuccessStory[] = [
    {
        company: "GreenTech Innovate",
        achievement: "Raised $2M in Funding",
        description:
            "A sustainable energy startup focused on renewable solutions. With our funding and mentorship, GreenTech Innovate scaled their operations and secured a $2M investment round within 18 months.",
        website: "https://greentechinnovate.com",
        icon: <TrendingUp className="w-6 h-6" />,
        metrics: "$2M Raised",
    },
    {
        company: "HealthSync Solutions",
        achievement: "Expanded to 3 New Markets",
        description:
            "A health-tech company revolutionising patient care. Through our School of Startups programme, HealthSync gained access to strategic guidance, enabling them to expand into three new markets in just one year.",
        website: "https://healthsync.com",
        icon: <Target className="w-6 h-6" />,
        metrics: "3 New Markets",
    },
    {
        company: "EduFuture Labs",
        achievement: "Grew User Base by 300%",
        description:
            "An ed-tech platform enhancing learning through AI. With our incubation classes and pitch coaching, EduFuture Labs refined their product and pitch, leading to a 300% growth in their user base.",
        website: "https://edufuturelabs.com",
        icon: <Users className="w-6 h-6" />,
        metrics: "300% Growth",
    },
    {
        company: "FinFlow Analytics",
        achievement: "Formed Strategic Partnerships",
        description:
            "A fintech startup streamlining financial operations. Our mentorship and strategic support helped FinFlow Analytics forge key partnerships, positioning them as a leader in their sector.",
        website: "https://finflowanalytics.com",
        icon: <Award className="w-6 h-6" />,
        metrics: "Market Leader",
    },
]
