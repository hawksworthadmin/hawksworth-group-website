import { ReactNode } from "react";
export interface KeyNumbersProp {
  title: string;
  subtitle: string;
  value: string;
  icon: ReactNode;
  bgColor: string;
  titleColor: string;
  subtitleColor: string;
  id?: number;
}

const KeyNumbersCard = ({
  title,
  subtitle,
  subtitleColor,
  value,
  icon,
  bgColor,
  titleColor,
}: KeyNumbersProp) => {
  return (
    <div
      className={`flex flex-col items-center py-10 px-12 lg:p-[3.75rem] ${bgColor}`}
    >
      <div className="mb-2 ">{icon}</div>
      <p className="font-bold text-black lg:text-[4.063rem] text-[2rem]">
        {value}
      </p>
      <p
        className={`font-semibold lg:text-2xl text-lg lg:w-[58%] w-full text-center ${titleColor}`}
      >
        {title}&nbsp;
        <span className={`font-normal text-lg ${subtitleColor}`}>
          {subtitle}
        </span>
      </p>
    </div>
  );
};

export default KeyNumbersCard;
