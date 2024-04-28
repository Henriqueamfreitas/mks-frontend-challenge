import { ReactNode, SetStateAction, createContext, useEffect, useState } from "react";
import { api } from "../services/api";
import { ICartContext, ICartProviderProps, IProductCart } from "../interfaces/CartInterface";

export const CartContext = createContext<ICartContext>({
    setCartList: function (value: SetStateAction<IProductCart[] | undefined>): void {
        throw new Error("Function not implemented.");
    },
    cartIsOpen: false,
    setCartIsOpen: function (value: SetStateAction<boolean>): void {
        throw new Error("Function not implemented.");
    }
})

export const CartProvider = ({ children }: ICartProviderProps) => {
    const [cartList, setCartList] = useState<IProductCart[]>()
    const [cartIsOpen, setCartIsOpen] = useState(false)

    return(
        <CartContext.Provider value={{ cartList, setCartList, cartIsOpen, setCartIsOpen }}>
            {children}
        </CartContext.Provider>
    )
}