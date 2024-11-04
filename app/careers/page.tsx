import CareerListingsSection from "@/components/CareerListingsSection";
import CareersHeroSection from "@/components/CareersHeroSection";
import StyledSection from "@/components/common/StyledSection";
import StyledHeaderText from "@/components/common/StyledText/StyledHeaderText";
import TestimonialsSection from "@/components/TestimonialsSection";
import React from "react";

const Careers = () => {
  return (
    <div>
      {/* <CareersHeroSection /> */}

      <StyledSection containerClassname="bg-[#F3F3F3]">
        <StyledHeaderText
          text="Job Listings & Application"
          subText="At Hawksworth Group, we are always on the lookout for talented individuals who share our passion for innovation, leadership, and impact. Explore current job openings across our group and subsidiaries."
          containerClassname="flex flex-col items-center text-center justify-center lg:mb-20 mb-6 lg:w-1/2 mx-auto"
        />

        <div className="flex justify-center items-center">
          <CareerListingsSection />
        </div>
      </StyledSection>

      <StyledSection>
        <StyledHeaderText
          text="Employee Testimonials"
          containerClassname="flex flex-col items-center text-center justify-center lg:mb-20 mb-6 lg:w-1/2 mx-auto"
        />

        <TestimonialsSection />
      </StyledSection>
    </div>
  );
};

export default Careers;
