import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { PostBase } from "../types";
import { appReducers } from "./reducers";
import { InitialShape, MyPostsState } from "./shape";

const LocalStorageKey = "NextJsBlog";

type LocalStorageState = {
    publishedIds: number[];
    drafts: PostBase[];
};

export const loadState = (): MyPostsState | undefined => {
    try {
        const serialized = localStorage.getItem(LocalStorageKey);

        if (serialized === null) {
            return undefined;
        }

        const parsed: LocalStorageState = JSON.parse(serialized);

        return {
            published: { ids: parsed.publishedIds, items: [] },
            drafts: parsed.drafts,
        };
    } catch (err) {
        console.log("Could not load local storage state", err);

        return undefined;
    }
};

const saveState = (state: { [key: string]: any }) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem(LocalStorageKey, serializedState);
    } catch (err) {
        console.log("Could not save state", err);
    }
};

const store = createStore(appReducers, InitialShape, applyMiddleware(thunk));

store.subscribe(() => {
    saveState({
        publishedIds: store.getState().myPosts.published.ids,
        drafts: store.getState().myPosts.drafts,
    });
});

export default store;
