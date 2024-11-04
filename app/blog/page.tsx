import BlogHeaderSection from "@/components/BlogHeaderSection";
import BlogPostsSection from "@/components/BlogPostsSection";
import CategoriesCard from "@/components/Cards/CategoriesCard";
import GlassMorphismCard from "@/components/Cards/GlassMorphismCard";
import StyledSection from "@/components/common/StyledSection";
import StyledText from "@/components/common/StyledText";
import StyledHeaderText from "@/components/common/StyledText/StyledHeaderText";
import Subscribe from "@/components/Subscribe";
import React from "react";

const Blog = () => {
  return (
    <div>
      <BlogHeaderSection />

      <div className="bg-[url('/assets/images/blog-info-bg.webp')] lg:p-20 py-6 px-5">
        <GlassMorphismCard
          imageUrl="/assets/images/feature-img.webp"
          title="Developing a Comprehensive Risk Management Framework for Long-Term Business Success"
          description="Risk management is essential for safeguarding a company’s assets and reputation. We outline how to build a comprehensive framework that identifies, assesses, and mitigates risks across your organization."
          containerClassname="py-5 lg:py-6"
          extraDetail={
            <StyledText textClassname="!font-semibold !text-xs lg:!text-lg mb-4 lg:mb-6">
              🎖️Featured article of the week
            </StyledText>
          }
        />
      </div>

      <StyledSection containerClassname="lg:p-[100px] py-[60px] px-3">
        <StyledHeaderText
          text="Explore by categories"
          containerClassname="flex justify-center lg:mb-12 mb-10"
        />

        <div className="flex flex-wrap lg:gap-4 gap-2 justify-center">
          {categories.map((category, index) => (
            <CategoriesCard key={index} text={category} />
          ))}
        </div>
      </StyledSection>

      <div className="flex justify-center items-center">
        <BlogPostsSection />
      </div>

      <Subscribe />
    </div>
  );
};

export default Blog;

const categories = [
  "Business Strategy & Planning",
  "Leadership & Executive Coaching",
  "Marketing & Brand Strategy",
  "Operational Efficiency",
  "Organizational Development",
  "Sustainability & ESG Consulting",
  "Risk Management",
  "Market Entry & Expansion",
  "Supply Chain Optimization",
  "Organizational Development",
  "Compliance & Regulatory Affairs",
  "Mergers & Acquisitions",
];
