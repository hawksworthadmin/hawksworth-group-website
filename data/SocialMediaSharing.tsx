import FacebookIcon from "@/public/assets/svg-icon/FacebookIcon";
import LinkedinIcon from "@/public/assets/svg-icon/LinkedinIcon";
import TwiterIcon from "@/public/assets/svg-icon/Twitter";

type SocialMediaItem = {
  name: string;
  link: (url: string, title: string) => string;
  icon: React.ReactNode;
};

export const SocialMedia: SocialMediaItem[] = [
  {
    link: (url, title) =>
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        url,
      )}&quote=${encodeURIComponent(title)}`,
    icon: <FacebookIcon fill="black" />,
    name: "Facebook",
  },
  {
    name: "LinkedIn",
    link: (url) =>
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
        url,
      )}`,
    icon: <LinkedinIcon fill="black" />,
  },
  {
    link: (url, title) =>
      `https://twitter.com/intent/tweet?url=${encodeURIComponent(
        url,
      )}&text=${encodeURIComponent(title)}`,
    icon: <TwiterIcon fill="black" />,
    name: "Twitter",
  },
];
