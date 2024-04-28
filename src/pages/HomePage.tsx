import { Header } from "../components/Header"
import { ProductProvider } from "../providers/ProductContext"
import { ProductList } from "../components/ProductList"

export const HomePage = () => {
    return(
        <main>
            <ProductProvider>
                <Header />
                <ProductList/>
            </ProductProvider>
        </main>
    )
}