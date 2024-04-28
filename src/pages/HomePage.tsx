import { Header } from "../components/Header"
import { ProductContext, ProductProvider } from "../providers/ProductContext"
import { ProductList } from "../components/ProductList"
import { Footer } from "../components/Footer"
import { useContext } from "react"
import { CartContext, CartProvider } from "../providers/CartContext"
import { ProductCart } from "../components/ProductCart"

export const HomePage = () => {
    const { isLoading } = useContext(ProductContext)
    const { cartIsOpen, setCartIsOpen } = useContext(CartContext)
    return (
        <main>
            <ProductProvider>
                <CartProvider>
                    <Header />
                    <ProductConsumer />
                    <CartConsumer />
                    <Footer />
                </CartProvider>
            </ProductProvider>
        </main>
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