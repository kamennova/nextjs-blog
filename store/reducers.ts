import { orderBy } from "lodash/fp";
import { PostAction, PUBLISH_POST, SET_POSTS } from "./actions";
import { InitialShape, StoreShape } from "./shape";

export const appReducers = (
    state: StoreShape = InitialShape,
    action: PostAction
): StoreShape => posts(state, action);

const posts = (state: StoreShape, action: PostAction): StoreShape => {
    switch (action.type) {
        case PUBLISH_POST:
            return { ...state, posts: [action.post, ...state.posts] };
        case SET_POSTS:
            return {
                ...state,
                posts: orderBy(["id"], "desc", action.posts),
            };
        default:
            return state;
    }
};
