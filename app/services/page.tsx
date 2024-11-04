import GlassMorphismCard from "@/components/Cards/GlassMorphismCard";
import HeroSection from "@/components/common/HeroSection";
import StyledSection from "@/components/common/StyledSection";
import StyledText from "@/components/common/StyledText";
import StyledHeaderText from "@/components/common/StyledText/StyledHeaderText";
import { servicesData, subServices } from "@/data/servicesData";
import React from "react";

const Services = () => {
  return (
    <div>
      <HeroSection
        imageUrl="/assets/images/services-hero.webp"
        header="Comprehensive services tailored to "
        subheader="your needs"
        description="At Hawksworth Group, we offer a wide range of services designed to help businesses grow, adapt, and thrive. Whether you're looking for strategic advisory, data insights, investment opportunities, or venture incubation, we have the expertise to support your goals."
      />

      <StyledSection>
        <StyledHeaderText
          text="Our Core Services"
          textClassname="lg:text-4xl text-[22px]"
          containerClassname="flex justify-center lg:mb-20 mb-6"
        />

        <div className="space-y-12 lg:space-y-20">
          {servicesData.map((service) => (
            <GlassMorphismCard
              key={service.id.toString()}
              imageUrl={service.imageUrl}
              title={service.title}
              description={service.description}
              linkText={service.linkText}
            />
          ))}
        </div>
      </StyledSection>

      <div className="bg-blue-gradient">
        <StyledSection containerClassname="flex items-center justify-center">
          <StyledHeaderText
            text=" Discover how we can help your business. Explore our subsidiaries for more detailed information on specific services."
            textClassname="text-white text-center lg:text-4xl text-[28px]"
            containerClassname="lg:w-1/2"
          />
        </StyledSection>

        <div className="h-[3px] w-full bg-yellow-white-gradient" />

        <div className="flex flex-col lg:flex-row">
          {subServices.map((subserv) => (
            <div
              key={subserv.id.toString()}
              className="lg:h-[400px] h-[320px] w-full flex flex-col px-6 py-8 lg:p-10 justify-between text-white border-[0.5px] border-secondaryYellow/25"
            >
              <StyledText textClassname="lg:text-2xl text-xl font-bold">
                {subserv.title}
              </StyledText>
              <StyledText
                linkText="View more"
                isLink
                textClassname="text-white text-base"
                stroke="white"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
