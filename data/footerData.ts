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
  icon: string;
  name: string;
}

export const footerCategories: FooterCategory[] = [
  {
    title: "About",
    links: [
      { label: "Vision & Mission", href: "" },
      { label: "Company History", href: "" },
      { label: "Leadership Profiles", href: "" },
    ],
  },
  {
    title: "Culture",
    links: [
      { label: "Job Listings", href: "" },
      { label: "Employee Testimonials", href: "" },
      { label: "Blog", href: "" },
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
    icon: "/assets/svg/InstagramIcon.svg",
    name: "Instagram",
  },
  {
    link: " ",
    icon: "/assets/svg/TwitterIcon.svg",
    name: "Twitter",
  },
  {
    link: " ",
    icon: "/assets/svg/FacebookIcon.svg",
    name: "Facebook",
  },
  {
    link: " ",
    icon: "/assets/svg/LinkedinIcon.svg",
    name: "Linkedin",
  },
];