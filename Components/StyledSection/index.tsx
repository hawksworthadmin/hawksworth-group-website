import classNames from "classnames";
import React, { ReactNode } from "react";

const StyledSection = ({
  children,
  noPadding = false,
  containerClassname,
}: {
  children: ReactNode;
  noPadding?: boolean;
  containerClassname?: string;
}) => {
  return (
    <div
      className={classNames(
        "px-6 lg:px-[120px]",
        {
          "p-0": noPadding,
        },
        containerClassname
      )}
    >
      {children}
    </div>
  );
};

export default StyledSection;
