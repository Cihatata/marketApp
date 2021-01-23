import styled from 'styled-components';

const MainStyled = styled.main`
  width: 100%;
  max-width: 1232px;
  margin-top: 40px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
`;

const AsideFilterStyled = styled.aside`
  flex: 1 1 0%;
  margin-right: 16px;
  max-width: 300px;
  display: flex;
  flex-direction: column;
`;

const ArticleStyled = styled.article`
  flex: 2 1 0%;
  min-width: 0px;
`

const AsideBasketInfoStyled = styled.aside`
  margin-left: 16px;
  flex: 1 1 0%;
  display: flex;
  flex-direction: column;
`

export {
  MainStyled,
  AsideBasketInfoStyled,
  AsideFilterStyled,
  ArticleStyled,
}