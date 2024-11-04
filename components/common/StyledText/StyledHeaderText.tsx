import React from "react";
import classNames from "classnames";

export type StyledHeaderTextProps = {
  text: string;
  subText?: string;
  textClassname?: string;
  subTextClassname?: string;
  containerClassname?: string;
};

const StyledHeaderText = ({
  text,
  subText,
  textClassname,
  subTextClassname,
  containerClassname,
}: StyledHeaderTextProps) => {
  return (
    <div className={classNames(containerClassname)}>
      <p
        className={classNames(
          "lg:text-4xl text-[22px] font-tiempos font-bold leading-snug lg:leading-normal",
          textClassname
        )}
      >
        {text}
      </p>

      <p className={classNames("mt-2 lg:text-lg text-sm", subTextClassname)}>
        {subText}
      </p>
    </div>
  );
};

export default StyledHeaderText;
