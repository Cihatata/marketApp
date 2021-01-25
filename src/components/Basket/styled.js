import styled from 'styled-components';

const BasketWrapper = styled.section`
  border-radius: 2px;
  border: 8px solid #1EA4CE;
  width: 100%;
  padding: 16px;
  height: auto;
`;

const BasketItem = styled.div`
  padding: 6px;
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
`;

const BasketItemInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const BasketItemName = styled.span`
  font-size: 14px;
  line-height: 18px;
  color: #191919;
`;

const BasketItemPrice = styled.span`
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0.16px;
  color: #1EA4CE;
  font-weight: 600;
`;

const BasketItemRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const BasketItemCounterButton = styled.button`
  border: none;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2px;
  &:first-child{
    margin-right: 12px;
  }
  &:last-child{
    margin-left: 12px;
  }
`
const BasketItemNumber = styled.div`
  font-size: 15px;
  line-height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #FFFFFF;
  background: #1EA4CE;
  width: 32px;
  height: 32px;
`

const BasketItemDivider = styled.div`
  height:1px;
  width: 100%;
  background: #f4f4f4;
  margin: 18px 0;
`
const BasketSumPriceButton = styled.button`
  padding: 16px 24px;
  background: #FFFFFF;
  border: 2px solid #1EA4CE;
  box-sizing: border-box;
  border-radius: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 14px;
  line-height: 16px;
  color: #1ea4ce;
  &:hover{
    color: #fff;
    background-color: #1ea4ce;
  }
`
const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`


export {
  BasketWrapper,
  BasketItem,
  BasketItemInfo,
  BasketItemName,
  BasketItemNumber,
  BasketItemPrice,
  BasketItemRight,
  BasketItemCounterButton,
  BasketItemDivider,
  BasketSumPriceButton,
  ButtonWrapper
}
