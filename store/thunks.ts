import { Action, ActionCreator, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { createPost } from "../api";
import { publishPost } from "./actions";
import { StoreShape } from "./shape";

export type ThunkResult<ValueType> = ActionCreator<ThunkAction<Promise<ValueType | undefined>, StoreShape, void, Action<void>>>;

export const thunkPublishPost: ThunkResult<number> = (title: string, body: string) => async (dispatch: Dispatch) =>
    await createPost({ title, body }).then((id) => {
        if (id !== undefined) {
            dispatch(publishPost({ title, body, id }));
            return id;
        }
    });
