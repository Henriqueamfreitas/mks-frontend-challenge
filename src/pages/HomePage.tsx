import { ProductList } from "../components/ProductList"
import { ProductProvider } from "../providers/ProductContext"

export const HomePage = () => {
    return(
        <main>
            <ProductProvider>
                <ProductList></ProductList>
            </ProductProvider>
        </main>
    )
}