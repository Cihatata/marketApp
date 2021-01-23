import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import {
  ProductCardWrapper,
  ProductImage,
  ProductImageWrapper,
  ProductPrice,
  ProductName,
  ProductAddButton,
} from './styled';
import { addProduct } from '../../state/action';

const ProductCard = ({ product }) => {
  const basket = useSelector((state) => state.baskets);
  const dispatch = useDispatch();
  const addToBasket = () => {
    addProduct(basket, product, dispatch);
  }
  return (
    <ProductCardWrapper>
      <ProductImageWrapper>
        <ProductImage />
      </ProductImageWrapper>
      <ProductPrice>
        ₺ {product.price}
      </ProductPrice>
      <ProductName>
        {product.name}
      </ProductName>
      <ProductAddButton
        onClick={addToBasket}
      >
        Add
      </ProductAddButton>
    </ProductCardWrapper>
  );
}

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
}

export default ProductCard;