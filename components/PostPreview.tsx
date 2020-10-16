import Link from "next/dist/client/link";
import React from "react";
import styled from "styled-components";
import { Colors } from "../Colors";
import { PostPreview } from "../types";
import { TildeIcon } from "./icons/Tilde";

const PREVIEW_LEN = 200;

export const PostPreviewItem = (props: PostPreview) => {
    const isCut = props.body !== undefined && props.body.length > PREVIEW_LEN;
    const preview =
        (props.body !== undefined ? props.body.slice(0, PREVIEW_LEN) : "") +
        (isCut ? "..." : "");

    return (
        <PostLi>
            <PostTitle>
                <Link href={`/posts/${props.id}`}>
                    <a>{props.title}</a>
                </Link>
            </PostTitle>
            <PostP>
                {preview}{" "}
                {isCut ? (
                    <Link prefetch href={`/posts/${props.id}`}>
                        Read more
                    </Link>
                ) : undefined}
            </PostP>
            <PostDelimiter />
        </PostLi>
    );
};

const PostTitle = styled.h3`
    margin-top: 0;
    margin-bottom: 10px;

    a {
        text-decoration: none;
        color: black;
    }
`;

const PostLi = styled.li`
    display: flex;
    flex-direction: column;
    padding: 20px 0 10px;

    button {
        margin-right: 40px;
        margin-left: auto;
    }
`;
const PostP = styled.p`
    line-height: 1.6;
    color: grey;

    a {
        color: black;
        text-decoration: underline;
    }
`;

const DelimWrap = styled.div`
    position: relative;
    margin-top: 14px;
    text-align: center;

    &:before,
    &:after {
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        margin: auto 0;

        height: 1px;
        width: 40%;
        background: ${Colors.grey};
    }

    &:after {
        right: 0;
    }

    &:before {
        left: 0;
    }
`;

const PostDelimiter = () => (
    <DelimWrap>
        <TildeIcon size={30} />
    </DelimWrap>
);
