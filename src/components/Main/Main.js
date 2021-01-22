import React from 'react';
import { 
  MainStyled,
  AsideBasketInfoStyled,
  AsideFilterStyled,
  ArticleStyled,
 } from './styled';
import Filter from '../Filter/Filter';
const Main = () => {
  return (
    <MainStyled>
      <AsideFilterStyled>
        <Filter />
      </AsideFilterStyled>
      <ArticleStyled>
        Article
      </ArticleStyled>
      <AsideBasketInfoStyled>
        Basket
      </AsideBasketInfoStyled>
    </MainStyled>
  )
}

export default Main;