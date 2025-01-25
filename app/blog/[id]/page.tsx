import React from "react";
import BlogPostPage from "@/components/common/BlogPostPages";

const page = async (
    {
        params,
        // searchParams,
    }: {
        params: Promise<{ id: string }>
        // searchParams: Promise<{ [key: string]: string | string[] | undefined }>
    }
) => {
    const { id } = await params;
    return <BlogPostPage id={id}/>;
};

export default page;
