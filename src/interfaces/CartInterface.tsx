import { ReactNode, SetStateAction } from "react";
import { IProduct } from "./ProductInterface";

export interface IProductCart {
    brand: string,
    createdAt: string,
    description: string,
    id: number,
    name: string,
    photo: string,
    price: string,
    updatedAt: string,
}

export interface ICartProviderProps {
    children: ReactNode; 
}

export interface ICartContext {
    cartList?: IProductCart[],
    setCartList: React.Dispatch<SetStateAction<IProductCart[]>>,
    cartIsOpen: boolean,
    setCartIsOpen: React.Dispatch<SetStateAction<boolean>>,
    addProduct: (addingProduct: IProduct) => void,
    removeProduct: (removingId: number) => void,
    removeOneProduct: (removingId: number) => void, 
}
