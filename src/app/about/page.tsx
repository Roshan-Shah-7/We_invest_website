import HeroSection from "@/components/about/HeroSection"
import ValuePropositionsSection from "@/components/about/ValuePropositionsSection"
import MissionSection from "@/components/about/MissionSection"
import OurStorySection from "@/components/about/OurStorySection"
import TeamSection from "@/components/about/TeamSection"
import InvestmentSectorsSection from "@/components/about/InvestmentSectorsSection"
import CustomerCommitmentSection from "@/components/about/CustomerCommitmentSection"
import ContactCtaSection from "@/components/about/ContactCtaSection"

export const metadata = {
    title: "We Invest Global Pvt. Ltd. | About Us",
    description:
        "Learn about We Invest Global Pvt. Ltd.'s mission, vision, team, and commitment to empowering entrepreneurs and driving financial growth through strategic partnerships and innovative solutions.",
    keywords:
        "about us, We Invest Global, mission, vision, team, financial solutions, entrepreneur empowerment, investment firm Nepal",
};

export default function AboutUsPage() {
    return (
        <div className="min-h-screen bg-white">
            <HeroSection />
            <ValuePropositionsSection />
            <MissionSection />
            <OurStorySection />
            <TeamSection />
            <InvestmentSectorsSection />
            <CustomerCommitmentSection />
            <ContactCtaSection />
        </div>
    )
}
