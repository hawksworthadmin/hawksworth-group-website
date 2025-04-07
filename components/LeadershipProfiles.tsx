import Image from "next/image";
import React from "react";
import {createClient} from "@/prismicio";

const LeadershipProfiles = async () => {

  const client = createClient();

  const profiles = await client.getAllByType(
      "leadership",
      {
        fetchOptions: {
          cache: "no-store",
          next: { tags: ["prismic", "profiles"] },
        },
        limit: 30,
        // orderings: [
        //     {
        //         field: "my.blog_post.published_on",
        //         direction: "desc",
        //     },
        // ],
      },
  );

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-[8rem] gap-y-14 place-items-center  w-full max-w-[4000px] mx-auto ">
      {profiles.map((leader, index) => (
        <section key={index}>
          <div className="rounded-sm w-[20.375rem] h-[19.063rem] lg:w-[17rem] lg:h-[19.063rem] 2xl:w-[27.875rem] 2xl:h-[32.063rem] 3xl:w-[37.875rem] 3xl:h-[39.063rem] relative overflow-hidden mb-4 lg:mb-8">
            <Image
              src={leader.data.avatar.url || '/profile.png'}
              alt={`${leader.data.name}`}
              layout="fill"
              objectFit="cover"
              className="rounded-sm object-cover w-full h-full"
            />
          </div>
          <p className="font-semibold text-2xl lg:text-xl  text-secondaryYellow text-center lg:text-start ">
            {leader.data.name}
          </p>
          <p className="text-darkGrey font-normal text-xl lg:text-lg text-center lg:text-start">
            {leader.data.role}
          </p>
        </section>
      ))}
    </section>
  );
};

export default LeadershipProfiles;
