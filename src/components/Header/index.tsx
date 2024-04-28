import { useContext } from "react"
import cartImg from "../../assets/cartImg.png"
import { CartContext } from "../../providers/CartContext"

export const Header = () => {
    const { cartIsOpen, setCartIsOpen } = useContext(CartContext)
    return(
        <header>
            <h1><span>MKS</span> <span>Sistemas</span></h1>
            
            <button onClick={() => setCartIsOpen(true)}>
                <img src={cartImg} alt="imagem de um carrinho de compras preto" />
                <span>0</span>
            </button>
        </header>
    )
}