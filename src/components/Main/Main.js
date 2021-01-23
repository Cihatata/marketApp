import React, { useState, useEffect, Suspense } from 'react';
import { useDispatch } from 'react-redux';
import {
  MainStyled,
  AsideBasketInfoStyled,
  AsideFilterStyled,
  ArticleStyled,
} from './styled';
import { ProductNavButtonMobile } from '../Products/styled';
import { getProducts } from '../../state/action';
import Filter from '../Filter/Filter';
// import Products from '../Products/Products';
import Basket from '../Basket/Basket';

const Products = React.lazy(() => import('../Products/Products'));

const Main = () => {
  const [sortingId, setSortingId] = useState(0);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);
  const [itemType, setItemType] = useState('mug');
  const [pageNumber, setPageNumber] = useState(1);
  const [isClickFilter, setIsClickFilter] = useState(false);
  const [isClickBasket, setIsClickBasket] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    getProducts(pageNumber, sortingId, dispatch, itemType, selectedBrands);
  }, [pageNumber, sortingId, itemType, selectedBrands])

  return (
    <MainStyled>
      <AsideFilterStyled isClick={isClickFilter}>
        <Filter
          setIsClickFilter={setIsClickFilter}
          style={{ background: 'red' }}
          sortingId={sortingId}
          setSortingId={setSortingId}
          selectedBrands={selectedBrands}
          setSelectedBrands={setSelectedBrands}
          selectedTags={selectedTags}
          setSelectedTags={setSelectedTags}
        />
      </AsideFilterStyled>
      <ArticleStyled>
        <Suspense fallback={<div>Yukleniyor</div>}>
          <Products
            isClickBasket={isClickBasket}
            setIsClickBasket={setIsClickBasket}
            isClickFilter={isClickFilter}
            setIsClickFilter={setIsClickFilter}
            setItemType={setItemType}
            itemType={itemType}
            setPageNumber={setPageNumber}
          />
        </Suspense>
      </ArticleStyled>
      <AsideBasketInfoStyled isClick={isClickBasket}>
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