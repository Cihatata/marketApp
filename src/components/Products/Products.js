import React from 'react';
import {
  ProductSection,
  ProductHeader,
  ProductNavButton,
  ProductNavigation,
} from './styled';
import ProductCard from './ProductCard';

const Products = () => {
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
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </ProductSection>
    </>
  );
}

export default Products;