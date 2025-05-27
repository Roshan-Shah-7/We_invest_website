import techInnovationFundImage from '@/assets/home/Tech_Innovation_Fund.jpg';
import healthcareImage from '@/assets/home/healthcare.jpg';
import agricultureImage from '@/assets/home/Agriculture.jpg';
import renewableEnergyImage from '@/assets/home/Renewable_Energy.jpg';
import emergingMarketsImage from '@/assets/home/Emerging_Markets.jpg';
import educationEdTechImage from '@/assets/home/Education & EdTech.jpg';
import retailEvolutionImage from '@/assets/home/Retail Evolution.jpg';
import mobilityTransportImage from '@/assets/home/Mobility & Transport.jpg';
import ventureCapitalImage from '@/assets/home/Venture Capital.jpg';

export interface FundPool {
  number: string;
  title: string;
  focus: string;
  goal: string;
  color: string;
  image: any;
}

export const fundPoolsData: FundPool[] = [
  {
    number: '01',
    title: 'Tech Innovation Fund',
    focus: 'Early-stage technology startups <em>poised to redefine industries</em>',
    goal: 'Empower founders to bring <em>groundbreaking technologies</em> to market',
    color: '#00C853',
    image: techInnovationFundImage,
  },
  {
    number: '02',
    title: 'Healthcare Advancement Fund',
    focus: 'Biotech breakthroughs and health tech <em>solutions</em>',
    goal: 'Revolutionize <em>healthcare delivery</em> and patient outcomes',
    color: '#00B0FF',
    image: healthcareImage,
  },
  {
    number: '03',
    title: 'Sustainable Agriculture Fund',
    focus: 'Sustainable farming and <em>food security initiatives</em>',
    goal: 'Build a resilient <em>food ecosystem</em> with solid returns',
    color: '#FFA000',
    image: agricultureImage,
  },
  {
    number: '04',
    title: 'Renewable Energy Fund',
    focus: 'Clean tech and <em>renewable energy projects</em>',
    goal: 'Shape a <em>sustainable future</em> through clean energy',
    color: '#4CAF50',
    image: renewableEnergyImage,
  },
  {
    number: '05',
    title: 'Emerging Markets Fund',
    focus: 'Startups in <em>high-potential developing economies</em>',
    goal: 'Unlock <em>growth opportunities</em> in untapped markets',
    color: '#9C27B0',
    image: emergingMarketsImage,
  },
  {
    number: '06',
    title: 'Education & EdTech Fund',
    focus: 'Innovative learning <em>solutions</em> and EdTech platforms',
    goal: 'Transform <em>education</em> through technology access',
    color: '#FF5722',
    image: educationEdTechImage,
  },
  {
    number: '07',
    title: 'Retail Evolution Fund',
    focus: 'E-commerce and <em>sustainable retail innovations</em>',
    goal: 'Lead the evolution of <em>modern consumer experiences</em>',
    color: '#673AB7',
    image: retailEvolutionImage,
  },
  {
    number: '08',
    title: 'Mobility & Transport Fund',
    focus: 'Electric vehicles and <em>smart logistics solutions</em>',
    goal: 'Create <em>efficient, connected transportation systems</em>',
    color: '#2196F3',
    image: mobilityTransportImage,
  },
  {
    number: '09',
    title: 'Venture Capital Fund',
    focus: 'High-growth stocks and <em>equity opportunities</em> with team analysis',
    goal: 'Maximize returns through a <em>disciplined, long-term strategy</em>',
    color: '#FFC107',
    image: ventureCapitalImage,
  },
];
