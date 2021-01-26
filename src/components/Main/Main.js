import React, { useState, useEffect, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  MainStyled,
  AsideBasketInfoStyled,
  AsideFilterStyled,
  ArticleStyled,
} from './styled';
import { ProductNavButtonMobile } from '../Products/styled';
import { getProducts } from '../../state/action';
import Filter from '../Filter/Filter';
import Basket from '../Basket/Basket';
import 'react-toastify/dist/ReactToastify.css';
const Products = React.lazy(() => import('../Products/Products'));

const Main = () => {
  const filter = useSelector((state) => state.filter);
  const [pageNumber, setPageNumber] = useState(1);
  // if the screen is smaller than 1024px // Sidebar open close state
  const [isClickFilter, setIsClickFilter] = useState(false);
  const [isClickBasket, setIsClickBasket] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    getProducts(pageNumber, filter, dispatch);
  }, [pageNumber, filter])

  return (
    <MainStyled aria-label="main">
      <AsideFilterStyled isClick={isClickFilter} aria-label="filter-section">
        <Filter
          setIsClickFilter={setIsClickFilter}
        />
      </AsideFilterStyled>
      <ArticleStyled aria-label="product-section">
        <Suspense fallback={<div>Loading ...</div>}>
          <Products
            isClickBasket={isClickBasket}
            setIsClickBasket={setIsClickBasket}
            isClickFilter={isClickFilter}
            setIsClickFilter={setIsClickFilter}
            setPageNumber={setPageNumber}
          />
        </Suspense>
      </ArticleStyled >
      <AsideBasketInfoStyled aria-label="basket-section" isClick={isClickBasket}>
        <ProductNavButtonMobile
          color="#fff"
          bgColor="#222"
          onClick={() => setIsClickBasket(false)}>
          Close
      </ProductNavButtonMobile>
        <Basket />
      </AsideBasketInfoStyled>
    </MainStyled>
  )
}

export default Main;