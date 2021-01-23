import styled from 'styled-components';

const ProductSection = styled.section`
  width: 100%;
  padding: 20px;
  background: #fff;
  flex-wrap: wrap;
  display: flex;
`;

const ProductHeader = styled.h4`
  font-size: 20px;
  line-height: 26px;
  font-weight: 400;
  color: #6f6f6f;
  margin-bottom: 16px;
`;

const ProductNavigation = styled.nav`
  margin-bottom: 16px;
  width: 100%;
  display: flex;
  align-items: center;
`;

const ProductNavButton = styled.button`
  padding: 6px 16px;
  background-color: ${(props) => props.bgColor};
  color: ${(props) => props.color};
  margin-right: 8px;
  font-weight: 600;
  font-size: 13px;
  line-height: 18px;
  border: none;
  border-radius: 2px;
`;

const ProductCardWrapper = styled.article`
  // width: 100%;
  width: calc(25% - 16px);
  display: inline-flex;
  flex-direction: column;
  &:not(:last-child){
    margin-bottom: 20px;
  }
  &:not(:nth-child(4n)) {
    margin-right: 20px; 
  }
`;

const ProductImageWrapper = styled.div`
  background: #FEFEFE;
  border: 1.17666px solid #F3F0FE;
  border-radius: 12px;
  padding: 16px;
  height: 124px;
  margin-bottom: 8px;
`
const ProductImage = styled.div`
  background: #c4c4c4;
  width: 100%;
  height: 100%;
  &:hover{
    transform: scale(1.1);
  }
`;

const ProductPrice = styled.span`
  font-size: 14px;
  line-height: 20px;
  color: #1EA4CE;
  font-family: Helvetica Neue,Helvetica,Arial,sans-serif;
  font-weight: 600;
`;

const ProductName = styled.div`
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  color: #191919;
  margin-bottom: 8px;
`;

const ProductAddButton = styled.button`
  background: #1EA4CE;
  border-radius: 2px;
  font-weight: 600;
  font-size: 12px;
  line-height: 20px;
  color: #fff;
  border: none;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top:1px;
  padding-bottom: 1px;
`

export {
  ProductSection,
  ProductHeader,
  ProductNavButton,
  ProductNavigation,
  ProductCardWrapper,
  ProductImageWrapper,
  ProductImage,
  ProductPrice,
  ProductName,
  ProductAddButton,
}
