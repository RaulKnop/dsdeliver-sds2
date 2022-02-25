import { SetStateAction, useEffect, useState } from 'react';
import { fetchProducts } from '../api';
import ProductsList from './ProductsList';
import StepsHeader from './StepsHeader';
import './styles.css'
import { OrderLocationdata, Product } from './types';
import OrderLocation from './OrderLocation';

function Orders() {
  const [products, setProducts] = useState<Product[]>([]);
  const [orderLocation, setOrderLocation] = useState<OrderLocationdata>();
   useEffect(() => {
    fetchProducts()
    .then((response: { data: SetStateAction<Product[]>; }) => setProducts(response.data))
    .catch((error: any) => console.log(error))
   }, []);

   
  
  return(
    <div className='orders-container'>
      <StepsHeader />
      <ProductsList products={products} />
      <OrderLocation onChangeLocation={location =>setOrderLocation(location)} />
    </div>
  )
}

export default Orders; 