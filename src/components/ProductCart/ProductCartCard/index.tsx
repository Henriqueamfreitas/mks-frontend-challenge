import { IProduct } from "../../../interfaces/ProductInterface"

export const ProductCartCard = ({ product }: {product: IProduct}) => {
    return(
        <li>
            <img src={product.photo} alt={`imagem do produto ${product.name}`} />
            <h2>{product.name}</h2>
            <div>
                <span>Qtd:</span>
                <div>
                    <button>-</button>
                    <span>quantidade</span>
                    <button>+</button>
                </div>
            </div>
            <p>{product.price}</p>
        </li>
    )
}