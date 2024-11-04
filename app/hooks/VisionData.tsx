import AcquisitionIcon from "../assets/svg-icon/AcquisitionIcon";
import ForwardIcon from "../assets/svg-icon/ForwardIcon";
import FundingIcon from "../assets/svg-icon/FundingIcon";
import GoToMarketIcon from "../assets/svg-icon/GoToMarketIcon";
import MultipleUserIcon from "../assets/svg-icon/MultipleUsersIcon";
import StrategyIcon from "../assets/svg-icon/StrategyIcon";
import { VisionProps } from "../../components/VisionSection";

// Define the KeyNumbersData array
const VisionData: VisionProps[] = [
  {
    icon: (
      <GoToMarketIcon
        className={"md:w-[3.25rem] md:[h-3.25rem] w-[2.25rem] h-[2.25rem]"}
      />
    ),
    bgColor: "lg:bg-white bg-inherit",
    text: "Develop comprehensive go-to-market strategy",
    subText: "to unlocking economics of scale.",
  },
  {
    icon: (
      <StrategyIcon
        className={"md:w-[3.25rem] md:[h-3.25rem] w-[2.25rem] h-[2.25rem]"}
      />
    ),
    bgColor: "bg-white",
    text: "Project manage strategy implementation",
    subText: " to maximise returns.",
  },
  {
    icon: (
      <FundingIcon
        className={"md:w-[3.25rem] md:[h-3.25rem] w-[2.25rem] h-[2.25rem]"}
      />
    ),
    bgColor: "lg:bg-white bg-inherit",
    text: "Secure appropriate funding",
    subText: "in grant, equity, debt, mezzanine necessary to scale operations.",
  },
  {
    icon: (
      <AcquisitionIcon
        className={"md:w-[3.25rem] md:[h-3.25rem] w-[2.25rem] h-[2.25rem]"}
      />
    ),
    bgColor: "bg-white",
    text: "Evaluate acquisition opportunities",
    subText:
      "for strategic fitness, minimize risks, and assure investment outcomes.",
  },
  {
    icon: (
      <MultipleUserIcon
        className={"md:w-[3.25rem] md:[h-3.25rem] w-[2.25rem] h-[2.25rem]"}
      />
    ),
    bgColor: "lg:bg-white bg-inherit",
    text: "Develop workforce programmes and management teams",
    subText: "to ensuring long term sustainability.",
  },
  {
    icon: (
      <ForwardIcon
        className={"md:w-[3.25rem] md:[h-3.25rem] w-[2.25rem] h-[2.25rem]"}
      />
    ),
    bgColor: "bg-white",
    text: "Streamline the core business processes",
    subText: "to enhance and optimise operations.",
  },
];

const VisionDataComponent = () => {
  return VisionData;
};

export default VisionDataComponent;
