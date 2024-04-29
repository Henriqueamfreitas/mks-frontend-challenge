import { useContext, useEffect, useRef } from "react"
import { CartContext } from "../../providers/CartContext"
import { ProductCartCard } from "./ProductCartCard"
import { ProductContext } from "../../providers/ProductContext"
import { IProduct } from "../../interfaces/ProductInterface"
import { StyledProductCart } from "./style"
import { StyledH2, StyledP } from "../../styles/tipography"
import { AnimatePresence, motion } from "framer-motion"

export const ProductCart = () => {
    const { cartIsOpen, setCartIsOpen, cartList } = useContext(CartContext)
    const { productList } = useContext(ProductContext)
    const total = cartList?.reduce((prevValue, product) => {
        return prevValue + Number(product.price);
    }, 0);
    const formatedTotal = total?.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })


    const cartFunction = (product: IProduct) => {
        const filteredProduct = cartList?.filter(prod => prod.id === product.id)
        if (filteredProduct) {
            if (filteredProduct.length > 0) {
                return <ProductCartCard product={product} key={product.id} />
            } else {
                return null
            }
        }
    }

    const modalRef = useRef<HTMLDivElement>(null)
    useEffect(() => {
        const handleOutClick = (e: any) => {
            if(!modalRef.current?.contains(e.target)){
                setCartIsOpen(false)
            }
        }

        const handleEsc = (e: any) => {
            if(e.key==="Escape"){
                setCartIsOpen(false)
            }
        }

        window.addEventListener("mousedown", handleOutClick)
        window.addEventListener("keydown", handleEsc)

        return () => {
            window.removeEventListener("mousedown", handleOutClick)
            window.removeEventListener("keydown", handleEsc)
        }
    }, [])

    return (
        <StyledProductCart>
            
            <section                
                ref={modalRef}
            >
                <div>
                    <StyledH2 fontColor="grey0" fontSize="27" fontWeight="700">Carrinho de compras</StyledH2>
                    <button className="closeModalButton" onClick={() => setCartIsOpen(false)}>X</button>
                </div>

                {
                    cartList?.length === 0 ?
                        <StyledP className="emptyCarMessage" fontColor="grey0" fontSize="14" fontWeight="500">
                            Você ainda não adicionou nenhum item ao carrinho
                        </StyledP> :
                        <ul>
                            {productList?.products?.map((product) => (
                                cartFunction(product)
                            ))}
                        </ul>
                }
                <div className="totalValue">
                    <StyledP fontColor="grey0" fontSize="28" fontWeight="700">Total:</StyledP>
                    <StyledP fontColor="grey0" fontSize="28" fontWeight="700">{formatedTotal}</StyledP>
                </div>
                <button className="finalizePurchase">Finalizar compra</button>
            </section>
        </StyledProductCart>
    )
}