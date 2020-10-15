export type PostBase = {
    title: string,
    body: string,
};

export type PostPreview = PostBase & {
    id: number
}

export type Comment = {
    id: number,
    postId: number,
    body: string,
};

export type Post = PostPreview & {
    comments: Comment[]
};
