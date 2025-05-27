'use client';

import React, { FC, useEffect } from 'react';
import { serviceData } from '@/data';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Tilt from 'react-parallax-tilt';
import { Lightbulb, Rocket, Briefcase, Megaphone, GraduationCap, Target, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { useMediaQuery } from 'usehooks-ts';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Lottie from 'lottie-react';
import growthAnimation from '../assets/growth.json';

gsap.registerPlugin(ScrollTrigger);

// Service type definition
interface Service {
  number: string;
  title: string;
  description: string;
}

// Icon mapping
const iconMap: Record<string, React.ReactNode> = {
  'School of Startups': <Lightbulb className="w-6 h-6 text-primary" />,
  'Comprehensive Startup Support': <Briefcase className="w-6 h-6 text-primary" />,
  'Incubation Classes': <Rocket className="w-6 h-6 text-primary" />,
  'Presentation and Pitch Coaching': <Megaphone className="w-6 h-6 text-primary" />,
  'Mentorship Services': <GraduationCap className="w-6 h-6 text-primary" />,
  'Strategic Support': <Target className="w-6 h-6 text-primary" />,
  'Funding for Startups': <DollarSign className="w-6 h-6 text-primary" />,
};

const WhatWeProvide: FC = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');

  useEffect(() => {
    const ctx = gsap.context(() => {
      const servicesSection = document.getElementById('services');
      if (servicesSection) {
        gsap.fromTo(servicesSection,
          { opacity: 0, y: 100, scale: 0.95 }, // Start from slightly below, invisible, and slightly scaled down
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: servicesSection,
              start: 'top 80%', // When the top of the section is 80% down from the top of the viewport
              once: true, // Ensures the animation only plays once
            }
          }
        );
      }

      // Animate section header (title and description)
      const sectionHeader = document.getElementById('section-header');
      if (sectionHeader) {
        gsap.fromTo(sectionHeader.children,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.2,
            ease: 'power1.out',
            scrollTrigger: {
              trigger: sectionHeader,
              start: 'top 80%',
              once: true,
            }
          }
        );
      }

      // ScrollTrigger for the stats bar animations
      const statsBarElement = document.getElementById('stats-bar');
      if (statsBarElement) {
        ScrollTrigger.create({
          trigger: statsBarElement,
          start: 'top 80%', // When the top of the stats bar is 80% down from the top of the viewport
          onEnter: () => {
            // Animate numbers
            gsap.utils.toArray<HTMLElement>('[data-target]').forEach(span => {
              const targetValue = parseInt(span.dataset.target || '0');
              gsap.fromTo(span,
                { innerText: 0 },
                {
                  innerText: targetValue,
                  duration: 1.5,
                  ease: 'power1.out',
                  snap: { innerText: 1 }, // Snap to integer values
                  onUpdate: function () {
                    span.innerText = Math.ceil(this.targets()[0].innerText).toString();
                  }
                }
              );
            });

            // Fade-in descriptions
            gsap.fromTo('.stat-description',
              { opacity: 0, y: 20 },
              { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: 'power1.out' }
            );
          },
          once: true, // Ensures animations only play once
        });
      }

      // ScrollTrigger for the CTA button animation
      const ctaButton = document.getElementById('cta-button-main');
      if (ctaButton) {
        ScrollTrigger.create({
          trigger: ctaButton,
          start: 'top 90%', // When the top of the button is 90% down from the top of the viewport
          onEnter: () => {
            gsap.fromTo(ctaButton,
              { y: 20, opacity: 0, scale: 0.9 },
              {
                y: 0,
                opacity: 1,
                scale: 1,
                duration: 1,
                ease: 'elastic.out(1, 0.75)', // A slight bounce effect
                overwrite: 'auto'
              }
            );
          },
          once: true, // Ensures the animation only plays once
        });
      }

      // Animate service cards on desktop
      const serviceCardsGrid = document.getElementById('service-cards-grid');
      if (serviceCardsGrid && !isMobile) { // Only apply on desktop
        gsap.fromTo('.service-card-item',
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: 'power1.out',
            scrollTrigger: {
              trigger: serviceCardsGrid,
              start: 'top 80%',
              once: true,
            }
          }
        );
      }
    });
    return () => ctx.revert();
  }, [isMobile]); // Add isMobile to dependency array

  const serviceCards = serviceData.map((service: Service, i: number) => (
    <Tilt
      key={i}
      tiltMaxAngleX={10}
      tiltMaxAngleY={10}
      glareEnable={false}
      className="bg-gradient-to-br bg-white border border-border rounded-2xl shadow-xl p-6 transition-transform hover:scale-[1.03] hover:shadow-lg service-card-item"
    >
      <Dialog>
        <DialogTrigger asChild>
          <div className="cursor-pointer space-y-4">
            <div className="flex items-center gap-4 mb-4">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="w-10 h-10 rounded-full flex items-center justify-center text-gray-900 bg-[rgba(0,200,83,0.2)] mr-2 cursor-pointer">
                      {iconMap[service.title]}
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{service.title}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <span className="text-2xl font-bold text-primary">{service.number}</span>
            </div>
            <h3 className="text-2xl font-semibold">{service.title}</h3>
            <p className="text-base font-light text-muted-foreground">
              {service.description.slice(0, 90)}...
            </p>
          </div>
        </DialogTrigger>
        <DialogContent>
          <h2 className="text-2xl font-bold mb-2">{service.title}</h2>
          <p>{service.description}</p>
        </DialogContent>
      </Dialog>
    </Tilt>
  ));

  return (
    <section id="services" className="relative w-full py-24 px-4 sm:px-6 lg:px-8 bg-brand_teal/90 rounded-tl-[50rem] rounded-br-[50rem]">
      <div className="max-w-7xl mx-auto">
        <div id="section-header" className="text-center mb-12 text-white">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">What <span className='text-brand_green'>Wee</span> Provide ?</h2>
          <p className="mt-4 text-muted-foreground">
            We empower early-stage startups with resources, mentorship, funding, and acceleration programs.
          </p>
        </div>

        {/* Stats Bar */}
        <div id="stats-bar" className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center mb-10 text-white">
          <div className="stat-item">
            <h3 className="text-2xl font-bold text-primary"><span data-target="120">0</span>+</h3>
            <p className="text-sm text-muted-foreground stat-description">Startups Supported</p>
          </div>
          <div className="stat-item">
            <h3 className="text-2xl font-bold text-primary"><span data-target="80">0</span>+</h3>
            <p className="text-sm text-muted-foreground stat-description">Mentors</p>
          </div>
          <div className="stat-item">
            <h3 className="text-2xl font-bold text-primary">$<span data-target="5">0</span>M+</h3>
            <p className="text-sm text-muted-foreground stat-description">Funding Raised</p>
          </div>
        </div>

        {isMobile ? (
          <>
            <Swiper
              modules={[Pagination, Autoplay]}
              spaceBetween={20}
              slidesPerView={1.2}
              centeredSlides={true}
              loop={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              pagination={{ clickable: true }}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                400: {
                  slidesPerView: 1.2,
                  spaceBetween: 20,
                },
              }}
              className="mySwiper"
            >
              {serviceCards.map((card, i) => (
                <SwiperSlide key={i}>{card}</SwiperSlide>
              ))}
            </Swiper>
          </>
        ) : (
          <div id="service-cards-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCards}
          </div>
        )}

        {/* CTA Banner */}
        <div className="mt-16 text-center">
          <p className="text-lg font-medium mb-4 text-white">Not sure where to start ?</p>
          <div className="flex justify-center space-x-4">
            <Button id="cta-button-main" size="lg" className="rounded-full bg-white text-black border border-black">
              Let’s Talk →
            </Button>
          </div>
        </div>
      </div>

      <div className="mx-auto w-[35rem] absolute bottom-0 right-[15%] -z-10">
        <Lottie animationData={growthAnimation} loop />
      </div>

      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'What We Provide - Startup Support Services',
            provider: {
              '@type': 'Organization',
              name: 'YourCompanyName',
            },
            serviceType: 'Startup Acceleration, Mentorship, Funding, School of Startups',
            areaServed: 'Global',
          }),
        }}
      />
    </section>
  );
};

export default WhatWeProvide;
