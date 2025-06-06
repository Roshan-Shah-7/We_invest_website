import { useState, useRef, useLayoutEffect } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface Video {
    id: string;
    title: string;
    description?: string;
}

interface VideoGalleryProps {
    videos: Video[];
}

const VideoGallery = ({ videos }: VideoGalleryProps) => {
    const [activeVideo, setActiveVideo] = useState<string | null>(null);
    const sectionRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const dividerRef = useRef<HTMLDivElement>(null);
    const videoRefs = useRef<(HTMLDivElement | null)[]>([]);

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top 80%',
                end: 'bottom 20%',
                toggleActions: 'play none none none',
            },
        });

        // Animate title and divider
        tl.fromTo(
            [titleRef.current, dividerRef.current],
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: 'power3.out' }
        );

        // Animate video cards
        videoRefs.current.forEach((card, index) => {
            if (card) {
                gsap.fromTo(
                    card,
                    { opacity: 0, y: 50, scale: 0.95 },
                    {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        duration: 0.8,
                        ease: 'power3.out',
                        scrollTrigger: {
                            trigger: card,
                            start: 'top 90%',
                            toggleActions: 'play none none none',
                        },
                    }
                );
            }
        });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    const toggleVideo = (id: string) => {
        setActiveVideo(activeVideo === id ? null : id);
    };

    return (
        <div ref={sectionRef} className="mx-auto py-12 px-4 bg-[#F5F7FA] w-full">
            <div className="text-center mb-12">
                <h1 ref={titleRef} className="text-4xl font-bold mb-4" style={{ color: '#00695C' }}>
                    Real-Time NEPSE Analysis Learn From The Best
                    <br />
                    Watch the Recorded Session Now
                </h1>
                <div ref={dividerRef} className="w-20 h-1 mx-auto bg-[#00695C] rounded-full"></div>
            </div>

            <div className="max-w-6xl m-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {videos.map((video, index) => (
                    <div
                        key={video.id}
                        ref={(el: HTMLDivElement | null) => { videoRefs.current[index] = el; }}
                        className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
                    >
                        <div className="relative cursor-pointer" onClick={() => toggleVideo(video.id)}>
                            {/* Video thumbnail or player */}
                            {activeVideo === video.id ? (
                                <div className="aspect-video">
                                    <iframe
                                        src={`https://www.youtube.com/embed/${video.id}?autoplay=1`}
                                        title={video.title}
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        className="w-full h-full"
                                        loading="lazy"
                                    />
                                </div>
                            ) : (
                                <>
                                    <div className="aspect-video bg-gray-200 relative">
                                        <Image
                                            src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                                            alt={video.title}
                                            width={640} // Common width for 16:9 aspect ratio
                                            height={360} // Common height for 16:9 aspect ratio
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            className="object-cover w-full h-full" // Ensure image covers the div
                                        />
                                        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                                            <div className="w-16 h-16 rounded-full bg-[#00695C] flex items-center justify-center">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-8 w-8 ml-1 text-white"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>

                        {/* Video info */}
                        <div className="p-5">
                            <div className="flex items-center justify-between mb-3">
                                <button
                                    onClick={() => toggleVideo(video.id)}
                                    className="px-4 py-2 rounded-full font-medium flex items-center"
                                    style={{ backgroundColor: '#00695C', color: 'white' }}
                                >
                                    {activeVideo === video.id ? (
                                        <>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                                            </svg>
                                            Close
                                        </>
                                    ) : (
                                        <>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                                            </svg>
                                            Play
                                        </>
                                    )}
                                </button>
                                {video.description && (
                                    <p className="text-gray-600 font-bold mt-2 line-clamp-2">
                                        {video.description}
                                    </p>
                                )}
                            </div>

                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default VideoGallery;
