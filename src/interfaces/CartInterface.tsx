import { ReactNode, SetStateAction } from "react";

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
    setCartList: React.Dispatch<React.SetStateAction<IProductCart[] | undefined>>,
    cartIsOpen: boolean,
    setCartIsOpen: React.Dispatch<SetStateAction<boolean>>,
}
