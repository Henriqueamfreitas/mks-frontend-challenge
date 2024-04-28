import { ReactNode } from "react";

export interface IProduct {
    brand: string,
    createdAt: string,
    description: string,
    id: number,
    name: string,
    photo: string,
    price: string,
    updatedAt: string,
}

export interface IProductList {
    products: IProduct[],
    count: number
}

export interface IProductProviderProps {
    children: ReactNode; 
}

export interface IProductContext {
    productList?: IProductList,
    isLoading: boolean,
}
