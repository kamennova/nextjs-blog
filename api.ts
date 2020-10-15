import { Post, PostBase, PostPreview } from "./types";
import axios from 'axios';

const url = 'https://simple-blog-api.crew.red';

export const getPosts = async (): Promise<PostPreview[]> => axios.get(url + '/posts').then(res => res.data);

export const getPost = async (id: number): Promise<Post> => axios.get(url + `/posts/${id}?_embed=comments`)
    .then(res => res.data);

export const createPost = async (post: PostBase): Promise<number | undefined> => axios.post(url + '/posts', post)
    .then((res) => res.data.id);

export const addComment = async (body: string, postId: number) => await axios.post(url + '/comments', {
    body, postId
}).then(res => res.data.id);
