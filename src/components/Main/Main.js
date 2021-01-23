import React from 'react';
import {
  MainStyled,
  AsideBasketInfoStyled,
  AsideFilterStyled,
  ArticleStyled,
} from './styled';
import Filter from '../Filter/Filter';
import Products from '../Products/Products';
const Main = () => {
  return (
    <MainStyled>
      <AsideFilterStyled>
        <Filter />
      </AsideFilterStyled>
      <ArticleStyled>
        <Products />
      </ArticleStyled>
      <AsideBasketInfoStyled>
        Basket
      </AsideBasketInfoStyled>
    </MainStyled>
  )
}

export default Main;