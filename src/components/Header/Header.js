import React from 'react';
import { 
  HeaderBar, 
  HeaderMain, 
  HeaderItem, 
  HeaderLogo, 
  HeaderBasket 
} from './styled';
import './header.css';

const Header = () => {
  return (
    <HeaderBar>
      <HeaderMain>
        <HeaderItem />
        <HeaderItem>
          <HeaderLogo>
            Market
          </HeaderLogo>
        </HeaderItem>
        <HeaderItem>
            <HeaderBasket>
              <img src="./Group.svg" alt=""/>
              <span className='header-price'>₺ 39,97</span>
            </HeaderBasket>
        </HeaderItem>
      </HeaderMain>
    </HeaderBar>
  );
}

export default Header;