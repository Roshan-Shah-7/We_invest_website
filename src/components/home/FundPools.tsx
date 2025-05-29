// 'use client';

// import React, { useEffect, useRef, useCallback, useLayoutEffect } from 'react';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import Image from 'next/image';
// import Lottie from 'lottie-react';
// import bgAnimation from '../../assets/bg.json';

// import { fundPoolsData } from '@/data/fundPoolsData';
// import NumberedBadge from '@/components/ui/NumberedBadge';

// gsap.registerPlugin(ScrollTrigger);

// const FundPools: React.FC = () => {
//     const containerRef = useRef<HTMLDivElement>(null);
//     const cardsRef = useRef<HTMLDivElement[]>([]);

//     const addToRefs = useCallback((el: HTMLDivElement | null) => {
//         if (el && !cardsRef.current.includes(el)) {
//             cardsRef.current.push(el);
//         }
//     }, []);


//     useLayoutEffect(() => {
//         const cards = cardsRef.current;
//         if (!cards.length || !containerRef.current) return;

//         // Ensure ScrollTrigger is refreshed if viewport changes, etc.
//         ScrollTrigger.refresh();

//         // Initial state for all cards (stacked, mostly hidden)
//         gsap.set(cards, {
//             position: 'absolute',
//             top: 0,
//             left: 0,
//             right: 0,
//             scale: 0.85,
//             rotateX: 10, // Slight initial rotation
//             transformOrigin: 'top center',
//             opacity: 0,
//             zIndex: (i) => i, // Initial z-index based on order
//             y: (i) => i * 20 + 50, // Initial Y offset for stacking, start a bit lower
//         });

//         // First card comes into full view immediately
//         if (cards[0]) {
//             gsap.to(cards[0], {
//                 scale: 1,
//                 rotateX: 0,
//                 opacity: 1,
//                 y: 0,
//                 duration: 0.5, // Quick animation for the first card
//                 ease: 'power2.inOut',
//                 zIndex: cards.length + 10, // Highest z-index
//             });
//         }

//         const tl = gsap.timeline({
//             scrollTrigger: {
//                 trigger: containerRef.current,
//                 start: 'top top',
//                 // Adjust end based on number of cards and desired scroll per transition
//                 // e.g., 0.7 viewport height per card transition
//                 end: `+=${window.innerHeight * (cards.length - 1) * 1.5}`, // Increased scroll duration per card
//                 scrub: true, // Direct scrub, often smoother
//                 pin: true,
//                 pinSpacing: true,
//                 // anticipatePin: 1, // Removed anticipatePin
//                 markers: false, // Set to true for debugging
//             },
//         });

//         // Animate transitions between cards
//         cards.forEach((card, index) => {
//             if (index === 0) return; // First card is already visible

//             // For each card (from the second one onwards):
//             // 1. The PREVIOUS card (cards[index-1]) moves to the "top of the stack behind".
//             // 2. The CURRENT card (cards[index]) moves from its initial stacked position to "active".
//             // 3. Cards further behind (cards[0] to cards[index-2]) might adjust slightly.

//             tl.addLabel(`card-${index}-transition`) // Add a label for easier debugging/sequencing
//                 .to(cards[index - 1], { // Animate the PREVIOUS card
//                     scale: 0.90,        // Scale for being at the top of the "behind" stack
//                     rotateX: 8,
//                     y: 25,              // Y-offset for top of "behind" stack
//                     opacity: 1,         // Keep it visible
//                     zIndex: cards.length - index, // Adjusted zIndex to be just behind current active
//                     duration: 0.6,      // Duration of this part of the transition
//                     ease: 'power2.inOut',
//                 }, "-=0.3") // Overlap slightly with previous step or use label "<" for concurrent start
//                 .to(card, { // Animate the CURRENT card (cards[index]) to active
//                     scale: 1,
//                     rotateX: 0,
//                     opacity: 1,
//                     y: 0,
//                     zIndex: cards.length + 10, // Bring to the very front
//                     duration: 0.6,
//                     ease: 'power2.inOut',
//                 }, "<") // Start this animation at the same time the previous card starts moving back

