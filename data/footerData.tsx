import FacebookIcon from "@/public/assets/svg-icon/FacebookIcon";
import InstagramIcon from "@/public/assets/svg-icon/InstagramIcon";
import LinkedinIcon from "@/public/assets/svg-icon/LinkedinIcon";
import TwiterIcon from "@/public/assets/svg-icon/Twitter";

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterCategory {
  title: string;
  links: FooterLink[];
}

export interface GroupSocialMedia {
  link: string;
  icon: JSX.Element;
  name: string;
}

export const footerCategories: FooterCategory[] = [
  {
    title: "About",
    links: [
      { label: "Vision & Mission", href: "/about#vision-section" },
      { label: "Company History", href: "/about#company-history" },
      { label: "Leadership Profiles", href: "/about#leadership-profiles" },
    ],
  },
  {
    title: "Culture",
    links: [
      { label: "Job Listings", href: "/careers#job-listings" },
      {
        label: "Employee Testimonials",
        href: "/careers#employee-testimonials",
      },
      { label: "Blog", href: "/blog" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Hawksworth Advisors", href: "" },
      { label: "Hawksworth Insights", href: "" },
      { label: "Hawksworth Capital", href: "" },
      { label: "Hawksworth Venture", href: "" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "" },
      { label: "Terms of Use", href: "" },
    ],
  },
];

export const groupSocialMedia: GroupSocialMedia[] = [
  {
    link: " ",
    icon: <InstagramIcon />,
    name: "Instagram",
  },
  {
    link: " ",
    icon: <TwiterIcon />,
    name: "Twitter",
  },
  {
    link: " ",
    icon: <FacebookIcon />,
    name: "Facebook",
  },
  {
    link: " ",
    icon: <LinkedinIcon />,
    name: "Linkedin",
  },
];
