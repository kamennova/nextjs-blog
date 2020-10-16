import { PostPreview } from "../types";

export type StoreShape = {
    posts: PostPreview[];
};

export const InitialShape: StoreShape = {
    posts: [],
};
