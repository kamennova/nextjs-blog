import { PostBase, PostPreview } from "../types";

export type MyPostsState = {
    drafts: PostBase[];
    published: {
        ids: number[];
        items: PostPreview[];
    };
};

export type StoreShape = {
    posts: PostPreview[];
    myPosts: MyPostsState;
};

export const InitialShape: StoreShape = {
    posts: [],
    myPosts: {
        drafts: [],
        published: {
            ids: [],
            items: [],
        },
    },
};
