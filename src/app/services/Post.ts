import {http} from './http';
import {CategoryData} from "./Category";

export interface PostData{
    id : number;
    type: number;
    date: string;
    parent: number;
    parent_name: string;
    parent2: number;
    parent2_name: string;
    view: number;
    title: string;
    featured: string;
    post_file: any;
    slug: any;
    content: string;
    excerpt: string;
    metas? : any[],
    categories?: CategoryData[],
    child_posts? : PostData[]
}

export interface Posts{
    type : string;
    data : PostData[]
}

export interface Post{
    type : string;
    data : PostData
}

export interface InsertPost{
    content? : string;
    parent_id? : number;
    titles? : string;
    title? : string;
    post_file? : string;
    cat_id? : number;
    cats_ids? : string;
    meta? : any[];
    images? : any[];
}

export const getPostsByType = async (type : number, children_posts : number=0): Promise<Posts> => {
    let hasChildrenPosts=(children_posts > 0) ? `?children_posts=${children_posts}` : '';

    const { data } = await http.get<Posts>(`posts/${type}${hasChildrenPosts}`);
    return data;
};

export const getPostById = async (id : number): Promise<Post> => {
    const { data } = await http.get<Post>(`post/id/${id}`);
    return data;
};

export const getPostBySlug = async (slug : string): Promise<Post> => {
    const { data } = await http.get<Post>(`post/${slug}`);
    return data;
};

export const getPostByCategoryId = async (id : number): Promise<Posts> => {
    const { data } = await http.get<Posts>(`category/id/posts/${id}`);
    return data;
};

export const getChildPosts = async (child_type : number, post_id : number): Promise<Posts> => {
    const { data } = await http.get<Posts>(`child_posts/${child_type}/${post_id}`);
    return data;
};

export const saveForm = async (post_type : number, formData : InsertPost): Promise<Post> => {
    const { data } = await http.post<Post>(`posts/saveForm/${post_type}`, formData);
    return data;
};

