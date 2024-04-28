import { IProduct } from "../../../interfaces/ProductInterface"
import shoppingBag from "../../../assets/shopping-bag.png"
import { useContext } from "react"
import { CartContext } from "../../../providers/CartContext"
import { StyledProductCard } from "./style"
import { StyledH2, StyledP } from "../../../styles/tipography"

export const ProductCard = ({ product }: { product: IProduct }) => {
    const { addProduct } = useContext(CartContext)

    const formatedPrice = Number(product.price).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
    return (
        <StyledProductCard>
            <div>
                <img src={product.photo} alt={`imagem do produto ${product.name}`} />
                <div>
                    <StyledH2 fontColor="grey500" fontSize="16" fontWeight="400">{product.name}</StyledH2>
                    <StyledP fontColor="grey0" fontSize="15" fontWeight="700">{formatedPrice}</StyledP>
                </div>
                <StyledP fontColor="grey500" fontSize="10" fontWeight="300">{product.description}</StyledP>
            </div>
            <button onClick={() => addProduct(product)}>
                <img src={shoppingBag} alt="imagem de uma sacola de compras" />
                COMPRAR
            </button>
        </StyledProductCard>
    )
}