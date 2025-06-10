import React, { useRef, useLayoutEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Quote } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface Testimonial {
    quote: string;
    name: string;
    title: string;
    company: string;
    logo: string;
}

const Testimonials: React.FC = () => {
    const sectionRef = useRef(null);
    const q = gsap.utils.selector(sectionRef);

    const testimonials: Testimonial[] = [
        {
            quote: "We invest's mentorship helped turn my software concept into reality. They didn't just investment in my idea, they provided a space team and professional assistance crucial for it's development.",
            name: 'Roshan Shah',
            title: 'Founder',
            company: 'AgroSewa',
            logo: 'https://placehold.co/600x600/E5E7EB/0F172A?text=EcoInnovate&font=noto',
        },
        {
            quote: "We Invest's support for product expansion and distribution was instrumental. They made it possible for us to enter three new markets in a single year, which is an incredible accomplishment.",
            name: 'Urja Tamrakar',
            title: 'Co-Founder',
            company: 'Vatsala Aroma Products',
            logo: 'https://placehold.co/600x600/E5E7EB/0F172A?text=HealthSync&font=noto',
        },
        {
            quote: 'Their pitch coaching was a game-changer. We refined our approach and grew our user base by 300%—We Invest believed in us from day one.',
            name: 'Aruna Limbu',
            title: 'CEO',
            company: 'Krishi Venture',
            logo: 'https://placehold.co/600x600/E5E7EB/0F172A?text=EduFuture&font=noto',
        },
    ];

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 60%",
                end: "bottom 20%",
                toggleActions: "play none none none",
            }
        });

        tl.fromTo(q("h2"),
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
        )
            .fromTo(q(".mb-16 > p"),
                { opacity: 0, y: 50 },
                { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
                "<0.2"
            )
            .fromTo(q(".grid > div"),
                { opacity: 0, y: 50 },
                { opacity: 1, y: 0, duration: 1, stagger: 0.1, ease: "power3.out" },
                "<0.5"
            )
            .fromTo(q(".text-center > h3, .text-center > p, .text-center > a"),
                { opacity: 0, y: 50 },
                { opacity: 1, y: 0, duration: 1, stagger: 0.1, ease: "power3.out" },
                "<0.5"
            );

        return () => {
            tl.kill();
        };
    }, []);

    return (
        <section ref={sectionRef} className="py-20 bg-gradient-to-br from-background to-muted/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl lg:text-4xl font-extrabold text-center text-foreground mb-8">
                    What Our <span className='text-brand_teal'>Startups</span> Say
                </h2>

                <div className="mb-16 text-center">
                    <p className="lg:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                        We're proud to support visionaries who are changing the world. Hear from the founders we've helped succeed.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={testimonial.company}
                            className="bg-card rounded-2xl p-8 shadow-lg transform transition-all flex flex-col justify-between
                            hover:scale-[1.02] hover:border hover:border-brand_teal hover:shadow-xl"
                        >
                            <Quote className="w-8 h-8 text-brand_teal mb-4" />
                            <p className="text-foreground italic mb-6">
                                "{testimonial.quote}"
                            </p>
                            <div className="flex">
                                {/* <Image
                                    src={testimonial.logo}
                                    alt={`${testimonial.company} logo`}
                                    className="w-12 h-12 rounded-full mr-4 object-cover border border-border"
                                    width={48}
                                    height={48}
                                /> */}
                                <div>
                                    <h4 className="text-lg font-semibold text-start">
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
                        Ready to write your own success story? Let's make it happen together.
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
