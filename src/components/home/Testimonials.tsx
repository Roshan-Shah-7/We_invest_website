import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'; // Correct import path
import { Button } from '@/components/ui/button'; // Import Button component
import { Quote } from 'lucide-react'; // Import Quote icon
import Image from 'next/image'; // Import Image component
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger); // Register once globally

interface Testimonial {
    quote: string;
    name: string;
    title: string;
    company: string;
    logo: string;
}

const Testimonials: React.FC = () => {
    const cardsContainerRef = useRef<HTMLDivElement>(null); // Ref for the grid container
    const cardsRef = useRef<Array<HTMLDivElement | null>>([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Cards animation
            if (cardsContainerRef.current) {
                gsap.from(cardsRef.current, {
                    scrollTrigger: {
                        trigger: cardsContainerRef.current,
                        start: 'top 80%', // Revert to original start or adjust as needed
                        once: true,
                        // markers: true, // Removed debugging markers
                    },
                    opacity: 1, // Re-enable initial opacity
                    y: 50,
                    duration: 1,
                    stagger: 0.15, // Stagger the animation for each card
                    ease: 'power3.out',
                });
            }
        });

        return () => ctx.revert();
    }, []);

    const testimonials: Testimonial[] = [
        {
            quote: "We invest's mentorship help turn my software concept into reality. They didn't just investment in my idea, they provided a space team and professional assistance crucial for it's development.",
            name: 'Roshan Shah',
            title: 'Founder',
            company: 'AgroSewa',
            logo: 'https://placehold.co/600x600/E5E7EB/0F172A?text=EcoInnovate&font=noto', // Trimmed space
        },
        {
            quote: 'We make investments to support the product expansion and distribution.  We Invest made it possible to enter three new markets in a single year, which was an incredible accomplishment.',
            name: 'Urja Tamrakar',
            title: 'Co-Founder',
            company: 'Vatsala Aroma Products',
            logo: 'https://placehold.co/600x600/E5E7EB/0F172A?text=HealthSync&font=noto', // Trimmed space
        },
        {
            quote: 'Their pitch coaching was a game-changer. We refined our approach and grew our user base by 300%—We Invest believed in us from day one.',
            name: 'Aruna Limbu',
            title: 'CEO',
            company: 'Krishi Venture',
            logo: 'https://placehold.co/600x600/E5E7EB/0F172A?text=EduFuture&font=noto', // Trimmed space
        },
    ];

    return (
        <section className="py-20 bg-gradient-to-br from-background to-muted/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl font-extrabold text-center text-foreground mb-12">
                    What Our <span className='text-brand_teal'>Startups</span> Say
                </h2>

                <div className="mb-16 text-center">
                    <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                        We&apos;re proud to support visionaries who are changing the world. Hear from the founders we&apos;ve helped succeed.
                    </p>
                </div>

                <div ref={cardsContainerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={testimonial.company}
                            ref={(el) => { cardsRef.current[index] = el; }}
                            className="bg-card rounded-2xl p-8 shadow-lg transform transition-all hover:scale-[1.02] hover:border hover:border-brand_teal hover:shadow-xl"
                        >
                            <Quote className="w-8 h-8 text-brand_teal mb-4" /> {/* Quote icon */}
                            <p className="text-foreground italic mb-6">
                                &quot;{testimonial.quote}&quot;
                            </p>
                            <div className="flex items-center">
                                <Image
                                    src={testimonial.logo}
                                    alt={`${testimonial.company} logo`}
                                    className="w-12 h-12 rounded-full mr-4 object-cover border border-border"
                                    width={48}
                                    height={48}
                                />
                                <div>
                                    <h4 className="text-lg font-semibold text-primary">
                                        {testimonial.name}
                                    </h4>
                                    <p className="text-muted-foreground text-sm">
                                        {testimonial.title}, {testimonial.company}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center">
                    <h3 className="text-3xl font-bold text-foreground mb-6">
                        Join Our Success Stories
                    </h3>
                    <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                        Ready to write your own success story? Let&apos;s make it happen together.
                    </p>
                    <Link href={'/contact'}>
                        <Button size="lg" className="rounded-full bg-brand_teal hover:bg-brand_teal/90">
                            Apply Now
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
