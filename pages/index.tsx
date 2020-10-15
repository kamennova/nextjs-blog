import Link from "next/dist/client/link";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getPosts } from "../api";
import { Button } from "../components/button";
import Layout from "../components/layout";
import { PostPreviewItem } from "../components/PostPreview";
import { PostPreview } from "../types";

const PostsList = styled.ul`
    margin-left: 0;
    padding: 0;
    list-style: none;
`;

const BlogHead = styled.div`
    text-align:center;
`;

export default function Home() {
    const [posts, setPosts] = useState<PostPreview[]>([]);

    useEffect(() => {
        const fetchPosts = async () => await getPosts().then(posts => setPosts(posts));

        fetchPosts();
    }, []);

    return (
        <Layout title={'Blog | Home'}>
            <>
                <BlogHead>
                    <h1 className="title">
                        Welcome to The Blog!
                    </h1>

                    <p className="description">
                        Read all the articles!
                    </p>
                </BlogHead>

                <PostsList>
                    {posts.map(post => <PostPreviewItem {...post} />)}
                </PostsList>

                <Button><Link href={'/posts/new'}>Add post</Link></Button>
            </>
        </Layout>
    )
}
