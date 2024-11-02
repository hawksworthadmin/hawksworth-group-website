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
    <section
      className={classNames(
        "px-6 lg:px-[120px]",
        {
          "p-0": noPadding,
        },
        containerClassname,
      )}
    >
      {children}
    </section>
  );
};

export default StyledSection;
