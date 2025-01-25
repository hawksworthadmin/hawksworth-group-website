import React from "react";
import JobListingsCard from "./Cards/JobListingsCard";
import {JobListingsData} from "@/data/JobListingsData";
import {createClient} from "@/prismicio";

const CareerListingsSection = async () => {
    const client = createClient();

    const jobs = await client.getAllByType(
        "jobs",
        {
            fetchOptions: {
                cache: "no-store",
                next: {tags: ["prismic", "jobs"]},
            },
            limit: 20,
            // orderings: [
            //     {
            //         field: "my.blog_post.published_on",
            //         direction: "desc",
            //     },
            // ],
        },
    );

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {jobs.map((listings, index) => {
                return <JobListingsCard
                    key={index}
                    image={listings.data.thumbnail.url || ''}
                    Header={listings.data.title || ''}
                    Subtext={listings.data.description || ''}
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-expect-error
                    Link={listings.data.url.url || ''}
                />
            })}
        </div>
    );
};

export default CareerListingsSection;
