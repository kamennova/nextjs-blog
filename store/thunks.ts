import { Action, ActionCreator, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { createPost, getPosts } from "../api";
import { publishPost, setPosts } from "./actions";
import { StoreShape } from "./shape";

export type ThunkResult<ValueType> = ActionCreator<ThunkAction<Promise<ValueType | undefined>, StoreShape, void, Action<void>>>;

export const thunkPublishPost: ThunkResult<number> = (title: string, body: string) => async (dispatch: Dispatch) =>
    await createPost({ title, body }).then((id) => {
        if (id !== undefined) {
            dispatch(publishPost({ title, body, id }));
            return id;
        }
    });

export const thunkFetchPosts: ThunkResult<Action> = () => async (dispatch: Dispatch) => await getPosts()
    .then((posts) => dispatch(setPosts(posts)));
