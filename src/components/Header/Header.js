import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { 
  HeaderBar, 
  HeaderMain, 
  HeaderItem, 
  HeaderLogo, 
  HeaderBasket 
} from './styled';
import './header.css';

const Header = ({ sumPrice }) => {
  // const {askets} = useSelector((state) => state)
  // const [pr , setPr] = useState(price);
  // useEffect(() => {
  //   setPr(price)
  // }, [price])
  return (
    <HeaderBar aria-label="header">
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
              <span className='header-price'>₺ {sumPrice}</span>
            </HeaderBasket>
        </HeaderItem>
      </HeaderMain>
    </HeaderBar>
  );
}

export default Header;