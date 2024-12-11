import WalletIcon from "@/public/assets/svg-icon/WalletIcon";
import UsersIcon from "@/public/assets/svg-icon/UsersIcon";
import EngagementsIcon from "@/public/assets/svg-icon/EngagementsIcon";
import { KeyNumbersProp } from "@/components/Cards/KeyNumbersCard";
import PartnershipsIcon from "@/public/assets/svg-icon/PartnershipIcon";

// Define the KeyNumbersData array
const KeyNumbersData: KeyNumbersProp[] = [
  {
    title: "investments",
    subtitle: "managed for clients in the past decade.",
    value: "$1B+",
    icon: (
      <WalletIcon
        className={"w-[3.75rem] h-[3.75rem] lg:w-[7.5rem] lg:h-[7.5rem]"}
      />
    ),
    bgColor: "bg-opacYellow order-1",
    titleColor: "text-primaryYellow",
    subtitleColor: "text-darkGrey",
    id: 1,
  },
  {
    title: "client satisfaction",
    subtitle: "on advisory and business services.",
    value: "98%",
    icon: (
      <UsersIcon
        className={"w-[3.75rem] h-[3.75rem] lg:w-[7.5rem] lg:h-[7.5rem]"}
      />
    ),
    bgColor: "bg-white",
    titleColor: "text-black",
    subtitleColor: "text-darkGrey",
    id: 2,
  },
  {
    title: "engagements",
    subtitle: "with Fortune 500 companies.",
    value: "10,000+",
    icon: (
      <EngagementsIcon
        className={"w-[3.75rem] h-[3.75rem] lg:w-[7.5rem] lg:h-[7.5rem]"}
      />
    ),
    bgColor: "bg-white key-numbers-order2",
    titleColor: "text-darkGrey",
    subtitleColor: "text-darkGrey",
    id: 3,
  },
  {
    title: "strategic partnerships",
    subtitle: "with global industry leaders.",
    value: "20+",
    icon: (
      <PartnershipsIcon
        className={"w-[3.75rem] h-[3.75rem] lg:w-[7.5rem] lg:h-[7.5rem]"}
      />

    ),
    bgColor: "bg-opacYellow key-numbers-order",
    titleColor: "text-primaryYellow",
    subtitleColor: "text-darkGrey",
    id: 4,
  },
];

const KeyNumbersComponent = () => {
  return KeyNumbersData;
};

export default KeyNumbersComponent;
