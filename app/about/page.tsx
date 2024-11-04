"use client";
import Image from "next/image";
import HeroSection from "../Components/common/HeroSection";
import StyledSection from "../Components/common/StyledSection";
import StyledText from "../Components/common/StyledText";
import StyledHeaderText from "../Components/common/StyledText/StyledHeaderText";
import VisionSection from "../Components/VisionSection";
import LeadershipProfiles from "../Components/LeadershipProfiles";

export default function Home() {
  return (
    <>
      <HeroSection
        imageUrl="/assets/svg/AboutSectionHero.svg"
        header="About Us"
      />
      <StyledSection containerClassname="" noPadding={true}>
        <div
          style={{ backgroundImage: `url(/assets/images/image-12.png)` }}
          className="bg-cover bg-center"
        >
          <StyledHeaderText
            text="Our Vision & Mission"
            textClassname="font-tiempos font-bold text-black pb-6"
            subText="Hawksworth Advisors empowers businesses with tailored strategies, secure funding, and optimized operations for sustainable growth."
            subTextClassname="font-normal text-lg w-[55%] text-center"
            className="py-28"
          />
        </div>
        <VisionSection />
      </StyledSection>
      <StyledSection noPadding={true}>
        <div className="px-[120px] py-24">
          <StyledText textClassname="font-bold text-lg text-[#9E9E9E] capitalize">
            Company History
          </StyledText>
          <div className="flex justify-between pt-6 w-full capitalize">
            <StyledText textClassname="text-left text-3xl text-black w-[33%] font-tiempos font-bold">
              Founded with the mission to bridge the gap between innovative
              ideas and successful execution, Hawksworth Group has evolved into
              a global leader in advisory, investment, and research services.
            </StyledText>
            <div className=" w-[40%]">
              <StyledText
                textClassname="text-left font-normal text-lg text-darkGrey"
                variant="default"
              >
                With a diverse portfolio and a team of forward-thinking
                professionals, we have expanded our reach to multiple industries
                and regions worldwide.
              </StyledText>
            </div>
          </div>
        </div>
        <div className="md:w-[90%] w-full h-[697px] overflow-hidden relative">
          <Image
            src="/assets/svg/companyHistory.svg"
            alt="Company History image"
            layout="fill"
            objectFit="cover"
            className="w-full h-full object-cover"
          />
        </div>
      </StyledSection>
      <StyledSection containerClassname="py-20">
        <StyledHeaderText
          text="Leadership profiles"
          textClassname="font-tiempos font-bold text-black pb-6"
          subText="Our leadership team comprises industry experts, strategists, and entrepreneurs with decades of experience. We are united by our commitment to delivering results and building long-term relationships with our clients and partners."
          subTextClassname="font-normal text-lg w-[63%] text-center"
          className="pb-12"
        />
        <LeadershipProfiles />
      </StyledSection>
    </>
  );
}
