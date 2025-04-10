import React from "react";
import {createClient} from "@/prismicio";
import Link from "next/link";

const LeadershipProfiles = async () => {

  const client = createClient();

  const profiles = await client.getAllByType(
      "people",
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
    <section className="place-items-center  w-full max-w-[4000px] mx-auto ">
      <div className={'grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-8'}>
          {profiles.map((leader, index) => (
              <Link href={`/leadership/${leader.uid}`} key={index}>
                  <article>
                      <div className="rounded-sm w-full h-[19.063rem] lg:h-[19.063rem] 2xl:h-[32.063rem] 3xl:h-[39.063rem] relative overflow-hidden mb-4 lg:mb-8">
                          <img
                              src={leader.data.avatar.url || '/profile.png'}
                              alt={`${leader.data.name}`}
                              // layout="fill"
                              // objectFit="cover"
                              className="rounded-sm object-cover w-full h-full"
                          />
                      </div>
                      <p className="font-semibold text-2xl lg:text-xl  text-secondaryYellow text-center lg:text-start ">
                          {leader.data.name}
                      </p>
                      <p className="text-darkGrey font-normal text-xl lg:text-lg text-center lg:text-start">
                          {leader.data.role}
                      </p>
                  </article>
              </Link>
          ))}
      </div>
    </section>
  );
};

export default LeadershipProfiles;
