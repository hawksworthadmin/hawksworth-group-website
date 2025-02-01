import BlogHeaderSection from "@/components/BlogHeaderSection";
import BlogPostsSection from "@/components/BlogPostsSection";
import CategoriesCard from "@/components/Cards/CategoriesCard";
import GlassMorphismCard from "@/components/Cards/GlassMorphismCard";
import StyledSection from "@/components/common/StyledSection";
import StyledText from "@/components/common/StyledText";
import StyledHeaderText from "@/components/common/StyledText/StyledHeaderText";
import Subscribe from "@/components/Subscribe";
import React from "react";
import {createClient} from "@/prismicio";

const Blog = async () => {
    const client = createClient();

    const recentCategories = await client.getAllByType(
        "categories",
        {
            fetchOptions: {
                cache: "no-store",
                next: { tags: ["prismic", "categories"] },
            },
            limit: 10,
            // orderings: [
            //     {
            //         field: "my.blog_post.published_on",
            //         direction: "desc",
            //     },
            // ],
        },
    );

  return (
    <div>
      <BlogHeaderSection />
      <StyledSection containerClassname="lg:p-[100px] py-[60px] px-3">
        <StyledHeaderText
          text="Explore by categories"
          containerClassname="flex justify-center lg:mb-12 mb-10"
        />

        <div className="flex lg:flex-wrap lg:gap-4 gap-2 lg:justify-center overflow-x-auto whitespace-nowrap cursor-pointer no-scrollbar">
          {recentCategories.map((category, index) => (
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-expect-error
            <CategoriesCard key={index} text={category.data.name} />
          ))}
        </div>
      </StyledSection>

      <div className="bg-[url('/assets/images/dummy/image-23.png')] lg:p-20 py-6 px-5 bg-cover bg-center">
          {
              process.env.NODE_ENV !== "production" && <GlassMorphismCard
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
          }
      </div>
      {/*<div className="relative">*/}
      {/*  <div className="bg-[#F3F3F333]/20 border border-[#F3F3F3] w-full h-[50px] flex gap-7 lg:pl-24 pl-4 pr-4 items-center overflow-x-auto whitespace-nowrap no-scrollbar  cursor-grab">*/}
      {/*    {recentCategories.map((category, index) => (*/}
      {/*      <StyledText*/}
      {/*        key={index}*/}
      {/*        textClassname="font-400 text-base flex items-center h-full text-[#747474] hover:text-textBlue border-b-2 border-transparent hover:border-primaryYellow cursor-pointer"*/}
      {/*      >*/}
      {/*        {category.data.name}*/}
      {/*      </StyledText>*/}
      {/*    ))}*/}
      {/*  </div>*/}
      {/*  <div className="absolute right-14 top-2/4 transform -translate-y-1/2 cursor-pointer custom-bounce-horizontal">*/}
      {/*    <span className="text-textBlue text-3xl font-bold">→</span>*/}
      {/*  </div>*/}
      {/*</div>*/}
      <div className="flex justify-center items-center">
        <BlogPostsSection categories={recentCategories} />
      </div>

      <Subscribe />
    </div>
  );
};

export default Blog;

