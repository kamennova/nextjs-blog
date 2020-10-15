import Link from "next/dist/client/link";
import React from "react";
import styled from "styled-components";
import { PostPreview } from "../types";
import { Button } from "./button";

const PostTitle = styled.h3`
  color: red;
`;
const PostLi = styled.li`
   margin-bottom: 20px;
   border-bottom: 1px solid black;
   padding: 20px 0;
`;
const PostDesc = styled.p`
    line-height: 1.5;
`;

export const PostPreviewItem = (props: PostPreview) => (
    <PostLi>
        <PostTitle><Link href={`/posts/${props.id}`}><a>{props.title}</a></Link></PostTitle>
        <p>{props.body}</p>
        <Button><Link href={`/posts/${props.id}`}>Read more</Link></Button>
    </PostLi>
);
