import InstagramIcon from "@/public/assets/svg-icon/InstagramIcon";
import LinkedinIcon from "@/public/assets/svg-icon/LinkedinIcon";
import TikTokIcon from "@/public/assets/svg-icon/TiktokIcon";
import TwiterIcon from "@/public/assets/svg-icon/Twitter";

export interface FooterLink {
  label: string;
  href: string;
  rel: string;
  target: string;
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
      {
        label: "Vision & Mission",
        href: "/about#vision-section",
        rel: " ",
        target: "_self",
      },
      {
        label: "Company History",
        href: "/about#company-history",
        rel: " ",
        target: "_self",
      },
      {
        label: "Leadership Profiles",
        href: "/about#leadership-profiles",
        rel: " ",
        target: "_self",
      },
    ],
  },
  {
    title: "Culture",
    links: [
      {
        label: "Job Listings",
        href: "/careers#job-listings",
        rel: " ",
        target: "_self",
      },
      {
        label: "Employee Testimonials",
        href: "/careers#employee-testimonials",
        rel: " ",
        target: "_self",
      },
      { label: "Blog", href: "/blog", rel: " ", target: "_self" },
    ],
  },
  {
    title: "Services",
    links: [
      {
        label: "Hawksworth Advisors",
        href: "https://hawksworth-advisors-website.vercel.app/",
        rel: " noopener noreferrer",
        target: "_blank",
      },
      {
        label: "Hawksworth Insights",
        href: "",
        rel: " noopener noreferrer",
        target: "_blank",
      },
      {
        label: "Hawksworth Capital",
        href: "https://hawksworth-capital-website.vercel.app/",
        rel: " noopener noreferrer",
        target: "_blank",
      },
      {
        label: "Hawksworth Venture",
        href: "https://hawksworth-ventures-website.vercel.app/",
        rel: " noopener noreferrer",
        target: "_blank",
      },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "", rel: " ", target: "_self" },
      { label: "Terms of Use", href: "", rel: " ", target: "_self" },
    ],
  },
];

export const groupSocialMedia: GroupSocialMedia[] = [
  {
    link: "https://www.tiktok.com/@hawksworthgroup?_t=ZM-8svDVObCA2n&_r=1",
    icon: <TikTokIcon />,
    name: "Tiktok",
  },
  {
    link: "https://www.instagram.com/hawksworth.group?igsh=b2hsMGc3end4N3J6",
    icon: <InstagramIcon />,
    name: "Instagram",
  },
  {
    link: "https://x.com/hawksworthgroup?s=21",
    icon: <TwiterIcon />,
    name: "Twitter",
  },

  {
    link: "https://www.linkedin.com/company/hawksworthg/",
    icon: <LinkedinIcon />,
    name: "Linkedin",
  },
];
