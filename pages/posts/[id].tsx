import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { addComment, getPost } from "../../api";
import Layout from "../../components/layout";
import { LoadIndicator } from "../../components/LoadIndicator";
import { PostComments } from "../../components/PostComments";
import { PageTitle } from "../../components/Titles";
import { useIsLoading } from "../../loading";
import { Post } from "../../types";

const EmptyPost: Post = {
    title: "",
    body: "",
    comments: [],
    id: 0,
};

export default function PostPage(): JSX.Element {
    const router = useRouter();
    const [post, setPost] = useState<Post>(EmptyPost);

    const isLoading = useIsLoading(post.id, (id) => id !== 0);

    const postComment = (body: string) =>
        addComment(body, post.id).then((id) => {
            setPost({
                ...post,
                comments: [...post.comments, { body, id, postId: post.id }],
            });
        });

    useEffect(() => {
        const fetchPost = async () => {
            if (router.query.id !== undefined) {
                await getPost(Number(router.query.id)).then((post) =>
                    setPost(post)
                );
            }
        };
        fetchPost();
    }, [router.query.id]);

    return (
        <Layout title={post.title}>
            {isLoading ? <LoadIndicator/> : undefined}
            <PageTitle>{post.title}</PageTitle>
            <p>{post.body}</p>
            <PostComments comments={post.comments} postComment={postComment}/>
        </Layout>
    );
}
