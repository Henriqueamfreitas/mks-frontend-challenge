import { useContext } from "react"
import { IProduct } from "../../../interfaces/ProductInterface"
import { CartContext } from "../../../providers/CartContext"
import { StyledProductCartCard } from "./style"
import { StyledH2, StyledP, StyledSpan } from "../../../styles/tipography"

export const ProductCartCard = ({ product }: {product: IProduct}) => {
    const { cartList, addProduct, removeProduct, removeOneProduct } = useContext(CartContext)
    const filteredProduct = cartList?.filter(prod => prod.id === product.id)
    
    const formatedPrice = (Number(product.price) * (filteredProduct?.length ?? 0)).toLocaleString('pt-BR', { 
        style: 'currency', currency: 'BRL' 
    })

    return(
        <StyledProductCartCard>
            <img src={product.photo} alt={`imagem do produto ${product.name}`} />
            <button className="excludeAllButton" onClick={() => removeOneProduct(product.id)}>X</button>
            <StyledH2 fontColor="grey500" fontWeight="400" fontSize="13">{product.name}</StyledH2>
            <div>
                <StyledSpan fontColor="grey600" fontSize="5" fontWeight="400">Qtd:</StyledSpan>
                <div>
                    <button className="addRemoveButton" onClick={() => removeProduct(product.id)}>-</button>
                    <StyledSpan fontColor="grey600" fontSize="8" fontWeight="400">{filteredProduct?.length}</StyledSpan>
                    <button className="addRemoveButton"  onClick={() => addProduct(product)}>+</button>
                </div>
            </div>
            <StyledP fontColor="grey600" fontSize="14" fontWeight="700">{formatedPrice}</StyledP>
        </StyledProductCartCard>
    )
}