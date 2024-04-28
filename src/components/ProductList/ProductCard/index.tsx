import { IProduct } from "../../../interfaces/ProductInterface"
import shoppingBag from "../../../assets/shopping-bag.png"
import { useContext } from "react"
import { CartContext } from "../../../providers/CartContext"

export const ProductCard = ({ product }: {product: IProduct}) => {
    const { cartList, setCartList, addProduct } = useContext(CartContext)

    return(
        <li>
            <img src={product.photo} alt={`imagem do produto ${product.name}`} />
            <h2>{product.name}</h2>
            <p>{product.price}</p>
            <p>{product.description}</p>
            <button onClick={() => addProduct(product)}>
                Comprar
                <img src={shoppingBag} alt="imagem de uma sacola de compras" />
            </button>
        </li>
    )
}