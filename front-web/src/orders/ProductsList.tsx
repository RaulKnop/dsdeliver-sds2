import { checkIsSelected } from "./helper";
import ProductCard from "./ProductsCard";
import { Product } from "./types";

type Props = {
  products: Product[];
  selectedProducts: Product[];
  onSelectProduct: (product: Product) => void;
}

function ProductsList({ products, selectedProducts, onSelectProduct }: Props) {
  return(
   <div className="order-list-container">
     <div className="order-list-items">
       {products.map(product => (
         <ProductCard 
         key={product.id} 
         product={product} 
         onSelectProduct={onSelectProduct}
         isSelected={checkIsSelected(selectedProducts, product)}
         />
       ))}
     </div>
   </div>
  )
}

export default ProductsList; 