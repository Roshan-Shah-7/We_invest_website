// "use client";

// import Image from "next/image"
// import { Badge } from "@/components/ui/Badge"
// import { colors, aboutImages } from "@/data/aboutData"
// import React, { useRef, useEffect } from 'react';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// gsap.registerPlugin(ScrollTrigger);

// const OurStorySection = () => {
//     const sectionRef = useRef<HTMLElement>(null);
//     const introBadgeRef = useRef<HTMLDivElement>(null);
//     const introTitleRef = useRef<HTMLHeadingElement>(null);
//     const introParagraphRef = useRef<HTMLParagraphElement>(null);
//     const imageContainerRef = useRef<HTMLDivElement>(null);
//     const beginningTextRef = useRef<HTMLDivElement>(null);
//     const todayTomorrowRef = useRef<HTMLDivElement>(null);

//     useEffect(() => {
//         if (sectionRef.current) {
//             // Intro text animation
//             gsap.fromTo(
//                 [introBadgeRef.current, introTitleRef.current, introParagraphRef.current],
//                 { opacity: 0, y: 50 },
//                 {
//                     opacity: 1,
//                     y: 0,
//                     duration: 0.8,
//                     stagger: 0.15,
//                     ease: 'power3.out',
//                     scrollTrigger: {
//                         trigger: sectionRef.current,
//                         start: 'top 80%',
//                         toggleActions: 'play none none none',
//                     },
//                 }
//             );

//             // Image and "The Beginning" text animation
//             gsap.fromTo(
//                 imageContainerRef.current,
//                 { opacity: 0, x: -100 },
//                 {
//                     opacity: 1,
//                     x: 0,
//                     duration: 1,
//                     ease: 'power3.out',
//                     scrollTrigger: {
//                         trigger: imageContainerRef.current,
//                         start: 'top 80%',
//                         toggleActions: 'play none none none',
//                     },
//                 }
//             );

//             gsap.fromTo(
//                 beginningTextRef.current,
//                 { opacity: 0, x: 100 },
//                 {
//                     opacity: 1,
//                     x: 0,
//                     duration: 1,
//                     ease: 'power3.out',
//                     scrollTrigger: {
//                         trigger: beginningTextRef.current,
//                         start: 'top 80%',
//                         toggleActions: 'play none none none',
//                     },
//                 }
//             );

//             // Today & Tomorrow block animation
//             gsap.fromTo(
//                 todayTomorrowRef.current,
//                 { opacity: 0, scale: 0.9 },
//                 {
//                     opacity: 1,
//                     scale: 1,
//                     duration: 0.8,
//                     ease: 'power3.out',
//                     scrollTrigger: {
//                         trigger: todayTomorrowRef.current,
//                         start: 'top 80%',
//                         toggleActions: 'play none none none',
//                     },
//                 }
//             );
//         }
//     }, []);

//     return (
//         <section ref={sectionRef} className="py-24 px-4" style={{ backgroundColor: colors.soft_white }}>
//             <div className="container mx-auto max-w-6xl">
//                 <div className="text-center mb-16">
//                     <div ref={introBadgeRef} className="inline-flex items-center px-3 py-1 bg-[#E8F5E9] rounded-full mb-6">
//                         <span className="text-[#00C853] text-sm font-medium">Our Journey</span>
//                     </div>
//                     <h2 ref={introTitleRef} className="text-4xl md:text-5xl font-bold text-[#333333] mb-6">The Story Behind We Invest</h2>
//                     <p ref={introParagraphRef} className="text-xl text-[#666666] max-w-3xl mx-auto">
//                         Founded on a bold vision to create an investment ecosystem that empowers founders to build meaningful,
//                         enduring businesses.
//                     </p>
//                 </div>

//                 <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
//                     <div ref={imageContainerRef}>
//                         <div className="relative">
//                             <div className="absolute inset-0 bg-gradient-to-br from-[#00695C]/20 to-[#00BCD4]/20 rounded-3xl transform -rotate-3"></div>
//                             <div className="relative bg-white rounded-3xl p-6 shadow-2xl">
//                                 <Image
//                                     src={aboutImages.ourStory}
//                                     alt="Company founding story"
//                                     width={500} // Assuming a width for h-80 (320px)
//                                     height={320} // h-80 is 320px
//                                     className="w-full h-80 object-cover rounded-2xl"
//                                 />
//                             </div>
//                         </div>
//                     </div>

//                     <div ref={beginningTextRef}>
//                         <h3 className="text-3xl font-bold text-[#333333] mb-6">The Beginning</h3>
//                         <p className="text-lg text-[#666666] mb-6 leading-relaxed">
//                             We Invest was founded on a bold vision: to create an investment ecosystem that empowers founders to
//                             build meaningful, enduring businesses. This vision came to life through the leadership of{" "}
//                             <span className="font-semibold text-[#00695C]">Laxmi Dangol</span>, whose expertise in forging strong
//                             relationships and driving operational excellence laid the foundation for our success.
//                         </p>
//                         <p className="text-lg text-[#666666] leading-relaxed">
//                             She assembled a team of passionate professionals, each contributing unique strengths to create a
//                             powerhouse dedicated to transforming ideas into industry leaders.
//                         </p>
//                     </div>
//                 </div>

//                 <div ref={todayTomorrowRef} className="relative">
//                     <div className="absolute inset-0 bg-brand_teal rounded-3xl"></div>
//                     <div className="relative bg-brand_teal rounded-3xl p-12 text-white text-center">
//                         <h3 className="text-3xl font-bold mb-6">Today & Tomorrow</h3>
//                         <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
//                             Today, We Invest stands as a platform for founders who are ready to dream big and make it happen. Guided
//                             by innovation, collaboration, and a commitment to excellence, we are shaping the future of investment
//                             and creating lasting value for all stakeholders.
//                         </p>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     )
// }

