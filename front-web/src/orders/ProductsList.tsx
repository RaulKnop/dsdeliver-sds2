import ProductCard from "./ProductsCard";
import { Product } from "./types";

type Props = {
  products: Product[];
}

function ProductsList({ products }: Props) {
  return(
   <div className="order-list-container">
     <div className="order-list-items">
       {products.map(product => (
         <ProductCard key={product.id} product={product} />
       ))}
     </div>
   </div>
  )
}

export default ProductsList; 