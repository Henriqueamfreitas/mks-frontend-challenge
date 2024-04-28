import { useContext } from "react"
import { ProductCard } from "./ProductCard"
import { ProductContext } from "../../providers/ProductContext"

export const ProductList = () => {
    const { productList } = useContext(ProductContext)
    const products = productList?.products

    return(
        <ul>
            {
                products?.map(product => {
                    return(
                        <ProductCard key={product.id} product={product} />
                    )
                })
            }
        </ul>
    )
}