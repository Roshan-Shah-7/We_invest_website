import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'; // Correct import path
import { Button } from '@/components/ui/button'; // Import Button component

gsap.registerPlugin(ScrollTrigger); // Register once globally

interface VideoItem {
    title: string;
    description: string;
    videoId: string;
}

const Video: React.FC = () => {
    const cardsContainerRef = useRef<HTMLDivElement>(null); // Ref for the grid container
    const cardsRef = useRef<Array<HTMLDivElement | null>>([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Cards animation
            if (cardsContainerRef.current) {
                gsap.from(cardsRef.current, {
                    scrollTrigger: {
                        trigger: cardsContainerRef.current,
                        start: 'top 80%', // Trigger when the container enters view
                        once: true,
                        // markers: true, // Removed debugging markers
                    },
                    opacity: 0, // Re-enable initial opacity
                    scale: 0.9,
                    duration: 0.8,
                    stagger: 0.15, // Stagger the animation for each card
                    ease: 'power3.out',
                });
            }
        });

        return () => ctx.revert();
    }, []);

    const videos: VideoItem[] = [
        {
            title: 'How We Helped GreenTech Innovate Scale',
            description: 'See how strategic mentorship led to $2M funding',
            videoId: 'dQw4w9WgXcQ', // Reverted to a commonly embeddable YouTube ID
        },
        {
            title: 'A Day at Our Co-working Space',
            description: 'Experience our collaborative startup ecosystem',
            videoId: 'dQw4w9WgXcQ', // Reverted to a commonly embeddable YouTube ID
        },
        {
            title: 'Founder Pitch Masterclass',
            description: 'Learn from our expert coaching sessions',
            videoId: 'dQw4w9WgXcQ', // Reverted to a commonly embeddable YouTube ID
        },
    ];

    return (
        <section className="py-20 bg-[#F5F7FA] w-full">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl font-extrabold text-center text-foreground mb-12">
                    See Our Impact in <span className='text-brand_teal'>Action</span>
                </h2>

                <div ref={cardsContainerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                    {videos.map((video, index) => (
                        <div
                            key={video.title}
                            ref={(el) => { cardsRef.current[index] = el; }}
                            className="bg-card rounded-2xl overflow-hidden shadow-lg transform transition-transform hover:scale-[1.02] hover:border-4 hover:border-brand_teal"
                        >
                            <div className="relative h-0 pb-56.25%">
                                <iframe
                                    className="absolute top-0 left-0 w-full h-full"
                                    src={`https://www.youtube.com/embed/${video.videoId}?rel=0`} // Corrected to /embed/
                                    title={video.title}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-foreground mb-3">
                                    {video.title}
                                </h3>
                                <p className="text-muted-foreground">{video.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center">
                    <Button
                        asChild
                        size="lg"
                        className="rounded-full bg-brand_teal hover:bg-brand_teal/90"
                    >
                        <a
                            href="https://www.youtube.com/@WeInvestGlobal"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Watch More on YouTube
                        </a>
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default Video;
