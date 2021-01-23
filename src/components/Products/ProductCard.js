import React from 'react';
import PropTypes from 'prop-types';
import {
  ProductCardWrapper,
  ProductImage,
  ProductImageWrapper,
  ProductPrice,
  ProductName,
  ProductAddButton,
} from './styled';

const ProductCard = ({ price, name }) => {
  return (
    <ProductCardWrapper>
      <ProductImageWrapper>
        <ProductImage />
      </ProductImageWrapper>
      <ProductPrice>
        ₺ {price}
      </ProductPrice>
      <ProductName>
        {name}
      </ProductName>
      <ProductAddButton>
        Add
      </ProductAddButton>
    </ProductCardWrapper>
  );
}

ProductCard.propTypes = {
  price: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
}

export default ProductCard;