//             // Optional: Adjust cards that are even further behind
//             if (index > 1) {
//                 tl.to(cards.slice(0, index - 1), {
//                     scale: (i_slice) => 0.85 - ((index - 1) - (i_slice)) * 0.03, // Progressively smaller
//                     y: (i_slice) => 25 + ((index - 1) - i_slice) * 20 + 20, // Progressively further down
//                     rotateX: 10, // Keep their stacked rotation
//                     opacity: 0.8, // Slightly fade cards further back for depth
//                     zIndex: (i_slice) => i_slice,
//                     duration: 0.6,
//                     ease: 'power2.inOut',
//                 }, "<"); // Also at the same time
//             }
//         });

//         // Optional: Animate the last card out if desired at the very end of the timeline
//         if (cards.length > 0) {
//             tl.to(cards[cards.length - 1], {
//                 opacity: 0,
//                 scale: 0.8,
//                 y: -50, // Move up and out for example
//                 duration: 0.4,
//             }, "+=0.5"); // Add a delay after the last card is fully active
//         }


//         return () => {
//             tl.kill(); // Kill the timeline specifically
//             // ScrollTrigger.getAll().forEach(trigger => trigger.kill()); // Removed this line
//             // No need for ScrollTrigger.clearMatchMedia() unless you use ScrollTrigger.matchMedia()
//         };
//     }, [fundPoolsData]); // Re-run if fundPoolsData changes

//     return (
//         <section
//             ref={containerRef}
//             className="relative bg-[#F5F7FA] w-full overflow-hidden min-h-screen" // Use min-h-screen or ensure content dictates height
//             style={{ zIndex: 10 }} // zIndex for the section itself
//         >
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-28"> {/* Added pb-28 for spacing after pin */}
//                 <h2 className="text-5xl font-extrabold text-center mb-12 text-foreground">
//                     Fund Pools at Wee Invest
//                 </h2>
//                 <p className="text-xl text-center text-muted-foreground max-w-3xl mx-auto mb-20">
//                     Diverse Sectors, Endless Opportunities.
//                 </p>

//                 {/* This div will be pinned and its height will determine scroll duration for cards */}
//                 <div className="relative h-[45vh] sm:h-[50vh] md:h-[55vh]"> {/* Increased height slightly */}
//                     {(() => {
//                         // cardsRef.current = []; // Removed this line
//                         return fundPoolsData.map((pool) => (
//                             <div
//                                 key={pool.title}
//                                 ref={addToRefs}
//                                 // `card_items` will be absolutely positioned by GSAP
//                                 className="card_items mx-auto max-w-5xl"
//                             >
//                                 {/* Removed hover:scale-105 from here */}
//                                 <div className="card_el bg-white will-change-transform shadow-2xl rounded-2xl overflow-hidden h-[45vh] sm:h-[50vh] md:h-[55vh] flex flex-col items-center md:flex-row transition-transform duration-500">
//                                     <div className="relative w-full md:w-1/2 h-full">
//                                         <Image
//                                             src={pool.image}
//                                             alt={pool.title}
//                                             fill
//                                             sizes="(max-width: 768px) 100vw, 50vw" // Add sizes prop for optimization
//                                             className="object-cover"
//                                             priority={Number(pool.number) <= 2} // Prioritize loading first few images
//                                         />
//                                     </div>
//                                     <div className="p-6 md:w-1/2 flex flex-col justify-between items-end text-end h-full">
//                                         <div className="flex items-center mb-4 self-start md:self-end">
//                                             <NumberedBadge number={pool.number} color={pool.color} />
//                                             <h3
//                                                 className="ml-4 text-xl font-bold text-foreground"
//                                                 dangerouslySetInnerHTML={{ __html: pool.title }}
//                                             />
//                                         </div>
//                                         <div className="flex-grow flex flex-col justify-center">
//                                             <div className='mb-3'>
//                                                 <h4 className="text-sm font-bold text-muted-foreground mb-1">
//                                                     Focus:
//                                                 </h4>
//                                                 <p
//                                                     className="text-foreground"
//                                                     dangerouslySetInnerHTML={{ __html: pool.focus }}
//                                                 />
//                                             </div>
//                                             <div>
//                                                 <h4 className="text-sm font-bold text-muted-foreground mb-1">
//                                                     Goal:
//                                                 </h4>
//                                                 <p
//                                                     className="text-foreground"
//                                                     dangerouslySetInnerHTML={{ __html: pool.goal }}
//                                                 />
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         ));
//                     })()}
//                 </div>
//             </div>

