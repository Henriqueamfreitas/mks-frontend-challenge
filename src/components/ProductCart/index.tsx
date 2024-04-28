import { useContext } from "react"
import { CartContext } from "../../providers/CartContext"
import { ProductCartCard } from "./ProductCartCard"
import { ProductContext } from "../../providers/ProductContext"
import { IProduct } from "../../interfaces/ProductInterface"

export const ProductCart = () => {
    const { cartIsOpen, setCartIsOpen, cartList } = useContext(CartContext)
    const { productList } = useContext(ProductContext)

    const cartFunction = (product: IProduct) => {
        const filteredProduct = cartList?.filter(prod => prod.id === product.id)
        if (filteredProduct) {
            if (filteredProduct.length > 0) {
                return <ProductCartCard product={product} key={product.id} />
            } else {
                return null
            }
        }
    }

    return (
        <section>
            <div>
                <h2>Carrinho de compras</h2>
                <button onClick={() => setCartIsOpen(false)}>X</button>
            </div>

            {
                <ul>
                    {productList?.products?.map((product) => (
                        cartFunction(product)
                    ))}
                </ul>
            }
            <div>
                <p>Total:</p>
                <p>0</p>
            </div>

            <button>Finalizar compra</button>
        </section>
    )
}