// export default OurStorySection;






"use client";

import Image from "next/image"
import { Badge } from "@/components/ui/Badge"
import { colors, aboutImages } from "@/data/aboutData"
import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const OurStorySection = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const introBadgeRef = useRef<HTMLDivElement>(null);
    const introTitleRef = useRef<HTMLHeadingElement>(null);
    const introParagraphRef = useRef<HTMLParagraphElement>(null);
    const imageContainerRef = useRef<HTMLDivElement>(null);
    const beginningTextRef = useRef<HTMLDivElement>(null);
    const todayTomorrowRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (sectionRef.current) {
            // Intro text animation
            gsap.fromTo(
                [introBadgeRef.current, introTitleRef.current, introParagraphRef.current],
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    stagger: 0.15,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top 80%',
                        toggleActions: 'play none none none',
                    },
                }
            );

            // Image and "The Beginning" text animation
            gsap.fromTo(
                imageContainerRef.current,
                { opacity: 0, x: -100 },
                {
                    opacity: 1,
                    x: 0,
                    duration: 1,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: imageContainerRef.current,
                        start: 'top 80%',
                        toggleActions: 'play none none none',
                    },
                }
            );

            gsap.fromTo(
                beginningTextRef.current,
                { opacity: 0, x: 100 },
                {
                    opacity: 1,
                    x: 0,
                    duration: 1,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: beginningTextRef.current,
                        start: 'top 80%',
                        toggleActions: 'play none none none',
                    },
                }
            );

            // Today & Tomorrow block animation
            gsap.fromTo(
                todayTomorrowRef.current,
                { opacity: 0, scale: 0.9 },
                {
                    opacity: 1,
                    scale: 1,
                    duration: 0.8,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: todayTomorrowRef.current,
                        start: 'top 80%',
                        toggleActions: 'play none none none',
                    },
                }
            );
        }
    }, []);

    return (
        <section ref={sectionRef} className="py-24 px-4" style={{ backgroundColor: colors.soft_white }}>
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-16">
                    <div ref={introBadgeRef} className="inline-flex items-center px-3 py-1 bg-[#E8F5E9] rounded-full mb-6">
                        <span className="text-[#00C853] text-sm font-medium">Our Journey</span>
                    </div>
                    <h2 ref={introTitleRef} className="text-4xl md:text-5xl font-bold text-[#333333] mb-6">The Story Behind We Invest</h2>
                    <p ref={introParagraphRef} className="text-xl text-[#666666] max-w-3xl mx-auto">
                        Our story is one of resilience, global experience, and a heartfelt return home—a founder's journey to turn personal struggle into a powerful vision for Nepal's future.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 items-start gap-16 mb-32">
                    <div ref={imageContainerRef} className="lg:sticky lg:top-20">
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-[#00695C]/20 to-[#00BCD4]/20 rounded-3xl transform -rotate-3"></div>
                            <div className="relative bg-white rounded-3xl p-6 shadow-2xl">
                                <Image
                                    src={aboutImages.ourStory}
                                    alt="Company founding story"
                                    width={500}
                                    height={320}
                                    className="w-full h-80 object-cover rounded-2xl"
                                />
                            </div>
                        </div>
                    </div>

                    <div ref={beginningTextRef}>
                        <h3 className="text-3xl font-bold text-[#333333] mb-6">The Beginning</h3>
                        <p className="text-lg text-[#666666] mb-6 leading-relaxed text-justify">
                            <b>Laxmi's</b> early career was spent working in retail and wholesale businesses in Nepal. But when
                            her financial struggles intensified, it became a deeply personal blow, forcing her to leave everything
                            familiar behind and seek a new path in Dubai.
                        </p>
                        <p className="text-lg text-[#666666] mb-6 leading-relaxed text-justify">
                            Life there became an intense education. She took on various roles in sales, marketing, and eventually,
                            a back-office position in banking. Through these experiences, she connected with international professionals,
                            gaining a profound understanding of global finance. This exposure wasn't just about work; it opened her eyes to
                            possibilities she'd never imagined. She gained a quiet confidence, realizing she had a knack for making investments
                            and managing funds, making other investments along the way.
                        </p>
                        <p className="text-lg text-[#666666] leading-relaxed text-justify">
                            Driven by this newfound insight and a deep desire to contribute to her homeland, Laxmi
                            returned to Nepal. She saw the immense, untapped investment potential here, a broad horizon waiting to be explored.
                            The idea of establishing an investment company in Nepal, her home, became her powerful calling.
                        </p>
                        <p className="text-lg text-[#666666] leading-relaxed text-justify">
                            The search for the right team was a patient, determined process. She sought individuals who shared her vision,
                            her quiet resolve, and her belief in Nepal's future.
                            Finding the perfect people and then the ideal location for her company required careful consideration and time.
                        </p>
                        <p className="text-lg text-[#666666] leading-relaxed text-justify">
                            Now, her investment company is a reality and is thriving. It stands as a quiet testament to her unwavering spirit, her deep connection to her roots,
                            and her commitment to bringing her global experience home to Nepal.
                        </p>
                    </div>
                </div>

                <div ref={todayTomorrowRef} className="relative">
                    <div className="absolute inset-0 bg-brand_teal rounded-3xl"></div>
                    <div className="relative bg-brand_teal rounded-3xl p-12 text-white text-center">
                        <h3 className="text-3xl font-bold mb-6">Today & Tomorrow</h3>
                        <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
                            Now, her investment company is a reality and is thriving. It stands as a quiet testament to her unwavering spirit, her deep connection to her roots, and her commitment to bringing her global experience home to Nepal.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OurStorySection;