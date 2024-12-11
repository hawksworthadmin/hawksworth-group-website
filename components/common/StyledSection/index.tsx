import classNames from "classnames";
import React, { ReactNode } from "react";

const StyledSection = ({
  children,
  noPadding = false,
  containerClassname,
  imageUrl,
  id
}: {
  children: ReactNode;
  noPadding?: boolean;
  containerClassname?: string;
    imageUrl?: string;
  id?:string
}) => {
  return (
    <section
      className={classNames(
        "bg-cover bg-center",
        {
          "px-0": noPadding,
          "px-6 lg:px-[120px]": !noPadding,
        },
        containerClassname,
      )}
      style={{ backgroundImage: `url(${imageUrl})` }}
      id={id}
    >
      {children}
    </section>
  );
};

export default StyledSection;
