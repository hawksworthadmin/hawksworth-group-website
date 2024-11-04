"use client";
import Image from "next/image";
import Button from "./Components/common/Button";
import HeroSection from "./Components/common/HeroSection";
import StyledSection from "./Components/common/StyledSection";
import StyledText from "./Components/common/StyledText";
import StyledHeaderText from "./Components/common/StyledText/StyledHeaderText";
import KeyNumbersSection from "./Components/KeyNumberSection";
import OverviewSlider from "./Components/OverviewSlider";
import GlassMorphismCard from "./Components/Cards/GlassMorphismCard";
import { ViewSubsidiariesData } from "./hooks/ViewSubsidiareisData";

export default function Home() {
  return (
    <>
      <HeroSection
        imageUrl="/assets/svg/hero.svg"
        header="Empowering Businesses with Innovative Solutions Across "
        subheader="Finance, Insights, Capital, and Ventures."
        description="Hawksworth Group is a global leader in business advisory, investment, and innovation, serving industries with forward-thinking strategies and comprehensive services."
        button=<Button
          label="Explore our subsidiaries"
          onClick={() => console.log("hello")}
          variant="primary"
          className="hover:bg-gradient-to-r from-white via-yellow-75 to-yellow-200 hover:text-white"
          borderStyleClassName="bg-white hover:bg-black"
        />
      />
      <article className="w-full h-[4rem] bg-[#0A0A0A] flex space-between items-center px-10">
        <StyledText variant="secondary" textClassname="text-lg text-white">
          Our Subsidiaries
        </StyledText>
      </article>
      <StyledSection
        containerClassname="py-16"
        imageUrl="/assets/images/dummy/image-23.png"
      >
        <div className="mb-10">
          <StyledText textClassname="font-bold text-lg text-[#9E9E9E]">
            OVERVIEW
          </StyledText>
          <div className="flex justify-between pt-6 w-full">
            <StyledText textClassname="text-left text-3xl text-black w-[33%] font-tiempos font-bold">
              Hawksworth Group is a diversified company with a strong focus on
              providing advisory, investment, and research services across
              various industries.
            </StyledText>
            <div className=" w-[40%]">
              <StyledText
                textClassname="text-left font-normal text-lg text-darkGrey"
                variant="default"
              >
                Our group is dedicated to helping businesses and organizations
                achieve sustainable growth, identify opportunities, and execute
                strategies that drive success.
              </StyledText>
              <StyledText
                linkText="Learn more"
                isLink
                stroke="#021753"
                textClassname="text-left font-bold text-lg text-primaryBlue"
              />
            </div>
          </div>
        </div>
        <OverviewSlider />
      </StyledSection>
      <StyledSection containerClassname="pt-16" noPadding={true}>
        <StyledHeaderText
          text="Key numbers"
          textClassname="font-tiempos font-bold"
        />
        <KeyNumbersSection />
      </StyledSection>
      <section className="bg-primaryBlue py-16 px-44 flex flex-col items-center justify-center relative">
        <StyledHeaderText
          text="Testimonials and Partners"
          textClassname="font-tiempos font-bold text-white pb-6"
        />
        <div className="bg-[#021859]  h-[40.75rem] flex items-center justify-end px-10">
          <div className="w-[40%] h-[31.125rem] absolute left-16">
            <Image
              src="/assets/svg/OverviewImage.svg"
              alt="Slide 1"
              layout="fill"
              objectFit="cover"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-1/2 ">
            <p className="font-tiempos font-bold text-4xl text-white">“</p>
            <StyledText textClassname="text-white font-normal text-base py-6">
              Hawksworth Group&apos;s advisory services were instrumental in our
              company&apos;s expansion. Their team&apos;s expertise and
              strategic guidance enabled us to navigate complex financial
              decisions confidently. We highly recommend their services to
              organizations seeking sustainable growth.— Jane Doe, CEO of ABC
              Corp.
            </StyledText>
            <p className="font-tiempos font-bold text-4xl text-white text-end">
              ”
            </p>
            <div className="mt-8">
              <p className="font-semibold text-lg text-[#E8E8E8]">Jane Doe</p>
              <p className="text-[#D1D1D1] text-base font-normal">
                CEO of ABC Corp.
              </p>
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-start gap-6 mt-8"></div>
        </div>
      </section>
      <StyledSection containerClassname="lg:px-[4rem] py-20">
        <StyledHeaderText
          text="Our Subsidiaries"
          textClassname="font-tiempos font-bold pb-12"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 place-items-center  w-full">
          {ViewSubsidiariesData.map((items, index) => (
            <GlassMorphismCard
              key={index}
              description={items.description}
              title={items.header}
              linkText="Learn More"
              link={items.link}
              imageUrl={items.imageUrl}
              outerContainerClassname="w-[626px] lg:h-[525px]"
              containerClassname="lg:px-5"
              glassCardClassName="lg:px-[20px] lg:py-5"
              styleHeaderClassName="items-start"
              textClassname="text-white font-tiempos font-bold lg:text-[22px]"
              subTextClassname="text-base font-normal"
              linkClassName="mt-3"
            />
          ))}
        </div>
      </StyledSection>
    </>
  );
}
