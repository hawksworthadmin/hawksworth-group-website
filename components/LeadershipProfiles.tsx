import React from "react";
import { createClient } from "@/prismicio";
import Link from "next/link";
// import Image from "next/image";

const LeadershipProfiles = async () => {
  const client = createClient();

  const profiles = await client.getAllByType("people", {
    fetchOptions: {
      cache: "no-store",
      next: { tags: ["prismic", "profiles"] },
    },
    limit: 30,
    orderings: [{ field: "document.first_publication_date", direction: "asc" }],
  });

  const sortedProfiles = profiles.sort((a, b) => {
    const roleHierarchy: { [key: string]: number } = {
      "Global Managing Principal": 1,
      "Africa Managing Partner": 2,
      "Principal Advisor": 3,
      "Senior Advisor": 4,
      Partner: 5,
    };
    const roleA = a.data.role || "";
    const roleB = b.data.role || "";

    return (roleHierarchy[roleA] || 999) - (roleHierarchy[roleB] || 999);
  });

  // console.log(profiles);
  console.log(sortedProfiles);

  return (
    <section className="place-items-center- place-content-center  w-full max-w-[4000px] xl:max-w-[1500px] mx-auto ">
      <div
        className={
          "grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8"
        }
      >
        {sortedProfiles.map((leader, index) => (
          <Link
            href={`/leadership/${leader.uid}`}
            key={index}
            className={"w-full"}
          >
            <article>
              <div
                className="rounded-sm w-full h-[400px] min-h-[400px] relative overflow-hidden mb-4"
                style={{
                  backgroundImage: `url(${leader.data.avatar.url || "/profile.png"})`,
                  backgroundSize: "cover",
                  backgroundPosition: "top",
                }}
              ></div>
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
