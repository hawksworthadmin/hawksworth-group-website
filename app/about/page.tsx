import Image from "next/image";
import HeroSection from "@/components/common/HeroSection";
import StyledSection from "@/components/common/StyledSection";
import StyledHeaderText from "@/components/common/StyledText/StyledHeaderText";
import VisionSection from "@/components/VisionSection";
import LeadershipProfiles from "@/components/LeadershipProfiles";
import OverviewCard from "@/components/common/OverviewCard";
import CoreValuesSlider from "@/components/CoreValuesSlider";

export default function Home() {
  return (
    <>
      <HeroSection
        imageUrl="/assets/svg/AboutSectionHero.svg"
        header="About Us"
      />
      <StyledSection noPadding={true} id="company-history">
        <OverviewCard
          header="COMPANY HISTORY"
          text="Founded with the mission to bridge the gap between innovative
              ideas and successful execution, Hawksworth has evolved into
              a global leader in advisory, investment, and research services."
          description="With a diverse portfolio and a team of forward-thinking
                professionals, we have expanded our reach to multiple industries
                and regions worldwide."
          containerClassname="lg:px-[120px] lg:py-24 px-0"
        />
        <div className="md:w-[90%] w-full lg:h-[697px] h-[425px] overflow-hidden relative">
          <Image
            src="/assets/svg/companyHistory.svg"
            alt="Company History image"
            layout="fill"
            objectFit="cover"
            className="w-full h-full object-cover"
          />
        </div>
      </StyledSection>
      <StyledSection containerClassname="" noPadding id={"vision-section"}>
        <div
          style={{ backgroundImage: `url(/assets/images/image-12.png)` }}
          className="bg-cover bg-center"
        >
          <StyledHeaderText
            text="Our Vision, Mission & Core Values"
            containerClassname="w-full flex flex-col items-center py-28"
            textClassname="font-tiempos font-bold text-black pb-6"
            subText="Hawksworth Advisors empowers businesses with tailored strategies, secure funding, and optimized operations for sustainable growth."
            subTextClassname="font-normal text-lg lg:w-[55%] w-[90%] text-center "
          />
        </div>
        <VisionSection />
        <CoreValuesSlider />
      </StyledSection>
      <StyledSection containerClassname="py-20" id="leadership-profiles">
        <StyledHeaderText
          text="Leadership Profiles"
          textClassname="font-tiempos font-bold text-black pb-6"
          subText="Our leadership team comprises industry experts, strategists, and entrepreneurs with decades of experience. We are united by our commitment to delivering results and building long-term relationships with our clients and partners."
          subTextClassname="font-normal text-lg lg:w-[63%] w-w-[90%] text-center"
          containerClassname="pb-12 w-full flex flex-col items-center"
        />
        <LeadershipProfiles />
      </StyledSection>
    </>
  );
}
