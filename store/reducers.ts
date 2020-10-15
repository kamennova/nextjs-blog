import {
    ACCESS_LOCAL_STORAGE,
    PostAction,
    PUBLISH_POST,
    SAVE_POST_DRAFT,
    SET_POSTS,
} from "./actions";
import { InitialShape, StoreShape } from "./shape";
import { loadState } from "./store";

export const appReducers = (
    state: StoreShape = InitialShape,
    action: PostAction
): StoreShape => posts(state, action);

const posts = (state: StoreShape, action: PostAction): StoreShape => {
    switch (action.type) {
        case PUBLISH_POST:
            return state;
        case SAVE_POST_DRAFT:
            return state;
        case SET_POSTS:
            return { ...state, posts: action.posts };
        case ACCESS_LOCAL_STORAGE:
            return {
                ...state,
                myPosts: { ...InitialShape.myPosts, ...loadState() },
            };
        default:
            return state;
    }
};
