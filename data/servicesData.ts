export const servicesData = [
  {
    id: 1,
    title: "Strategic Advisory",
    description:
      "Guiding businesses through transformation with expert financial advisory, corporate restructuring, and operational strategies.",
    linkText: "Explore Hawksworth Advisors",
    imageUrl: "/assets/images/strategic-advisory.webp",
    link: "https://advisors.hawksworth.org/",
  },
  {
    id: 2,
    title: "Market Research & Insights",
    description:
      "Providing businesses with the data and analytics they need to make informed decisions and anticipate future trends.",
    linkText: "Explore Hawksworth Insights",
    imageUrl: "/assets/images/market-research.webp",
    link: "https://insights.hawksworth.org/",
  },
  {
    id: 3,
    title: "Capital Management & Investment",
    description:
      "Delivering targeted investment strategies and asset management to maximize long-term value and growth.",
    linkText: "Explore Hawksworth Capital",
    imageUrl: "/assets/images/capital-management.webp",
    link: "https://capital.hawksworth.org/",
  },
  {
    id: 4,
    title: "Venture Incubation & Funding",
    description:
      "Supporting entrepreneurs with mentorship, funding, and partnership opportunities to turn innovative ideas into successful ventures.",
    linkText: "Explore Hawksworth Venture",
    imageUrl: "/assets/images/venture-incubation.webp",
    link: "https://ventures.hawksworth.org/",
  },
];

export const subServices = [
  {
    id: 1,
    title: "Hawksworth Advisors",
    description:
      "At Hawksworth Advisors, we work closely with businesses across industries, offering bespoke strategies that address their most critical challenges. Whether you’re looking for financial advisory, business transformation, or strategic guidance, our team of expert consultants is here to help you succeed.",
  },
  {
    id: 2,
    title: "Hawksworth Insights",
    description:
      "We deliver in-depth research and data analytics to empower businesses with the intelligence needed to navigate challenges and seize opportunities. As part of Hawksworth Group, we provide actionable intelligence and data-driven insights to help organizations make informed decisions in a complex and rapidly evolving world.",
  },
  {
    id: 3,
    title: "Hawksworth Capital",
    description:
      "At Hawksworth Capital, we specialize in providing expert advisory services tailored to meet the unique financial needs of businesses. Our team of seasoned professionals is committed to delivering strategic solutions that drive financial excellence and sustainable growth.",
  },
  {
    id: 4,
    title: "Hawksworth Venture",
    description:
      "We specialize in nurturing startups and fostering entrepreneurial success through our comprehensive incubation and investment programs. Join our incubation programs, secure funding, and gain mentorship to turn your innovative ideas into successful ventures.",
  },
];

export interface NavServicesCard {
  header: string;
  content: string[];
  href: string;
}
export const NavServicesList: NavServicesCard[] = [
  {
    header: "Hawksworth Advisors",
    content: [
      "Business Strategy Consulting",
      "Financial Management Advisory",
      "Operational Excellence",
    ],
    href: "https://advisors.hawksworth.org/",
  },
  {
    header: "Hawksworth Insights",
    content: ["Industry Reports", "Market Analysis", "Economic Forecasts"],
    href: "https://insights.hawksworth.org/",
  },
  {
    header: "Hawksworth Capital",
    content: [
      "Mergers & Acquisitions",
      "Capital Raising",
      "Strategic Advisory",
    ],
    href: "https://capital.hawksworth.org/",
  },
  {
    header: "Hawksworth Ventures",
    content: ["Incubation Programs", "Acceleration Programs"],
    href: "https://ventures.hawksworth.org/",
  },
];
