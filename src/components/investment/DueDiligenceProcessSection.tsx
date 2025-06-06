"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { CheckCircle } from "lucide-react"; // Assuming CheckCircle might be used, though not directly in the original snippet.
import clsx from "clsx";

gsap.registerPlugin(ScrollTrigger);

interface DueDiligenceProcessSectionProps {
    className?: string;
}

const DueDiligenceProcessSection = ({ className }: DueDiligenceProcessSectionProps) => {
    const sectionRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                    toggleActions: "play none none none",
                }
            });

            tl.from(".diligence-title", { opacity: 0, y: 20, duration: 0.6, ease: "power3.out" })
              .from(".diligence-paragraph", { opacity: 0, y: 20, duration: 0.6, ease: "power3.out" }, "-=0.3")
              .from(".process-step", { opacity: 0, y: 50, duration: 0.6, ease: "power3.out", stagger: 0.1 }, "-=0.3");

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="process" ref={sectionRef} className={clsx("py-16 px-4 bg-slate-50", className)}>
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 diligence-title">Our Due Diligence Process</h2>
                    <p className="text-lg text-slate-600 diligence-paragraph">Rigorous evaluation ensures sound investment decisions</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="text-center process-step">
                        <div className="bg-emerald-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                            1
                        </div>
                        <h3 className="font-semibold text-slate-900 mb-2">Company Analysis</h3>
                        <p className="text-sm text-slate-600">
                            Assess business model, market potential, and competitive landscape
                        </p>
                    </div>
                    <div className="text-center process-step">
                        <div className="bg-emerald-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                            2
                        </div>
                        <h3 className="font-semibold text-slate-900 mb-2">Founder Evaluation</h3>
                        <p className="text-sm text-slate-600">Verify credibility, expertise, and vision of leadership team</p>
                    </div>
                    <div className="text-center process-step">
                        <div className="bg-emerald-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                            3
                        </div>
                        <h3 className="font-semibold text-slate-900 mb-2">Risk Assessment</h3>
                        <p className="text-sm text-slate-600">Identify potential risks and develop mitigation strategies</p>
                    </div>
                    <div className="text-center process-step">
                        <div className="bg-emerald-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                            4
                        </div>
                        <h3 className="font-semibold text-slate-900 mb-2">Goal Alignment</h3>
                        <p className="text-sm text-slate-600">Ensure opportunity supports sustainable growth and impact</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DueDiligenceProcessSection;
