import React from "react";
import StyledSection from "./common/StyledSection";
import StyledHeaderText from "./common/StyledText/StyledHeaderText";
import BlogPostCard from "./Cards/BlogPostCard";
import {CategoriesDocument} from "@/prismicio-types";
import {createClient} from "@/prismicio";
import * as prismic from '@prismicio/client';
import {format} from "date-fns";
import Link from "next/link";

const BlogPostsSection = async ({categories: recentCategories}: {
    categories: CategoriesDocument[]
}) => {
    // const categories = Array.from(
    //     new Set(postsData.map((post) => post.categoryName)),
    // );
    //
    // const postsByCategory = categories.map((categoryName) => ({
    //     categoryName,
    //     posts: postsData.filter((post) => post.categoryName === categoryName),
    // }));

    return (
        <StyledSection
            noPadding
            containerClassname="lg:pt-20 lg:pb-26 py-[60px] space-y-16 lg:space-y-20  px-6 lg:px-20 "
        >
            {recentCategories.map((cat, i) => (
                <div key={cat.uid} className="">
                    <StyledHeaderText
                        text={cat.data.name || ""}
                        containerClassname="lg:mb-10 mb-6 text-center lg:text-left"
                    />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <PostsByCategory category={cat}/>
                    </div>
                </div>
            ))}
        </StyledSection>
    );
};

const PostsByCategory = async ({category}: { category: CategoriesDocument }) => {
    const prismicClient = createClient();
    const theOffice = await prismicClient.getByUID('categories', category.uid);

    const officeRoles = await prismicClient.getByType('blogs', {
        filters: [
            prismic.filter.at('my.blogs.category', theOffice.id),
        ],
        // fetchLinks: ['office.name'],
        orderings: {
            field: 'document.first_publication_date',
            direction: 'desc',
        },
        pageSize: 20,
    });

    return <>
        {officeRoles.results.map((post) => {
            return <Link href={`/blog/${post.uid}`} key={post.uid}>
                <BlogPostCard
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-expect-error
                    categoryName={post.data.category.slug || 'N/A'}
                    title={post.data.title || ''}
                    description={post.data.description || ''}
                    date={format(new Date(post.first_publication_date), 'MMMM dd, yyyy')}
                    imageUrl={post.data.thumbnail.url || ''}
                    readTime={''}
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-expect-error
                    category={post.data.category.slug || 'N/A'}
                    id={post.uid || ''}
                />
            </Link>
        })}
    </>
}

export default BlogPostsSection;
