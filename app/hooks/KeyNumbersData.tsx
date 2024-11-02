import WalletIcon from "../assets/svg-icon/WalletIcon";
import UsersIcon from "../assets/svg-icon/UsersIcon";
import EngagementsIcon from "../assets/svg-icon/EngagementsIcon";
import StrategyIcon from "../assets/svg-icon/StrategyIcon";
import { KeyNumbersProp } from "../Components/Cards/KeyNumbersCard";

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
    bgColor: "bg-white order-2",
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
    bgColor: "bg-white order-4 lg:order-3",
    titleColor: "text-darkGrey",
    subtitleColor: "text-darkGrey",
    id: 3,
  },
  {
    title: "strategic partnerships",
    subtitle: "with global industry leaders.",
    value: "20+",
    icon: (
      <StrategyIcon
        className={"w-[3.75rem] h-[3.75rem] lg:w-[7.5rem] lg:h-[7.5rem]"}
      />
    ),
    bgColor: "bg-opacYellow order-3 lg:order-4",
    titleColor: "text-primaryYellow",
    subtitleColor: "text-darkGrey",
    id: 4,
  },
];

const KeyNumbersComponent = () => {
  return KeyNumbersData;
};

export default KeyNumbersComponent;
