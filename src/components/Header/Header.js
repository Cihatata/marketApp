import React  from 'react';
import { useSelector } from 'react-redux'
import * as Header_ from './styled';

const Header = () => {
  const sumPrice = useSelector((state) => state.sumPrice);
  return (
    <Header_.Bar aria-label="header">
      <Header_.Main>
        <Header_.Item />
        <Header_.Item>
          <Header_.Logo>
            Market
          </Header_.Logo>
        </Header_.Item>
        <Header_.Item>
            <Header_.Basket>
              <img src="./Group.svg" alt=""/>
              <Header_.Price className='header-price'>₺ {sumPrice}</Header_.Price>
            </Header_.Basket>
        </Header_.Item>
      </Header_.Main>
    </Header_.Bar>
  );
}

export default Header;