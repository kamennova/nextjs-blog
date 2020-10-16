import { PostPreview } from "../ts/types";

export type StoreShape = {
    posts: PostPreview[];
};

export const InitialShape: StoreShape = {
    posts: [],
};
