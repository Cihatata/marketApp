import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  MainStyled,
  AsideBasketInfoStyled,
  AsideFilterStyled,
  ArticleStyled,
} from './styled';
import { getProducts } from '../../state/action';
import Filter from '../Filter/Filter';
import Products from '../Products/Products';
import Basket from '../Basket/Basket';

const Main = () => {
  const { myData } = useSelector((state) => state);
  const [sortingId, setSortingId] = useState(0);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const dispatch = useDispatch();
  
  useEffect(() => {
    getProducts(pageNumber, dispatch);
  },[pageNumber])

  return (
    <MainStyled>
      <AsideFilterStyled>
        <Filter
          sortingId={sortingId}
          setSortingId={setSortingId}
          selectedBrands={selectedBrands}
          setSelectedBrands={setSelectedBrands}
          selectedTags={selectedTags}
          setSelectedTags={setSelectedTags}
        />
      </AsideFilterStyled>
      <ArticleStyled>
        <Products />
      </ArticleStyled>
      <AsideBasketInfoStyled>
        <Basket />
      </AsideBasketInfoStyled>
    </MainStyled>
  )
}

export default Main;