import { Header } from "../components/Header"
import { ProductContext, ProductProvider } from "../providers/ProductContext"
import { ProductList } from "../components/ProductList"
import { Footer } from "../components/Footer"
import { useContext } from "react"

export const HomePage = () => {
    const { isLoading } = useContext(ProductContext)
    console.log(isLoading)
    return(
        <main>            
            <ProductProvider>
                <Header />
                <ProductConsumer />
                <Footer />
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