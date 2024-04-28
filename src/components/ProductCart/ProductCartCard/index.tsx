import { useContext } from "react"
import { IProduct } from "../../../interfaces/ProductInterface"
import { CartContext } from "../../../providers/CartContext"

export const ProductCartCard = ({ product }: {product: IProduct}) => {
    const { cartList, addProduct, removeProduct, removeOneProduct } = useContext(CartContext)
    const filteredProduct = cartList?.filter(prod => prod.id === product.id)
    
    const formatedPrice = (Number(product.price) * (filteredProduct?.length ?? 0)).toLocaleString('pt-BR', { 
        style: 'currency', currency: 'BRL' 
    })

    return(
        <li>
            <img src={product.photo} alt={`imagem do produto ${product.name}`} />
            <button onClick={() => removeOneProduct(product.id)}>X</button>
            <h2>{product.name}</h2>
            <div>
                <span>Qtd:</span>
                <div>
                    <button onClick={() => removeProduct(product.id)}>-</button>
                    <span>{filteredProduct?.length}</span>
                    <button onClick={() => addProduct(product)}>+</button>
                </div>
            </div>
            <p>{formatedPrice}</p>
        </li>
    )
}