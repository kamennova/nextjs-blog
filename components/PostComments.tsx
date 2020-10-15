import React from "react";
import { ChangeEvent, useState } from "react";
import styled from "styled-components";
import { Comment } from "../types";
import { Button } from "./buttons";
import { TextArea } from "./inputs";

export const PostComments = (props: {
    comments: Comment[];
    postComment: (b: string) => void;
}) => {
    const [newComment, setNewComment] = useState("");
    const [showTip, setShowTip] = useState(false);

    const postComment = () => {
        if (newComment.length === 0) {
            setShowTip(true);
        } else {
            props.postComment(newComment);
            setNewComment("");
        }
    };

    const updateComment = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setNewComment(e.target.value);
        if (e.target.value.length > 0) setShowTip(false);
    };

    return (
        <section>
            <CommentsHead>
                <h3>Comments</h3>
                <Counter>{props.comments.length}</Counter>
            </CommentsHead>
            <CommentsList>
                {props.comments.map((comment) => (
                    <li>
                        <p>{comment.body}</p>
                    </li>
                ))}
            </CommentsList>
            <form>
                <TextArea
                    setVal={updateComment}
                    val={newComment}
                    name={"comment"}
                />
            </form>
            {showTip ? <p>Comment can not be empty!</p> : undefined}
            <CommentsFooter>
                <Button onclick={postComment}>Add comment</Button>
            </CommentsFooter>
        </section>
    );
};

const CommentsList = styled.ul`
    list-style: none;
    padding-left: 20px;

    li {
        border-bottom: 1px solid lightgrey;
    }

    li:last-of-type {
        border-bottom: none;
    }
`;

const CommentsHead = styled.div`
    position: relative;
    margin-top: 30px;

    h3 {
        margin: 0;
    }
`;

const CommentsFooter = styled.div`
    text-align: center;
    padding: 20px 0;
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
