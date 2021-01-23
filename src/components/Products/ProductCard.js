import React from 'react';
import {
  ProductCardWrapper,
  ProductImage,
  ProductImageWrapper,
  ProductPrice,
  ProductName,
  ProductAddButton,
} from './styled';

const ProductCard = () => {
  return (
    <ProductCardWrapper>
      <ProductImageWrapper>
        <ProductImage />
      </ProductImageWrapper>
      <ProductPrice>
        ₺ 39,97
      </ProductPrice>
      <ProductName>
        Gorgeous Office Mug
      </ProductName>
      <ProductAddButton>
        Add
      </ProductAddButton>
    </ProductCardWrapper>
  );
}

export default ProductCard;