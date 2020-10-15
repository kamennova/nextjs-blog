import { useRouter } from "next/router";
import React, { ChangeEvent, useEffect, useState } from "react";
import styled from "styled-components";
import { addComment, getPost } from "../../api";
import { Button } from "../../components/button";
import { TextArea } from "../../components/inputs";
import Layout from '../../components/layout';
import { Post } from "../../types";

const EmptyPost: Post = {
    title: '',
    body: '',
    comments: [],
    id: 0
};

const PostPage = () => {
    const router = useRouter();
    const [post, setPost] = useState<Post>(EmptyPost);
    const [newComment, setNewComment] = useState('');
    const [showTip, setShowTip] = useState(false);

    const postComment = () => {
        if (newComment.length === 0) {
            setShowTip(true);
        } else {
            addComment(newComment, post.id).then((id) => {
                setPost({ ...post, comments: [...post.comments, { body: newComment, id, postId: post.id }] });
                setNewComment('');
            });
        }
    };

    const updateComment = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setNewComment(e.target.value);
        if (e.target.value.length > 0) setShowTip(false);
    };

    useEffect(() => {
        const fetchPost = async () => {
            if (router.query.id !== undefined) {
                await getPost(Number(router.query.id)).then(post => setPost(post))
            }
        };
        fetchPost();
    }, [router.query.id]);

    return (
        <Layout title={post.title + ' | Blog'}>
            <>
                <h1>{post.title}</h1>
                <p>{post.body}</p>
                <section>
                    <CommentsHead>
                        <h3>Comments</h3>
                        <Counter>{post.comments.length}</Counter>
                    </CommentsHead>
                    <ul>
                        {post.comments.map(comment => <Comment><p>{comment.body}</p></Comment>)}
                    </ul>
                    <form>
                        <TextArea setVal={updateComment} val={newComment} name={'comment'}/>
                    </form>
                    {showTip ? <p>Comment can not be empty!</p> : undefined}
                    <Button onclick={postComment}>Add comment</Button>
                </section>
            </>
        </Layout>
    );
};

const Comment = styled.li`
    border-bottom: 1px solid grey;
    padding: 0 20px;
`;

const CommentsHead = styled.div`
    position: relative;
    
    h3{
        margin: 0;
    }
`;

const Counter = styled.span`
    position: absolute;
    right: 0;
    top: 0;
    display: inline-block;
    background-color: grey;
    color: white;
    padding: 4px;
    border-radius: 3px;
`;

export default PostPage;
