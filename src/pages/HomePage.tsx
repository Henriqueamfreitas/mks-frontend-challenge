import { Header } from "../components/Header"
import { ProductContext, ProductProvider } from "../providers/ProductContext"
import { ProductList } from "../components/ProductList"
import { Footer } from "../components/Footer"
import { useContext } from "react"
import { CartContext, CartProvider } from "../providers/CartContext"
import { ProductCart } from "../components/ProductCart"
import { StyledMain } from "./style"
import { Loading } from "../components/Loading"
import { motion, AnimatePresence } from 'framer-motion';

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
            {isLoading ? <Loading /> : <ProductList />}
        </>
    );
};


const CartConsumer = () => {
    const { cartIsOpen, setCartIsOpen } = useContext(CartContext);

    return (
        <AnimatePresence>
            {cartIsOpen && (
                <motion.div
                    initial={{ opacity: 0, y: 0 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 0 }}
                    transition={{ duration: .3, ease: 'easeOut' }}
                >
                    <ProductCart />
                </motion.div>
            )}
        </AnimatePresence>
    );
};
