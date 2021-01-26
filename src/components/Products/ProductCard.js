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
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductCard = ({ product }) => {
  const basket = useSelector((state) => state.baskets);
  const dispatch = useDispatch();

  // Create Action
  const addToBasket = () => {
    const res = addProduct(basket, product, dispatch);
    toast[res.status](res.message);
  }
  return (
    <ProductCardWrapper>
      <ProductImageWrapper>
        <ProductImage 
          src="https://images.spoonacular.com/file/wximages/423186-312x231.png" 
          alt="food-img"
        />
      </ProductImageWrapper>
      <ProductPrice>
        ₺ {product.price}
      </ProductPrice>
      <ProductName>
        {product.name}
      </ProductName>
      <ProductAddButton onClick={addToBasket}>
        Add
      </ProductAddButton>
    </ProductCardWrapper>
  );
}

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
}

export default ProductCard;