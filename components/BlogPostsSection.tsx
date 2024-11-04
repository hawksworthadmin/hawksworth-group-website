import React from "react";
import StyledSection from "./common/StyledSection";
import StyledHeaderText from "./common/StyledText/StyledHeaderText";
import BlogPostCard from "./Cards/BlogPostCard";
import { postsData } from "@/data/blogPostsData";

const BlogPostsSection = () => {
  const categories = Array.from(
    new Set(postsData.map((post) => post.categoryName))
  );

  const postsByCategory = categories.map((categoryName) => ({
    categoryName,
    posts: postsData.filter((post) => post.categoryName === categoryName),
  }));

  return (
    <StyledSection containerClassname="lg:pt-20 lg:pb-26 py-[60px] space-y-16 lg:space-y-20">
      {postsByCategory.map(({ categoryName, posts }) => (
        <div key={categoryName} className="">
          <StyledHeaderText
            text={categoryName || ""}
            containerClassname="lg:mb-10 mb-6 text-center lg:text-left"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {posts.map((post) => (
              <BlogPostCard key={post.id.toString()} {...post} />
            ))}
          </div>
        </div>
      ))}
    </StyledSection>
  );
};

export default BlogPostsSection;
