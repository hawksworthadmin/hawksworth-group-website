"use client";

import StyledSection from "@/components/common/StyledSection";
import React, { useEffect, useState } from "react";
import { postsData } from "@/data/blogPostsData";
import { useParams } from "next/navigation";
import Image from "next/image";
import StyledText from "./StyledText";
import Link from "next/link";
import Head from "next/head";
import { SocialMedia } from "@/data/SocialMediaSharing";
import BlogPostCard from "../Cards/BlogPostCard";
import Subscribe from "../Subscribe";

const BlogPostPage = () => {
  const params = useParams();
  const id = params?.id;

  const [currentUrl, setCurrentUrl] = useState<string>("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentUrl(window.location.href);
    }
  }, []);
  const post = postsData.find((post) => post.id === Number(id));

  // Find all unique categories
  const categories = Array.from(
    new Set(postsData.map((post) => post.category)),
  );

  // Get all posts in the same category as the current post
  const relatedPosts = categories
    .filter((category) => category === post?.category) // Filter categories to include only the current post's category
    .map((category) => ({
      category,
      posts: postsData.filter(
        (posts) => posts.categoryName === category && posts.id !== post?.id, // Exclude the current post
      ),
    }));
  if (!post) {
    return (
      <StyledSection containerClassname="lg:px-[120px] lg:py-[170px] py-[120px] pt-[150px]">
        <h1 className="text-3xl font-bold">Post not found</h1>
      </StyledSection>
    );
  }
  return (
    <>
      <Head>
        {/* Basic Meta Tags */}
        <title>{post?.title}</title>
        <meta name="description" content={post?.description} />
        <meta name="author" content="Your App Name" />

        {/* Open Graph Meta Tags for Social Media */}
        <meta property="og:title" content={post?.title} />
        <meta property="og:description" content={post?.description} />
        <meta property="og:image" content={post?.imageUrl} />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:type" content="article" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:title" content={post?.title} />
        <meta name="twitter:description" content={post?.description} />
        <meta name="twitter:image" content={post?.imageUrl} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={currentUrl} />
      </Head>
      <StyledSection containerClassname="pt-[70px]" noPadding>
        <div className="lg:h-[31.25rem] h-[20rem] w-full relative">
          <Image
            src={post?.imageUrl}
            alt={post?.title}
            fill
            className="object-cover absolute top-0 left-0 right-0 object-center"
          />
        </div>
      </StyledSection>
      <StyledSection containerClassname="py-16">
        <div className="flex items-center space-x-1 text-nowrap">
          {post?.category && (
            <>
              <StyledText textClassname="text-[#347F62] font-semibold lg:!text-base !text-sm">
                {post?.category}
              </StyledText>
              <span>•</span>
            </>
          )}
          <StyledText textClassname="lg:!text-sm !text-xs">
            {" "}
            {post?.date}
          </StyledText>{" "}
          <span>•</span>
          <StyledText textClassname="lg:!text-sm !text-xs">
            {post?.readTime}
          </StyledText>
        </div>
        <StyledText textClassname="text-black !text-xl font-tiempos font-bold !lg:text-[2.5rem] pt-5">
          {post?.title}
        </StyledText>
        <StyledText textClassname="text-[#343434] !text-sm  !lg:text-lg pt-2">
          {post?.description}
        </StyledText>
        <div className="flex  items-center pt-5 gap-4">
          <StyledText textClassname="text-[#898989] !text-sm  ">
            Share this post on:
          </StyledText>
          <div className="flex gap-4">
            {SocialMedia.map((item, index) => (
              <Link
                href={item.link(currentUrl, post.title)}
                target="_blank"
                key={index}
                aria-label={`Follow us on ${item.name}`}
              >
                <div className="bg-[#F3F3F366] rounded-full flex items-center justify-center box-border h-[28px] lg:w-[32px] lg:h-[32px] w-[28px]">
                  <div className="flex items-center justify-center">
                    {item.icon}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <StyledSection noPadding>
          <StyledText textClassname="text-[#747474] !text-sm !lg:text-lg pt-5">
            Risk management is not just about avoiding pitfalls; it is a
            strategic approach to ensure business longevity and resilience in a
            constantly evolving landscape. By identifying, assessing, and
            mitigating risks, businesses can safeguard their operations, improve
            decision-making, and seize opportunities with confidence. This
            article outlines essential steps for building a robust risk
            management framework that supports long-term success.
          </StyledText>
        </StyledSection>
        {relatedPosts && relatedPosts[0]?.posts?.length > 0 && (
          <StyledSection noPadding>
            {relatedPosts.map(({ category, posts }) => (
              <div key={category}>
                <StyledText textClassname="lg:mb-5 mb-2 mt-14 text-center font-bold font-tiempos lg:text-left text-[#0A0A0A] lg:!text-xl !text-lg">
                  Other related posts
                </StyledText>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-2xl">
                  {posts.map((post) => (
                    <BlogPostCard key={post.id.toString()} {...post} />
                  ))}
                </div>
              </div>
            ))}
          </StyledSection>
        )}
      </StyledSection>
      <Subscribe />
    </>
  );
};

export default BlogPostPage;
