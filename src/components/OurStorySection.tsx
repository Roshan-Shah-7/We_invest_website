// components/OurStorySection.tsx

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const OurStorySection = () => {
    return (
        <section className="w-full bg-white/70 backdrop-blur-md py-20 px-6 md:px-16">
            <div className="text-center">
                <motion.h2
                    className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 flex justify-center items-center gap-3"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <Sparkles className="text-brand_teal w-8 h-8" />
                    Our Story
                </motion.h2>

                <motion.p
                    className="text-lg md:text-xl text-gray-700"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                >
                    We Invest was founded on a bold vision: to create an investment ecosystem that empowers founders to build meaningful, enduring businesses. The journey began with Paras Mani, a seasoned strategist with a talent for identifying untapped opportunities and building high-impact enterprises. Paras envisioned a company that would not only provide financial support but also serve as a true partner to entrepreneurs, helping them navigate challenges and achieve sustainable growth.
                </motion.p>

                <motion.p
                    className="text-lg md:text-xl text-gray-700 mt-6"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.4 }}
                >
                    This vision came to life through a partnership with Laxmi Dangol, whose ability to forge strong relationships and drive operational excellence complemented Paras’s strategic expertise. Together, they assembled a team of passionate professionals, each bringing unique strengths to the table. What began as a shared dream has grown into a powerhouse dedicated to transforming ideas into industry leaders.
                </motion.p>

                <motion.p
                    className="text-lg md:text-xl text-gray-700 mt-6"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.6 }}
                >
                    Today, We Invest stands as a platform for founders who are ready to dream big and make it happen. Guided by passion, innovation, and a commitment to excellence, we are shaping the future of investment.
                </motion.p>
            </div>
        </section>
    );
};

export default OurStorySection;
