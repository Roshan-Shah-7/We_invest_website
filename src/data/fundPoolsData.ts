import techInnovationFundImage from '@/assets/home/Tech_Innovation_Fund.jpg';
import healthcareImage from '@/assets/home/healthcare.jpg';
import agricultureImage from '@/assets/home/Agriculture.jpg';
import renewableEnergyImage from '@/assets/home/Renewable_Energy.jpg';
import emergingMarketsImage from '@/assets/home/Emerging_Markets.jpg';
import educationEdTechImage from '@/assets/home/Education-EdTech.jpg';
import retailEvolutionImage from '@/assets/home/Retail Evolution.jpg';
import mobilityTransportImage from '@/assets/home/Mobility-Transport.jpg';
import realState from '@/assets/home/realState.jpg';
import ventureCapitalImage from '@/assets/home/Venture Capital.jpg';

export interface ImageData {
  src: string;
  height: number;
  width: number;
  blurDataURL?: string;
}

export interface FundPool {
  number: number
  title: string
  problem: string
  focus: string
  goal: string
  image: ImageData
  color: string
  category: string
  investmentRange: string
}

export const fundPoolsData: FundPool[] = [
  {
    number: 1,
    title: 'Tech Innovation Fund',
    problem: 'Many early-stage tech startups struggle to secure funding and expertise to scale their disruptive ideas in competitive markets.',
    focus: 'Investing in early-stage technology startups with high-growth potential in AI, fintech, and software.',
    goal: ' Support visionary entrepreneurs to develop cutting-edge technologies that transform industries and drive innovation.',
    color: '#00C853',
    image: techInnovationFundImage,
    category: 'Technology',
    investmentRange: 'Rs.500K - Rs.3cr',
  },
  {
    number: 2,
    title: 'Healthcare Advancement Fund',
    problem: 'Access to innovative healthcare solutions is limited by funding gaps and complex regulatory environments.',
    focus: 'Funding biotech, health tech, and innovative healthcare solutions',
    goal: 'Enhance healthcare delivery and patient outcomes through transformative investments in groundbreaking medical technologies.',
    color: '#00B0FF',
    image: healthcareImage,
    category: 'Healthcare',
    investmentRange: 'Rs.600K - Rs.2.1cr',
  },
  {
    number: 3,
    title: 'Sustainable Agriculture Fund',
    problem: 'Unsustainable farming practices and food insecurity threaten global food systems and environmental health.',
    focus: 'Supporting companies and initiatives promoting sustainable farming and food security.',
    goal: 'Build resilient, eco-friendly food systems that ensure long-term sustainability and economic benefits.',
    color: '#FFA000',
    image: agricultureImage,
    category: 'Agriculture',
    investmentRange: 'Rs.400K - Rs.1.2cr',
  },
  {
    number: 4,
    title: 'Renewable Energy Fund',
    problem: 'High initial costs and regulatory hurdles limit the adoption of clean energy solutions in a world facing climate challenges.',
    focus: 'Investing in renewable energy projects, including solar, wind, and hydropower.',
    goal: 'Drive sustainable energy solutions that deliver environmental impact and long-term financial returns.',
    color: '#4CAF50',
    image: renewableEnergyImage,
    category: 'Energy',
    investmentRange: 'Rs.450K - Rs1.5cr',
  },
  {
    number: 5,
    title: 'Emerging Markets Fund',
    problem: 'Startups in developing economies often lack access to capital and resources to capitalise on high-growth opportunities.',
    focus: 'Supporting high-growth startups in emerging markets with untapped potential.',
    goal: 'Leverage opportunities in developing economies to diversify investments and drive significant growth.',
    color: '#9C27B0',
    image: emergingMarketsImage,
    category: 'Emerging Markets',
    investmentRange: 'Rs.550K - Rs.1.3cr',
  },
  {
    number: 6,
    title: 'Education & EdTech Fund',
    problem: 'Traditional education systems struggle to meet modern learning needs, limiting accessibility and innovation.',
    focus: 'Innovative learning <em>solutions</em> and EdTech platforms',
    goal: 'Enhance learning accessibility and outcomes through transformative, tech-enabled education models.',
    color: '#FF5722',
    image: educationEdTechImage,
    category: 'Education',
    investmentRange: 'Rs.400K - Rs.1.5cr',
  },
  {
    number: 7,
    title: 'Retail Evolution Fund',
    problem: 'Rapid shifts in consumer behaviour and technology create challenges for retailers to stay competitive and relevant.',
    focus: 'Investing in e-commerce, experiential retail, and sustainable consumer solutions.',
    goal: 'Champion the next generation of retail to meet the demands of today’s dynamic, tech-savvy consumers.',
    color: '#673AB7',
    image: retailEvolutionImage,
    category: 'Retail',
    investmentRange: 'Rs.400K - Rs.2.2cr',
  },
  {
    number: 8,
    title: 'Real Estate Collective Fund',
    problem: 'Individual investors often cannot afford prime land or properties due to high market values.',
    focus: 'Pooling capital from like-minded investors to collectively invest in high-value real estate opportunities.',
    goal: 'Enable small investors to benefit from the appreciating value of prime land and properties through shared ownership and strategic acquisitions.',
    color: '#FFC107',
    image: realState,
    category: 'Real Estate',
    investmentRange: 'Rs.400K - Rs.2cr',
  },
  {
    number: 9,
    title: 'Venture Capital Fund',
    problem: 'Startups with flat or declining revenue struggle to regain momentum due to operational or strategic challenges.',
    focus: 'Revitalising underperforming startups with operational and strategic support.',
    goal: 'Transform struggling ventures into profitable, sustainable businesses through hands-on guidance and capital infusion.',
    color: '#00695C',
    image: ventureCapitalImage,
    category: 'Venture Capital',
    investmentRange: 'Rs.600K - Rs.1.5cr',
  },
];
