import { useContext } from "react"
import { CartContext } from "../../providers/CartContext"
import { ProductCartCard } from "./ProductCartCard"
import { ProductContext } from "../../providers/ProductContext"

export const ProductCart = () => {
    const { cartIsOpen, setCartIsOpen } = useContext(CartContext)
    const { productList } = useContext(ProductContext)

    return (
        <section>
            <div>
                <h2>Carrinho de compras</h2>
                <button onClick={() => setCartIsOpen(false)}>X</button>
            </div>

            <ul></ul>

            <div>
                <p>Total:</p>
                <p>0</p>
            </div>

            <button>Finalizar compra</button>
        </section>
    )
}