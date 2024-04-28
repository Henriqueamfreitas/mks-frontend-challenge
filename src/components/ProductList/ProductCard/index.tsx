import { IProduct } from "../../../interfaces/ProductInterface"
import shoppingBag from "../../../assets/shopping-bag.png"
import { useContext } from "react"
import { CartContext } from "../../../providers/CartContext"

export const ProductCard = ({ product }: {product: IProduct}) => {
    const { addProduct } = useContext(CartContext)

    const formatedPrice = Number(product.price).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
    return(
        <li>
            <img src={product.photo} alt={`imagem do produto ${product.name}`} />
            <h2>{product.name}</h2>
            <p>{formatedPrice}</p>
            <p>{product.description}</p>
            <button onClick={() => addProduct(product)}>
                Comprar
                <img src={shoppingBag} alt="imagem de uma sacola de compras" />
            </button>
        </li>
    )
}