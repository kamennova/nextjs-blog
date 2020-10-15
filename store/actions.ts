import { PostBase, PostPreview } from "../types";

export const PUBLISH_POST = "Publish_post",
    SAVE_POST_DRAFT = "Save_post_draft",
    SET_POSTS = "Set_posts",
    ACCESS_LOCAL_STORAGE = "Access_local_storage";

export type PublishPostAction = {
    type: typeof PUBLISH_POST;
    post: PostBase;
};

export type AccessLocalStorageAction = {
    type: typeof ACCESS_LOCAL_STORAGE;
};

export type SetPostsAction = {
    type: typeof SET_POSTS;
    posts: PostPreview[];
};

export type SavePostDraftAction = {
    type: typeof SAVE_POST_DRAFT;
    post: PostBase;
};

export const publishPost = (post: PostPreview): PublishPostAction => ({
        post,
        type: PUBLISH_POST,
    }),
    savePostDraft = (post: PostBase): SavePostDraftAction => ({
        post,
        type: SAVE_POST_DRAFT,
    }),
    setPosts = (posts: PostPreview[]): SetPostsAction => ({
        posts,
        type: SET_POSTS,
    }),
    accessLocalStorage = (): AccessLocalStorageAction => ({
        type: ACCESS_LOCAL_STORAGE,
    });

export type PostAction =
    | PublishPostAction
    | SavePostDraftAction
    | SetPostsAction
    | AccessLocalStorageAction;
