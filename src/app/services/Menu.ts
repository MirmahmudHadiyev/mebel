import {http} from './http';

export interface MenuData{
    id : number;
    rel_type : number;
    title : string;
    content : string;
    subs?: MenuData[]
}

export interface Menu{
    type : string;
    data : MenuData[]
}

export const getMenusByType = async (type : number, sub : number=0): Promise<Menu> => {
    const { data } = await http.get<Menu>(`menus/${type}/${sub}`);
    return data;
};
