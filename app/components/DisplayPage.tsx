"use client";

import React from "react";
import StyledSection from "./common/StyledSection";
import StyledText from "./common/StyledText";
import StyledHeaderText from "./common/StyledText/StyledHeaderText";
import CategoriesCard from "./Cards/CategoriesCard";
import TestimonialsCard from "./Cards/TestimonialsCard";
import BlogPostCard from "./Cards/BlogPostCard";
import GlassMorphismCard from "./Cards/GlassMorphismCard";
import HeroSection from "./common/HeroSection";
import Button from "./common/Button";

const DisplayPage = () => {
  return (
    <>
      <section>
        {" "}
        <HeroSection
          imageUrl="/assets/svg/hero.svg"
          header="Empowering Businesses with Innovative Solutions Across "
          subheader="Finance, Insights, Capital, and Ventures."
          description="Hawksworth Group is a global leader in business advisory, investment, and innovation, serving industries with forward-thinking strategies and comprehensive services."
          button=<Button
            label="Explore our subsidiaries"
            onClick={() => console.log("hello")}
            variant="primary"
          />
        />
        <StyledSection>
          {/* StyledText for default font */}
          <StyledText>
            Our group is dedicated to helping businesses and organizations
            achieve sustainable growth, identify opportunities, and execute
            strategies that drive success.
          </StyledText>

          {/* StyledText for tiempos font */}
          <StyledText fontType="secondary">
            Hawksworth Group is a diversified company with a strong focus on
            providing advisory, investment, and research services across various
            industries.
          </StyledText>

          {/* StyledText as Link */}
          <StyledText linkText="Learn more" isLink />

          {/* StyledHeaderText */}
          <StyledHeaderText text="Key numbers" subText="Hello there" />

          {/* CategoriesCard */}
          <CategoriesCard text="Business Strategy & Planning" />

          {/* Testimonials Card */}
          <TestimonialsCard text="Working at Hawksworth has provided the chance to solve complex challenges and develop impactful strategies for our clients. The team is always supportive, and each project brings new opportunities to grow. I feel valued and motivated every day." />

          {/* Blog Post Card */}
          <BlogPostCard />

          {/* Subsidiaries Card --- This will be styled to accept children in the future */}
          <GlassMorphismCard />
        </StyledSection>
      </section>
    </>
  );
};

export default DisplayPage;
