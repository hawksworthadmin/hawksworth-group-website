import Image from "next/image";
import React from "react";
import { LeadershipData } from "../data/LeadershipData";

const LeadershipProfiles = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-[8rem] gap-y-14 place-items-center  w-full max-w-[4000px] mx-auto ">
      {LeadershipData.map((leader, index) => (
        <section key={index}>
          <div className="rounded-sm w-[20.375rem] h-[19.063rem] lg:w-[17rem] lg:h-[19.063rem] 2xl:w-[27.875rem] 2xl:h-[32.063rem] 3xl:w-[37.875rem] 3xl:h-[39.063rem] relative overflow-hidden mb-4 lg:mb-8">
            <Image
              src={leader.image}
              alt="logo"
              layout="fill"
              objectFit="cover"
              className="rounded-sm object-cover w-full h-full"
            />
          </div>
          <p className="font-semibold text-2xl lg:text-xl  text-secondaryYellow text-center lg:text-start ">
            {leader.Name}
          </p>
          <p className="text-darkGrey font-normal text-xl lg:text-lg text-center lg:text-start">
            {leader.Designation}
          </p>
        </section>
      ))}
    </section>
  );
};

export default LeadershipProfiles;
