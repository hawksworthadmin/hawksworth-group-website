"use client";
import Image from "next/image";
import Button from "@/components/common/Button";
import HeroSection from "@/components/common/HeroSection";
import StyledSection from "@/components/common/StyledSection";
import StyledText from "@/components/common/StyledText";
import StyledHeaderText from "@/components/common/StyledText/StyledHeaderText";
import KeyNumbersSection from "@/components/KeyNumberSection";
import OverviewSlider from "@/components/OverviewSlider";
import GlassMorphismCard from "@/components/Cards/GlassMorphismCard";
import { ViewSubsidiariesData } from "@/data/ViewSubsidiareisData";
import OverviewCard from "@/components/common/OverviewCard";
import Link from "next/link";
import { useRouter } from "next/navigation";

const subsidiaries = [
  {
    name: "Hawksworth Advisors",
    href: "https://hawksworth-advisors-website.vercel.app/",
  },
  { name: "Hawksworth Insight", href: "" },
  {
    name: "Hawksworth Capital",
    href: "https://hawksworth-capital-website.vercel.app/",
  },
  {
    name: "Hawksworth Venture",
    href: "https://hawksworth-ventures-website.vercel.app/",
  },
];

export default function Home() {
  const router = useRouter();

  return (
    <>
      <HeroSection
        imageUrl="/assets/svg/hero.svg"
        header="Empowering Businesses with Innovative Solutions Across "
        subheader="Finance, Insights, Capital, and Ventures."
        description="Hawksworth is a global leader in business advisory, investment, and innovation, serving industries with forward-thinking strategies and comprehensive services."
        button={
          <Button
            label="Explore our subsidiaries"
            onClick={() => {
              router.push("/#subsidiaries-details");
            }}
            variant="primary"
            className="hover:bg-gradient-to-r from-white via-yellow-75 to-yellow-200 hover:text-white"
            borderStyleClassName="bg-white hover:bg-black"
          />
        }
      />

      <section className=" h-[4rem] bg-[#0A0A0A]  overflow-x-auto no-scrollbar">
        <article className="w-full h-full  flex justify-between items-center lg:px-10 px-4 animate-auto-scroll">
          <div className="h-full flex items-center whitespace-nowrap">
            <StyledText textClassname="text-lg text-white font-tiempos font-bold">
              Our Subsidiaries
            </StyledText>
          </div>
          <div className="h-full flex gap-4 w-40 lg:w-full  lg:justify-end justify-start">
            {subsidiaries.map((subsidiary, index) => (
              <Link
                className="h-full hover:bg-primaryYellow inline-flex items-center text-sm font-medium text-[#E8E8E8] px-6 whitespace-nowrap"
                href={subsidiary.href}
                key={index}
              >
                {subsidiary.name}
              </Link>
            ))}
          </div>
        </article>
      </section>

      <StyledSection
        containerClassname="py-16 px-0 lg:px-[120px]"
        imageUrl="/assets/images/dummy/image-23.png"
        noPadding={true}
      >
        <OverviewCard
          header="OVERVIEW"
          text="  Hawksworth is a diversified company with a strong focus on
              providing advisory, investment, and research services across
              various industries."
          description=" Our group is dedicated to helping businesses and organizations
                achieve sustainable growth, identify opportunities, and execute
                strategies that drive success."
          haslink={true}
          href={"/#subsidiaries-details"}
          linkText="Learn more"
        />

        <OverviewSlider />
      </StyledSection>

      <StyledSection containerClassname="pt-16" noPadding={true}>
        <StyledHeaderText
          containerClassname="w-full flex flex-col items-center"
          text="Key numbers"
          textClassname="font-tiempos font-bold"
        />
        <KeyNumbersSection />
      </StyledSection>
      <section className="bg-primaryBlue py-20 lg:px-48 px-10 flex flex-col items-center justify-center relative">
        <StyledHeaderText
          text="Testimonials and Partners"
          textClassname="font-tiempos font-bold text-white pb-6"
        />
        <div className="bg-white/5  h-[40.75rem] flex flex-col lg-flex-row items-center lg:items-end lg:justify-center lg:px-10 3xl:max-w-[125rem]">
          <div className="lg:w-[40%] w-full lg:h-[31.125rem] h-[13.375rem] relative overflow-hidden lg:absolute lg:left-20 3xl:left-40 left-0">
            <Image
              src="/assets/svg/OverviewImage.svg"
              alt="Slide 1"
              layout="fill"
              objectFit="cover"
              className="w-full h-full object-cover"
            />
          </div>
          ;
          <div className="lg:w-1/2 w-[90%] px-6 lg:px-0 pt-8 lg:pt-0">
            <p className="font-tiempos font-bold text-4xl text-[#D1D1D1]">“</p>
            <StyledText textClassname="text-white font-normal text-base lg:py-6 py-0 text-sm">
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
      <StyledSection
        containerClassname="lg:px-[6.5rem] py-20"
        id="subsidiaries-details"
      >
        <StyledHeaderText
          containerClassname="w-full flex flex-col items-center"
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
              outerContainerClassname="w-[600px] lg:h-[525px] 3xl:min-h-[825px] w-full"
              containerClassname="lg:!px-5"
              glassCardClassName="lg:!px-7 lg:!py-6"
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
