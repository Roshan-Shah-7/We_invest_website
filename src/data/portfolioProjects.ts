import { ExternalLink, Github, ArrowUpRight, Star } from "lucide-react"
import type React from "react"

export interface Project {
    id: number
    title: string
    description: string
    image: string
    liveUrl: string
    githubUrl: string
    technologies: string[]
    category: string
    year: string
    featured?: boolean
    size?: "small" | "medium" | "large"
}

export const projects: Project[] = [
    {
        id: 1,
        title: "Enterprise Dashboard Analytics",
        description:
            "A comprehensive business intelligence platform featuring real-time data visualization, advanced analytics, and customizable reporting tools for enterprise clients.",
        image: "/placeholder.svg?height=500&width=700",
        liveUrl: "https://example.com",
        githubUrl: "https://github.com/example/dashboard",
        technologies: ["Next.js", "TypeScript", "D3.js", "PostgreSQL"],
        category: "Web Application",
        year: "2024",
        featured: true,
        size: "large",
    },
    {
        id: 2,
        title: "AI Content Management",
        description: "Intelligent CMS with automated tagging and AI-driven content recommendations.",
        image: "/placeholder.svg?height=300&width=400",
        liveUrl: "https://example.com",
        githubUrl: "https://github.com/example/ai-cms",
        technologies: ["React", "Python", "TensorFlow"],
        category: "AI/ML",
        year: "2024",
        size: "small",
    },
    {
        id: 3,
        title: "Financial Trading Platform",
        description:
            "High-performance trading platform with real-time market data, advanced charting tools, and algorithmic trading capabilities.",
        image: "/placeholder.svg?height=400&width=600",
        liveUrl: "https://example.com",
        githubUrl: "https://github.com/example/trading",
        technologies: ["Vue.js", "Node.js", "WebSocket", "Redis"],
        category: "FinTech",
        year: "2023",
        featured: true,
        size: "medium",
    },
    {
        id: 4,
        title: "Healthcare Management",
        description: "HIPAA-compliant healthcare platform with telemedicine integration.",
        image: "/placeholder.svg?height=300&width=400",
        liveUrl: "https://example.com",
        githubUrl: "https://github.com/example/healthcare",
        technologies: ["Angular", "C#", ".NET Core"],
        category: "Healthcare",
        year: "2023",
        size: "small",
    },
    {
        id: 5,
        title: "E-Learning Platform",
        description:
            "Interactive online learning platform with video streaming, progress tracking, and collaborative learning tools for educational institutions.",
        image: "/placeholder.svg?height=400&width=600",
        liveUrl: "https://example.com",
        githubUrl: "https://github.com/example/elearning",
        technologies: ["Next.js", "Prisma", "Stripe", "Vercel"],
        category: "Education",
        year: "2023",
        size: "medium",
    },
    {
        id: 6,
        title: "Supply Chain Optimization",
        description: "Advanced supply chain management with predictive analytics and real-time tracking.",
        image: "/placeholder.svg?height=300&width=400",
        liveUrl: "https://example.com",
        githubUrl: "https://github.com/example/supply-chain",
        technologies: ["React", "Python", "Docker"],
        category: "Enterprise",
        year: "2022",
        size: "small",
    },
]
