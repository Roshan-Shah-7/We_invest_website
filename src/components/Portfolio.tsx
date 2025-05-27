import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'; // Correct import path
import { ExternalLink } from 'lucide-react'; // Import ExternalLink icon
import { Button } from '@/components/ui/button'; // Import Button component

gsap.registerPlugin(ScrollTrigger); // Register once globally

interface SuccessStory {
    company: string;
    achievement: string;
    description: string;
    website: string;
}

const Portfolio: React.FC = () => {
    const lineRef = useRef<SVGPathElement>(null);
    const cardsContainerRef = useRef<HTMLDivElement>(null); // Ref for the grid container
    const cardsRef = useRef<Array<HTMLDivElement | null>>([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Line animation
            if (lineRef.current) {
                gsap.from(lineRef.current, {
                    scrollTrigger: {
                        trigger: lineRef.current,
                        start: 'top 80%',
                        end: 'bottom 20%',
                        scrub: 1,
                    },
                    strokeDashoffset: 2000,
                    ease: 'none',
                });
            }

            // Cards animation
            if (cardsContainerRef.current) {
                gsap.from(cardsRef.current, {
                    scrollTrigger: {
                        trigger: cardsContainerRef.current,
                        start: 'top 80%', // Trigger when the container enters view
                        once: true,
                    },
                    opacity: 0,
                    y: 50,
                    duration: 1,
                    stagger: 0.15, // Stagger the animation for each card
                    ease: 'power3.out',
                });
            }
        });

        return () => ctx.revert();
    }, []);

    const successStories: SuccessStory[] = [
        {
            company: 'GreenTech',
            achievement: 'Raised $2M in Funding',
            description: 'A sustainable energy startup focused on renewable solutions. With our funding and mentorship, GreenTech Innovate scaled their operations and secured a $2M investment round within 18 months.',
            website: 'https://greentechinnovate.com', // Trimmed space
        },
        {
            company: 'HealthSync',
            achievement: 'Expanded to 3 New Markets',
            description: 'A health-tech company revolutionising patient care. Through our School of Startups programme, HealthSync gained access to strategic guidance, enabling them to expand into three new markets in just one year.',
            website: 'https://healthsync.com', // Trimmed space
        },
        {
            company: 'EduFuture',
            achievement: 'Grew User Base by 300%',
            description: 'An ed-tech platform enhancing learning through AI. With our incubation classes and pitch coaching, EduFuture Labs refined their product and pitch, leading to a 300% growth in their user base.',
            website: 'https://edufuturelabs.com', // Trimmed space
        },
        {
            company: 'FinFlow Analytics',
            achievement: 'Formed Strategic Partnerships',
            description: 'A fintech startup streamlining financial operations. Our mentorship and strategic support helped FinFlow Analytics forge key partnerships, positioning them as a leader in their sector.',
            website: 'https://finflowanalytics.com', // Trimmed space
        },
    ];

    return (
        <section className="relative py-20 overflow-hidden">
            {/* Animated SVG Line */}
            <svg
                className="absolute top-0 left-0 w-full h-full pointer-events-none"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
            >
                <path
                    ref={lineRef}
                    d="M0 0 L100 100"
                    strokeWidth={2}
                    stroke="#e5e7eb" // Consider using a theme color here if available, e.g., 'stroke-border'
                    strokeLinecap="round"
                    vectorEffect="non-scaling-stroke"
                    strokeDasharray={2000}
                    className="transform rotate-180"
                />
            </svg>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl font-extrabold text-center text-foreground mb-12">
                    Our Portfolio
                </h2>

                <div className="mb-16 text-center">
                    <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                        We take pride in the startups we’ve supported, helping them transform their ideas into impactful businesses. Here’s a glimpse of the innovative ventures we’ve empowered on their journey to success.
                    </p>
                </div>

                <div ref={cardsContainerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
                    {successStories.map((story, index) => (
                        <div
                            key={story.company}
                            ref={(el) => { cardsRef.current[index] = el; }}
                            className="bg-white rounded-2xl p-6 shadow-lg transform transition-transform hover:scale-[1.02]"
                        >
                            <div className="mb-4">
                                <h3 className="text-xl font-semibold text-primary">
                                    {story.company}
                                </h3>
                                <p className="text-muted-foreground font-medium mt-2">
                                    {story.achievement}
                                </p>
                            </div>
                            <p className="text-muted-foreground mb-4">{story.description}</p>
                            <a
                                href={story.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-brand_teal hover:text-brand_teal/80 font-medium flex items-center gap-2 mt-4"
                            >
                                Visit Website
                                <ExternalLink className="w-4 h-4" />
                            </a>
                        </div>
                    ))}
                </div>

                <div className="text-center">
                    <h3 className="text-3xl font-bold text-foreground mb-6">
                        Be Our Next Success Story
                    </h3>
                    <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                        Inspired by these achievements? Let’s work together to turn your vision into the next big success.
                    </p>
                    <Button size="lg" className="rounded-full bg-brand_teal hover:bg-brand_teal/90">
                        Apply Now
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
