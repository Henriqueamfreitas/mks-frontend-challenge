import { SetStateAction, createContext, useState } from "react";
import { ICartContext, ICartProviderProps, IProductCart } from "../interfaces/CartInterface";

export const CartContext = createContext<ICartContext>({
    setCartList: function (value: SetStateAction<IProductCart[]>): void {
        throw new Error("Function not implemented.");
    },
    cartIsOpen: false,
    setCartIsOpen: function (value: SetStateAction<boolean>): void {
        throw new Error("Function not implemented.");
    },
    addProduct: function (addingProduct: IProductCart): void {
        throw new Error("Function not implemented.");
    },
    removeProduct: function (removingId: number): void {
        throw new Error("Function not implemented.");
    },
    removeOneProduct: function (removingId: number): void {
        throw new Error("Function not implemented.");
    }
})

export const CartProvider = ({ children }: ICartProviderProps) => {
    const [cartList, setCartList] = useState<IProductCart[]>([])
    const [cartIsOpen, setCartIsOpen] = useState(false)

    const addProduct = (addingProduct: IProductCart) => {
        setCartList([...cartList, addingProduct])
    }

    const removeProduct = (removingId: number) => {
        let remainingProducts = cartList.filter(prod => prod.id !== removingId)
        let filteredProduct = cartList.filter(prod => prod.id === removingId)
        filteredProduct.pop()
        if(filteredProduct.length > 0){
            for(let i=0; i<filteredProduct.length; i+=1){
                remainingProducts.push(filteredProduct[i])
            }
            setCartList(remainingProducts)
        } else{
            setCartList(remainingProducts)
        }
    }

    const removeOneProduct = (removingId: number) => {
        let remainingProducts = cartList.filter(prod => prod.id !== removingId)
        setCartList(remainingProducts)
    }

    return(
        <CartContext.Provider value={{ cartList, setCartList, cartIsOpen, setCartIsOpen, addProduct, removeProduct, removeOneProduct }}>
            {children}
        </CartContext.Provider>
    )
}