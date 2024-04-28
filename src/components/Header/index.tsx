import { useContext } from "react"
import cartImg from "../../assets/cartImg.png"
import { CartContext } from "../../providers/CartContext"
import { StyledSpan } from "../../styles/tipography"
import { StyledHeader } from "./style"

export const Header = () => {
    const { setCartIsOpen } = useContext(CartContext)
    const { cartList } = useContext(CartContext)

    return(
        <StyledHeader>
            <h1>
                <StyledSpan fontSize="40" fontColor="grey0" fontWeight="600">MKS </StyledSpan> 
                <StyledSpan fontSize="20" fontColor="grey0" fontWeight="300">Sistemas</StyledSpan>
            </h1>
            
            <button onClick={() => setCartIsOpen(true)}>
                <img src={cartImg} alt="imagem de um carrinho de compras preto" />
                <StyledSpan fontSize="18" fontColor="grey600" fontWeight="700">{cartList?.length}</StyledSpan>
            </button>
        </StyledHeader>
    )
}