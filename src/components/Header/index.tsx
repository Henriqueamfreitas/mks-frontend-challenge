import cartImg from "../../assets/cartImg.png"

export const Header = () => {
    return(
        <header>
            <h1><span>MKS</span> <span>Sistemas</span></h1>
            
            <button>
                <img src={cartImg} alt="imagem de um carrinho de compras preto" />
                <span>0</span>
            </button>
        </header>
    )
}