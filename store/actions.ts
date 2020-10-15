import { PostBase, PostPreview } from "../types";

export const PUBLISH_POST = 'Publish_post',
    SAVE_POST_DRAFT = 'Save_post_draft';

export type PublishPostAction = {
    type: typeof PUBLISH_POST,
    post: PostBase,
};

export type SavePostDraftAction = {
    type: typeof SAVE_POST_DRAFT,
    post: PostBase,
};

export const publishPost = (post: PostPreview): PublishPostAction => ({ post, type: PUBLISH_POST }),
    savePostDraft = (post: PostBase): SavePostDraftAction => ({ post, type: SAVE_POST_DRAFT });

export type PostAction = PublishPostAction | SavePostDraftAction;
