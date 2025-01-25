import React from "react";

import TestimonialsCard from "./Cards/TestimonialsCard";
import {testimonialsData} from "@/data/testimonialsData";
import {createClient} from "@/prismicio";

const TestimonialsSection = async () => {
    const client = createClient();

    const testimonials = await client.getAllByType(
        "testimonials",
        {
            fetchOptions: {
                cache: "no-store",
                next: {tags: ["prismic", "testimonials"]},
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
        <div className="lg:space-y-20 space-y-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {testimonials.map((testimonial) => (
                    <TestimonialsCard
                        key={testimonial.id}
                        name={testimonial.data.full_name || ''}
                        position={testimonial.data.role || ''}
                        image={testimonial.data.avatar.url || ''}
                        testimonial={testimonial.data.content || ''}
                    />
                ))}
            </div>

            {/*<div className="grid grid-cols-1 md:grid-cols-3 gap-10">*/}
            {/*    {testimonialsData.slice(2, 5).map((testimonial) => (*/}
            {/*        <TestimonialsCard*/}
            {/*            key={testimonial.id}*/}
            {/*            name={testimonial.name}*/}
            {/*            position={testimonial.position}*/}
            {/*            image={testimonial.image}*/}
            {/*            testimonial={testimonial.testimonial}*/}
            {/*        />*/}
            {/*    ))}*/}
            {/*</div>*/}

            {/*<div className="grid grid-cols-1 md:grid-cols-2 gap-10">*/}
            {/*    {testimonialsData.slice(5, 7).map((testimonial) => (*/}
            {/*        <TestimonialsCard*/}
            {/*            key={testimonial.id}*/}
            {/*            name={testimonial.name}*/}
            {/*            position={testimonial.position}*/}
            {/*            image={testimonial.image}*/}
            {/*            testimonial={testimonial.testimonial}*/}
            {/*        />*/}
            {/*    ))}*/}
            {/*</div>*/}
        </div>
    );
};

export default TestimonialsSection;
