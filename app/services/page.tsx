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
        description="At Hawksworth, we offer a wide range of services designed to help businesses grow, adapt, and thrive. Whether you're looking for strategic advisory, data insights, investment opportunities, or venture incubation, we have the expertise to support your goals."
      />

      <StyledSection containerClassname="py-[120px] lg:px-[80px]">
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
              link={service.link}
              description={service.description}
              linkText={service.linkText}
              outerContainerClassname="3xl:min-h-[825px]"
            />
          ))}
        </div>
      </StyledSection>

      <StyledSection containerClassname="flex items-center justify-center !bg-blue-gradient py-[100px]">
        <StyledHeaderText
          text=" Discover how we can help your business. Explore our subsidiaries for more detailed information on specific services."
          textClassname="text-white text-center lg:text-4xl text-[28px]"
          containerClassname="lg:w-1/2"
        />
      </StyledSection>
      <div className="h-[3px] w-full bg-yellow-white-gradient" />

      <div className="flex flex-col lg:flex-row bg-primaryBlue">
        {subServices.map((subserv) => (
          <div
            key={subserv.id.toString()}
            className="lg:h-[400px] h-[320px] w-full flex flex-col px-6 py-8 lg:p-10 justify-between text-white hover:text-darkGrey border-[0.5px] hover:border-1 hover:border-secondaryYellow border-secondaryYellow/25 group transition-all delay-75 duration-300 ease-in-out hover:bg-white"
          >
            <div className="">
              <StyledText textClassname="lg:text-2xl text-xl font-bold">
                {subserv.title}
              </StyledText>
              <StyledText textClassname="!text-sm mt-2 hidden group-hover:block">
                {subserv.description}
              </StyledText>
            </div>

            <StyledText
              linkText="View more →"
              isLink
              textClassname="text-white text-base group-hover:text-secondaryYellow"
              hasArrowIcon={false}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
