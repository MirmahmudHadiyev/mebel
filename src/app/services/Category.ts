import {http} from './http';

export interface CategoryData{
    id: number;
    type: number;
    featured: any;
    slug: string;
    title: string;
    content: string
}

export interface Category{
    type : string;
    data : CategoryData[]
}

export const getCategoriesByType = async (type : number, sub : number=0): Promise<Category> => {
    const { data } = await http.get<Category>(`categories/${type}/${sub}`);
    return data;
};
