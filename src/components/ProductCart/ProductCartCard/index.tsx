import { useContext } from "react"
import { IProduct } from "../../../interfaces/ProductInterface"
import { CartContext } from "../../../providers/CartContext"

export const ProductCartCard = ({ product }: {product: IProduct}) => {
    const { cartList, setCartList, addProduct, removeProduct } = useContext(CartContext)
    const filteredProduct = cartList?.filter(prod => prod.id === product.id)
    return(
        <li>
            <img src={product.photo} alt={`imagem do produto ${product.name}`} />
            <button>X</button>
            <h2>{product.name}</h2>
            <div>
                <span>Qtd:</span>
                <div>
                    <button onClick={() => removeProduct(product.id)}>-</button>
                    <span>{filteredProduct?.length}</span>
                    <button onClick={() => addProduct(product)}>+</button>
                </div>
            </div>
            <p>{product.price}</p>
        </li>
    )
}