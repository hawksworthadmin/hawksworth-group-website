import StyledSection from "@/components/common/StyledSection";
import React from "react";
import Image from "next/image";
import StyledText from "./StyledText";
import Link from "next/link";
import {SocialMedia} from "@/data/SocialMediaSharing";
import Subscribe from "../Subscribe";
import {createClient} from "@/prismicio";
import Head from "next/head";
import {format} from "date-fns";
import {PrismicRichText} from "@prismicio/react";

const BlogPostPage = async ({id}: { id: string }) => {
    const prismicClient = createClient();
    const thePost = await prismicClient.getByUID('blogs', id);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    const theCategory = await prismicClient.getByUID('categories', thePost.data.category.uid);
    const currentUrl = `${process.env.NEXT_PUBLIC_HOST}/blog/${thePost.uid}`;

    return (
        <>
            <Head>
                <title>{thePost.data.title}</title>
                <meta name="description" content={thePost.data?.description || 'New blog post'}/>
                <meta name="author" content={`Hawksworth group`}/>

                <meta property="og:title" content={thePost.data.title || ''}/>
                <meta property="og:description" content={thePost.data?.description || 'New blog post'}/>
                <meta property="og:image" content={thePost.data.thumbnail.url || ''}/>
                <meta property="og:url" content={currentUrl}/>
                <meta property="og:type" content="article"/>

                <meta name="twitter:title" content={thePost.data.title || ''}/>
                <meta name="twitter:description" content={thePost.data?.description || 'New blog post'}/>
                <meta name="twitter:image" content={thePost.data.thumbnail.url || ''}/>
                <meta name="twitter:card" content="summary_large_image"/>
                <meta property="twitter:url" content={currentUrl}/>
            </Head>
            <StyledSection containerClassname="pt-[70px]" noPadding>
                <div className="lg:h-[31.25rem] h-[20rem] w-full relative">
                    <Image
                        src={thePost.data.thumbnail.url || ''}
                        alt={thePost.data.title || ''}
                        fill
                        className="object-cover absolute top-0 left-0 right-0 object-center"
                    />
                </div>
            </StyledSection>
            <StyledSection containerClassname="py-16">
                <div className="flex items-center space-x-1 text-nowrap">
                    <>
                        <StyledText textClassname="text-[#347F62] font-semibold lg:!text-base !text-sm">
                            {theCategory.data.name}
                        </StyledText>
                        <span>•</span>
                    </>
                    <StyledText textClassname="lg:!text-sm !text-xs">
                        {" "}
                        {format(new Date(thePost.first_publication_date), 'MMMM dd, yyyy')}
                    </StyledText>{" "}
                    <span>•</span>
                    <StyledText textClassname="lg:!text-sm !text-xs">
                        3 min read
                    </StyledText>
                </div>
                <StyledText textClassname="text-black !text-xl font-tiempos font-bold !lg:text-[2.5rem] pt-5">
                    {thePost.data.title}
                </StyledText>
                <StyledText textClassname="text-[#343434] !text-sm  !lg:text-lg pt-2">
                    {thePost.data?.description}
                </StyledText>
                <div className="flex  items-center pt-5 gap-4">
                    <StyledText textClassname="text-[#898989] !text-sm  ">
                        Share this post on:
                    </StyledText>
                    <div className="flex gap-4">
                        {SocialMedia.map((item, index) => (
                            <Link
                                href={item.link(currentUrl, thePost.data.title || '')}
                                target="_blank"
                                key={index}
                                aria-label={`Follow us on ${item.name}`}
                            >
                                <div
                                    className="bg-[#F3F3F366] rounded-full flex items-center justify-center box-border h-[28px] lg:w-[32px] lg:h-[32px] w-[28px]">
                                    <div className="flex items-center justify-center">
                                        {item.icon}
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
                <StyledSection noPadding>
                    <div className={'prismic_content'}>
                        <PrismicRichText field={thePost.data.content}/>
                    </div>
                </StyledSection>
            </StyledSection>
            <Subscribe/>
        </>
    );
};

export default BlogPostPage;