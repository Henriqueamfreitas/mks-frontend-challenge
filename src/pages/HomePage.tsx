import { Header } from "../components/Header"
import { ProductContext, ProductProvider } from "../providers/ProductContext"
import { ProductList } from "../components/ProductList"
import { Footer } from "../components/Footer"
import { useContext } from "react"
import { CartContext, CartProvider } from "../providers/CartContext"
import { ProductCart } from "../components/ProductCart"
import { StyledMain } from "./style"

export const HomePage = () => {
    return (
        <StyledMain>
            <ProductProvider>
                <CartProvider>
                    <Header />
                    <div className="productsContainer">
                        <ProductConsumer />
                    </div>
                    <div className="modalContainer">
                        <CartConsumer />
                    </div>
                    <Footer />
                </CartProvider>
            </ProductProvider>
        </StyledMain>
    )
}

const ProductConsumer = () => {
    const { isLoading } = useContext(ProductContext);

    return (
        <>
            {isLoading ? <p>Loading...</p> : <ProductList />}
        </>
    );
};

const CartConsumer = () => {
    const { cartIsOpen, setCartIsOpen } = useContext(CartContext)

    return (
        <>
            {cartIsOpen ? <ProductCart /> : null}
        </>
    );
};