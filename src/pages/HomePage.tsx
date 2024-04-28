import { Header } from "../components/Header"
import { ProductProvider } from "../providers/ProductContext"
import { ProductList } from "../components/ProductList"
import { Footer } from "../components/Footer"

export const HomePage = () => {
    return(
        <main>
            <ProductProvider>
                <Header />
                <ProductList/>
                <Footer />
            </ProductProvider>
        </main>
    )
}