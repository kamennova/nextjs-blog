import { PostPreview } from "../types";

export const PUBLISH_POST = "Publish_post",
    SET_POSTS = "Set_posts";

export type PublishPostAction = {
    type: typeof PUBLISH_POST;
    post: PostPreview;
};

export type SetPostsAction = {
    type: typeof SET_POSTS;
    posts: PostPreview[];
};

export const publishPost = (post: PostPreview): PublishPostAction => ({
        post,
        type: PUBLISH_POST,
    }),
    setPosts = (posts: PostPreview[]): SetPostsAction => ({
        posts,
        type: SET_POSTS,
    });

export type PostAction = PublishPostAction | SetPostsAction;
