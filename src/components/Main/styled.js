import styled from 'styled-components';
import { xl } from '../../constant';
const MainStyled = styled.main`
  width: 100%;
  max-width: 1232px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  position: relative;
  overflow-x: hidden;
  margin-top: 0;
  @media (${xl}) { 
    margin-top: 40px
  }
`;

const AsideFilterStyled = styled.aside`
  position: absolute;
  left:0;
  z-index: 2;
  opacity: ${(props) => {
    return (props.isClick) ? '1' : '0'
  }};
  transform: ${(props) => {
    return (props.isClick) ? 'translateX(0%)' : 'translateX(-100%)'
  }};
  transition: .5s;
  background: #f4f4f4;
  padding: 10px;
  height: 100%;
  @media (${xl}) {
    padding: 0;
    height: auto;
    position: relative;
    transform: translateX(0%);
    opacity:1;
    flex: 1 1 0%;
    margin-right: 16px;
    max-width: 300px;
    display: flex;
    flex-direction: column;
    background: transparent;
  }
`;

const ArticleStyled = styled.article`
  flex: 2 1 0%;
  min-width: 0px;
`

const AsideBasketInfoStyled = styled.aside`
  position: absolute;
  right:0;
  z-index: 2;
  opacity: ${(props) => {
    return (props.isClick) ? '1' : '0'
  }};
  transform: ${(props) => {
    return (props.isClick) ? 'translateX(0%)' : 'translateX(100%)'
  }};
  transition: .5s;
  background: #f4f4f4;
  padding: 10px;
  height: 100%;
  @media (${xl}) {
    position: relative;
    transform: translateX(0%);
    opacity:1;
    flex: 1 1 0%;
    margin-left: 16px;
    display: flex;
    flex-direction: column;
    padding: 0;
    background: transparent;
    height: auto;
  }
`

export {
  MainStyled,
  AsideBasketInfoStyled,
  AsideFilterStyled,
  ArticleStyled,
}