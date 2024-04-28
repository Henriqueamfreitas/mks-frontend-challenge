import { IProduct } from "../../../interfaces"

export const ProductCard = ({ product }: {product: IProduct}) => {
    return(
        <li>
            <img src={product.photo} alt={`imagem do produto ${product.name}`} />
            <h2>{product.name}</h2>
            <p>{product.price}</p>
            <p>{product.description}</p>
            <button>Comprar</button>
        </li>
    )
}