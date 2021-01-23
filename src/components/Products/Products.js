import React from 'react';
import { useSelector } from 'react-redux';
import {
  ProductSection,
  ProductHeader,
  ProductNavButton,
  ProductNavigation,
} from './styled';
import ProductCard from './ProductCard';

const Products = () => {
  const products = useSelector((state) => state.products);
  return (
    <>
      <ProductHeader>Products</ProductHeader>
      <ProductNavigation>
        <ProductNavButton color="#F2F0FD" bgColor="#1EA4CE">
          mug
        </ProductNavButton>
        <ProductNavButton color="#1EA4CE" bgColor="#F2F0FD">
          shirt
        </ProductNavButton>
      </ProductNavigation>
      <ProductSection>
        {products && products.map((product) => 
          <ProductCard 
            name={product.name} 
            price={product.price} 
          />  
        )}
      </ProductSection>
    </>
  );
}

export default Products;