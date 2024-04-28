import { useContext } from "react"
import { ProductCard } from "./ProductCard"
import { ProductContext } from "../../providers/ProductContext"
import { StyledProductList } from "./style"

export const ProductList = () => {
    const { productList } = useContext(ProductContext)
    const products = productList?.products

    return(
        <StyledProductList>
            {
                products?.map(product => {
                    return(
                        <ProductCard key={product.id} product={product} />
                    )
                })
            }
        </StyledProductList>
    )
}