export const ProductCard = ({ product }: any) => {
    return(
        <li>
            <img src={product.photo} alt="" />
            <h2>{product.name}</h2>
            <p>{product.price}</p>
            <p>{product.description}</p>
            <button>Comprar</button>
        </li>
    )
}