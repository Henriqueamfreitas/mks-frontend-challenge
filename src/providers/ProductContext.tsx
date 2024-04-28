import { ReactNode, createContext, useEffect, useState } from "react";
import { api } from "../services/api";
import { IProductContext, IProduct, IProductList, IProductProviderProps } from "../interfaces/ProductInterface";

export const ProductContext = createContext<IProductContext>({
    isLoading: false,
})

export const ProductProvider = ({ children }: IProductProviderProps) => {
    const [productList, setProductList] = useState<IProductList>()
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const getProducts = async () => {
            try{
                setIsLoading(true)
                const { data } = await api.get("/products", {
                    params: {
                        page: 1,
                        rows: 9,
                        sortBy: "id",
                        orderBy: "ASC",
                    }
                })
                setProductList(data)
            } catch (error){    
                console.log(error)
            } finally{
                setIsLoading(false)
            }
        }

        getProducts()
    }, [])


    return(
        <ProductContext.Provider value={{ productList, isLoading }}>
            {children}
        </ProductContext.Provider>
    )
}