//             <div className="mx-auto w-full absolute top-0 left-0 -z-10 h-full pointer-events-none">
//                 {/* Test performance without mix-blend-darken if lag is significant */}
//                 <Lottie animationData={bgAnimation} loop className='mix-blend-darken opacity-50 w-full h-full object-cover' />
//             </div>
//         </section>
//     );
// };

// export default FundPools;






'use client';

import React, { useEffect, useRef, useCallback, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import Lottie from 'lottie-react';
import bgAnimation from '../../assets/bg.json'; // Make sure this path is correct

import { fundPoolsData } from '@/data/fundPoolsData';
import NumberedBadge from '@/components/ui/NumberedBadge';

gsap.registerPlugin(ScrollTrigger);

const FundPools: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const cardsWrapperRef = useRef<HTMLDivElement>(null); // Ref for the direct child that holds cards
    const cardsRef = useRef<HTMLDivElement[]>([]);

    // Reset cardsRef when data changes to ensure fresh refs are collected
    useEffect(() => {
        cardsRef.current = [];
    }, [fundPoolsData]);

    const addToRefs = useCallback((el: HTMLDivElement | null) => {
        if (el && !cardsRef.current.includes(el)) {
            cardsRef.current.push(el);
        }
    }, []);


    useLayoutEffect(() => {
        const cards = cardsRef.current;
        const container = containerRef.current;
        const cardsWrapper = cardsWrapperRef.current;

        if (!cards.length || !container || !cardsWrapper) return;

        ScrollTrigger.refresh(); // Refresh ScrollTrigger to ensure calculations are up-to-date

        // Initial state for all cards (stacked, mostly hidden)
        // The first card will be immediately animated to its "active" state.
        gsap.set(cards, {
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            width: '100%', // Ensure cards take full width of their relative parent
            scale: 0.85,
            rotateX: 10,
            transformOrigin: 'top center',
            opacity: 0,
            zIndex: (i) => i, // Initial z-index based on order
            y: (i) => i * 15 + 40, // Initial Y offset for stacking, start a bit lower
        });

        // Initial state for the first card (make it visible and active)
        if (cards[0]) {
            gsap.set(cards[0], {
                scale: 1,
                rotateX: 0,
                opacity: 1,
                y: 0,
                zIndex: cards.length + 10, // Highest z-index
            });
        }


        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: container, // Pinning the main section container
                start: 'top top',
                end: `+=${window.innerHeight * (cards.length - 1) * 0.8}`, // Adjusted scroll duration factor
                scrub: 0.8, // Smoother scrub
                pin: true,
                pinSpacing: true, // Automatically add padding to the bottom of the pinned element
                markers: false, // Set to true for debugging
            },
        });

        cards.forEach((card, index) => {
            if (index === 0) return; // First card is already set up

            // Animate the PREVIOUS card (cards[index-1]) moving to the "top of the stack behind".
            tl.to(cards[index - 1], {
                scale: 0.90,
                rotateX: 8,
                y: 20, // Y-offset for top of "behind" stack
                opacity: 0.7, // Slightly fade for depth
                zIndex: cards.length - index + 1, // zIndex just behind current active
                duration: 0.5,
                ease: 'power2.inOut',
            }, `card-${index}-start`); // Label for start of this transition

            // Animate the CURRENT card (cards[index]) moving from its initial stacked position to "active".
            tl.to(card, {
                scale: 1,
                rotateX: 0,
                opacity: 1,
                y: 0,
                zIndex: cards.length + 10, // Bring to the very front
                duration: 0.5,
                ease: 'power2.inOut',
            }, `<`); // Start at the same time as the previous animation (`card-${index}-start`)

            // Optional: Adjust cards that are even further behind (cards[0] to cards[index-2])
            // This ensures they settle nicely into the background stack.
            if (index > 1) {
                const cardsFurtherBehind = cards.slice(0, index - 1);
                tl.to(cardsFurtherBehind, {
                    scale: (i_slice) => 0.85 - (cardsFurtherBehind.length - 1 - i_slice) * 0.03, // Progressively smaller
                    y: (i_slice) => 20 + 20 + (cardsFurtherBehind.length - 1 - i_slice) * 15, // Progressively further down from the card above (at y:20)
                    rotateX: 10,
                    opacity: 0.5, // Fade cards further back more
                    zIndex: (i_slice) => i_slice + 1, // Keep them in order, below the cards[index-1]
                    duration: 0.5,
                    ease: 'power2.inOut',
                }, "<"); // Also at the same time
            }
        });

        // Optional: Animate the last card out if desired at the very end of the timeline
        if (cards.length > 0) {
            tl.to(cards[cards.length - 1], {
                opacity: 0, // Fade out
                scale: 0.8, // Scale down
                y: -50,     // Move up and out
                duration: 0.3,
            }, "+=0.5"); // Add a delay after the last card is fully active before it animates out
        }


        return () => {
            tl.kill();
            // If you have other ScrollTriggers on the page you don't want to affect,
            // avoid killing all of them. Just kill the one associated with this component.
            // ScrollTrigger.getAll().forEach(trigger => trigger.kill()); // Generally avoid unless necessary
        };
    }, [fundPoolsData, addToRefs]); // Re-run if fundPoolsData changes or addToRefs changes (it won't due to useCallback)

    return (
        <section
            ref={containerRef}
            className="relative bg-[#F5F7FA] w-full overflow-hidden" // min-h-screen might not be needed if pinSpacing works
            style={{ zIndex: 10 }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 md:pt-28 pb-20 md:pb-28">
                <h2 className="text-4xl sm:text-5xl font-extrabold text-center mb-8 sm:mb-12 text-foreground">
                    Fund Pools at Wee Invest
                </h2>
                <p className="text-lg sm:text-xl text-center text-muted-foreground max-w-3xl mx-auto mb-16 sm:mb-20">
                    Diverse Sectors, Endless Opportunities.
                </p>

                {/* This div's height dictates the space for the cards animation */}
                <div
                    ref={cardsWrapperRef}
                    className="relative mx-auto h-[50vh] sm:h-[55vh] md:h-[60vh]" // Crucial for pin area
                >
                    {fundPoolsData.map((pool, index) => (
                        <div
                            key={pool.title}
                            ref={addToRefs}
                            // `card_items` will be absolutely positioned by GSAP within cardsWrapperRef
                            className="card_items mx-auto max-w-5xl" // max-w-5xl applied here for sizing
                        >
                            <div className="card_el bg-white will-change-transform shadow-2xl rounded-2xl overflow-hidden h-[50vh] sm:h-[55vh] md:h-[60vh] flex flex-col md:flex-row"> {/* Ensure this height matches parent */}
                                <div className="relative w-full md:w-1/2 h-1/2 md:h-full">
                                    <Image
                                        src={pool.image}
                                        alt={pool.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        className="object-cover"
                                        priority={index <= 1} // Prioritize loading first two images
                                    />
                                </div>
                                <div className="p-4 sm:p-6 md:p-8 w-full md:w-1/2 flex flex-col justify-between text-end h-1/2 md:h-full">
                                    <div className="flex items-center mb-3 sm:mb-4 self-start md:self-end">
                                        <NumberedBadge number={pool.number} color={pool.color} />
                                        <h3
                                            className="ml-3 sm:ml-4 text-lg sm:text-xl font-bold text-foreground"
                                            dangerouslySetInnerHTML={{ __html: pool.title }}
                                        />
                                    </div>
                                    <div className="flex-grow flex flex-col justify-center space-y-3 sm:space-y-4">
                                        <div>
                                            <h4 className="text-xs sm:text-sm font-semibold text-muted-foreground mb-0.5 sm:mb-1">
                                                Focus:
                                            </h4>
                                            <p
                                                className="text-sm sm:text-base text-foreground"
                                                dangerouslySetInnerHTML={{ __html: pool.focus }}
                                            />
                                        </div>
                                        <div>
                                            <h4 className="text-xs sm:text-sm font-semibold text-muted-foreground mb-0.5 sm:mb-1">
                                                Goal:
                                            </h4>
                                            <p
                                                className="text-sm sm:text-base text-foreground"
                                                dangerouslySetInnerHTML={{ __html: pool.goal }}
                                            />
                                        </div>
                                    </div>
                                    {/* Optional: Add a subtle element at the bottom if needed for spacing or design */}
                                    <div className="pt-2 sm:pt-4"></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="mx-auto w-full absolute top-0 left-0 -z-10 h-full pointer-events-none">
                <Lottie animationData={bgAnimation} loop className='mix-blend-darken opacity-30 md:opacity-50 w-full h-full object-cover' />
            </div>
        </section>
    );
};

export default FundPools;