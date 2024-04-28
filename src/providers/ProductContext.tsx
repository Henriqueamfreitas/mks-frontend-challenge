import { ReactNode, createContext, useEffect, useState } from "react";
import { api } from "../services/api";
import { IProductContext, IProduct, IProductList, IProductProviderProps } from "../interfaces";

export const ProductContext = createContext<IProductContext>({})

export const ProductProvider = ({ children }: IProductProviderProps) => {
    const [productList, setProductList] = useState<IProductList>()

    useEffect(() => {
        const getProducts = async () => {
            try{
                const { data } = await api.get("/products?page=1&rows=9&sortBy=id&orderBy=ASC")
                setProductList(data)
            } catch (error){    
                console.log(error)
            }
        }

        getProducts()
    }, [])


    return(
        <ProductContext.Provider value={{ productList }}>
            {children}
        </ProductContext.Provider>
    )
}