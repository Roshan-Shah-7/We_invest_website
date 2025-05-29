import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

gsap.registerPlugin(ScrollTrigger);

interface SuccessStory {
    company: string;
    achievement: string;
    description: string;
    website: string;
}

const Portfolio: React.FC = () => {
    const lineRef = useRef<SVGPathElement>(null);
    const cardsContainerRef = useRef<HTMLDivElement>(null);
    const cardsRef = useRef<Array<HTMLDivElement | null>>([]);

    // Clear refs array on component mount or if story data could change dynamically
    useEffect(() => {
        cardsRef.current = [];
    }, []);


    useEffect(() => {
        const ctx = gsap.context(() => {
            if (lineRef.current) {
                gsap.from(lineRef.current, {
                    scrollTrigger: {
                        trigger: lineRef.current,
                        start: 'top 80%',
                        end: 'bottom 20%',
                        scrub: 1.5, // Slightly adjusted scrub
                    },
                    strokeDashoffset: lineRef.current.getTotalLength(), // Use actual length
                    strokeDasharray: lineRef.current.getTotalLength(),   // Use actual length
                    ease: 'none',
                });
            }

            if (cardsContainerRef.current && cardsRef.current.length > 0) {
                gsap.from(cardsRef.current.filter(el => el !== null), { // Filter out nulls
                    scrollTrigger: {
                        trigger: cardsContainerRef.current,
                        start: 'top 85%', // Start a bit later
                        once: true,
                    },
                    opacity: 0,
                    y: 60, // Slightly more travel
                    duration: 0.8,
                    stagger: 0.1, // Slightly faster stagger
                    ease: 'power3.out',
                });
            }
        });

        return () => ctx.revert();
    }, []); // Empty dependency array ensures this runs once on mount

    const successStories: SuccessStory[] = [
        {
            company: 'GreenTech Innovate',
            achievement: 'Raised $2M in Funding',
            description: 'A sustainable energy startup focused on renewable solutions. With our funding and mentorship, GreenTech Innovate scaled their operations and secured a $2M investment round within 18 months.',
            website: 'https://greentechinnovate.com',
        },
        {
            company: 'HealthSync Solutions',
            achievement: 'Expanded to 3 New Markets',
            description: 'A health-tech company revolutionising patient care. Through our School of Startups programme, HealthSync gained access to strategic guidance, enabling them to expand into three new markets in just one year.',
            website: 'https://healthsync.com',
        },
        {
            company: 'EduFuture Labs',
            achievement: 'Grew User Base by 300%',
            description: 'An ed-tech platform enhancing learning through AI. With our incubation classes and pitch coaching, EduFuture Labs refined their product and pitch, leading to a 300% growth in their user base.',
            website: 'https://edufuturelabs.com',
        },
        {
            company: 'FinFlow Analytics',
            achievement: 'Formed Strategic Partnerships',
            description: 'A fintech startup streamlining financial operations. Our mentorship and strategic support helped FinFlow Analytics forge key partnerships, positioning them as a leader in their sector.',
            website: 'https://finflowanalytics.com',
        },
    ];

    return (
        <section className="relative py-24 sm:py-32 overflow-hidden">
            {/* Animated SVG Line - Subtle Background Accent */}
            <svg
                className="absolute inset-0 w-full h-full pointer-events-none opacity-20 dark:opacity-10"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
            >
                <path
                    ref={lineRef}
                    d="M0 100 L100 0" // Bottom-left to top-right
                    strokeWidth={0.5} // Thinner line
                    stroke="currentColor"
                    className="text-slate-400 dark:text-slate-600" // Muted color
                    strokeLinecap="round"
                    vectorEffect="non-scaling-stroke"
                // strokeDasharray will be set by GSAP based on getTotalLength()
                />
            </svg>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10"> {/* z-10 to be above SVG */}
                <h2 className="text-4xl sm:text-5xl font-extrabold text-center text-foreground mb-16">
                    Our Portfolio
                </h2>

                <div className="mb-16 sm:mb-20 text-center">
                    <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                        We take pride in the startups we’ve supported, helping them transform their ideas into impactful businesses. Here’s a glimpse of the innovative ventures we’ve empowered on their journey to success.
                    </p>
                </div>

                <div ref={cardsContainerRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-20 sm:mb-24">
                    {successStories.map((story, index) => (
                        <div
                            key={story.company}
                            ref={(el) => { cardsRef.current[index] = el; }}
                            className="bg-card text-card-foreground rounded-xl p-6 sm:p-7 flex flex-col group
                                       shadow-lg hover:shadow-xl transform hover:scale-[1.02] 
                                       transition-all duration-300 ease-in-out border border-slate-200/60 dark:border-slate-700/60"
                        >
                            <div className="mb-4">
                                <h3 className="text-xl font-semibold text-primary group-hover:text-brand_teal transition-colors duration-300">
                                    {story.company}
                                </h3>
                                <p className="text-sm text-muted-foreground font-medium mt-2">
                                    {story.achievement}
                                </p>
                            </div>
                            <p className="text-sm text-muted-foreground mb-6 flex-grow">
                                {story.description}
                            </p>
                            <a
                                href={story.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm text-brand_teal hover:text-brand_teal/80 font-semibold flex items-center gap-1.5 mt-auto group" // mt-auto pushes to bottom
                            >
                                Visit Website
                                <ExternalLink className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                            </a>
                        </div>
                    ))}
                </div>

                <div className="text-center">
                    <h3 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                        Be Our Next Success Story
                    </h3>
                    <p className="text-muted-foreground max-w-2xl mx-auto mb-10">
                        Inspired by these achievements? Let’s work together to turn your vision into the next big success.
                    </p>
                    <Button size="lg" className="rounded-full bg-brand_teal hover:bg-brand_teal/90 px-8 py-3 text-base"> {/* Example custom padding for lg */}
                        Apply Now
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;