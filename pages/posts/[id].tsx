import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { addComment, getPost } from "../../api";
import Layout from "../../components/Layout";
import { LoadIndicator } from "../../components/LoadIndicator";
import { PostComments } from "../../components/PostComments";
import { PageTitle } from "../../components/Titles";
import { useIsLoading } from "../../loading";
import { StoreShape } from "../../store/shape";
import { Post, PostPreview } from "../../types";
import { find } from "lodash/fp";

const EmptyPost: Post = {
    title: "",
    body: "",
    comments: [],
    id: 0,
};

const PostPage = (props: { posts: PostPreview[] }): JSX.Element => {
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
            const preview = find(
                (post: PostPreview) => post.id === Number(router.query.id)
            )(props.posts);

            if (preview !== undefined) {
                setPost({ ...preview, comments: [] });
            }

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
            {isLoading ? <LoadIndicator /> : undefined}
            <PageTitle>{post.title}</PageTitle>
            <p>{post.body}</p>
            <PostComments comments={post.comments} postComment={postComment} />
        </Layout>
    );
};

const mapStateToProps = (state: StoreShape) => ({
    posts: state.posts,
});

export default connect(mapStateToProps)(PostPage);
