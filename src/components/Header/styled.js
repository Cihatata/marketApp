import styled from 'styled-components';
import { sm } from '../../constant'; 
const Bar = styled.header`
  width:100%;
  height: 65px;
  color: #fff;
  background-color: #1EA4CE;
  @media(${sm}) {
    height: 75px;
    padding-left: 32px;
    padding-right: 32px;
  } 
`;

const Main = styled.div`
  width: 100%;
  max-width: 1232px;
  margin: 0 auto;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Item = styled.div`
  &:not(:first-child) {
    margin-left:15px;
  }
  &:last-child {
    height: 100%;
  }
  flex:0% 1 1;
  display: flex;
`;

const Logo = styled.div`
  text-align: center;
  width: 100%;
  font-size: 24px;
  @media(${sm}) {
    font-size: 32px;
  } 
`
const Basket = styled.div`
  text-align: right;
  width: 90px;
  background-color: #147594;
  margin-left: auto;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Open Sans;
  font-size: 14px;
  @media(${sm}) {
    width: 130px;
  } 
`;

const Price =  styled.span`
  margin-left: 8px;
`



export {
  Bar,
  Main,
  Item,
  Logo,
  Basket,
  Price
};