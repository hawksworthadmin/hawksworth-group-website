import React from "react";

import TestimonialsCard from "./Cards/TestimonialsCard";
import { testimonialsData } from "@/data/testimonialsData";

const TestimonialsSection = () => {
  return (
    <div className="lg:space-y-20 space-y-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {testimonialsData.slice(0, 2).map((testimonial) => (
          <TestimonialsCard
            key={testimonial.id}
            name={testimonial.name}
            position={testimonial.position}
            image={testimonial.image}
            testimonial={testimonial.testimonial}
          />
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {testimonialsData.slice(2, 5).map((testimonial) => (
          <TestimonialsCard
            key={testimonial.id}
            name={testimonial.name}
            position={testimonial.position}
            image={testimonial.image}
            testimonial={testimonial.testimonial}
          />
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {testimonialsData.slice(5, 7).map((testimonial) => (
          <TestimonialsCard
            key={testimonial.id}
            name={testimonial.name}
            position={testimonial.position}
            image={testimonial.image}
            testimonial={testimonial.testimonial}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialsSection;
