import { PostAction, PUBLISH_POST, SAVE_POST_DRAFT } from "./actions";
import { InitialShape, StoreShape } from "./shape";

export const appReducers = (state: StoreShape = InitialShape, action: PostAction): StoreShape => posts(state, action);

const posts = (state: StoreShape, action: PostAction): StoreShape => {
    switch (action.type) {
        case PUBLISH_POST:
            return state;
        case SAVE_POST_DRAFT:
            return state;
        default:
            return state;
    }
};
