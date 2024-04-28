import { ReactNode, createContext, useEffect, useState } from "react";
import { api } from "../services/api";

interface IProductContext {
    productList?: IProductList,
}
export const ProductContext = createContext<IProductContext>({})

interface IProduct {
    brand: string,
    createdAt: string,
    description: string,
    id: number,
    name: string,
    photo: string,
    price: string,
    updatedAt: string,
}

interface IProductList {
    products: IProduct[],
    count: number
}



interface IProductProviderProps {
    children: ReactNode; 
}

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