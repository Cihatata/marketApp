import React from 'react';
import {
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
} from './styled';

const Basket = () => {
  return (
    <BasketWrapper>

      <BasketItem>
        <BasketItemInfo>
          <BasketItemName>
            Example Product
          </BasketItemName>
          <BasketItemPrice>
            ₺14,99
          </BasketItemPrice>
        </BasketItemInfo>
        <BasketItemRight>
          <BasketItemCounterButton>
            <svg width="10" height="3" viewBox="0 0 10 3" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect y="0.725586" width="10" height="2.04384" rx="1" fill="#1EA4CE" />
            </svg>
          </BasketItemCounterButton>
          <BasketItemNumber>
            1
          </BasketItemNumber>
          <BasketItemCounterButton>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.44053 10.4069L6.44053 6.1977H10.5595C10.8027 6.1977 11 5.9961 11 5.74751C11 5.49892 10.8027 5.29733 10.5595 5.29733H6.44053V1.08812C6.44053 0.839531 6.24326 0.637939 6 0.637939C5.75674 0.637939 5.55947 0.839531 5.55947 1.08812V5.29733L1.44053 5.29733C1.19727 5.29733 1 5.49892 1 5.74751C1 5.9961 1.19727 6.1977 1.44053 6.1977L5.55947 6.1977L5.55947 10.4069C5.55947 10.6555 5.75674 10.8571 6 10.8571C6.24326 10.8571 6.44053 10.6555 6.44053 10.4069" stroke="#1EA4CE" />
            </svg>

          </BasketItemCounterButton>
        </BasketItemRight>
      </BasketItem>
      <BasketItemDivider />
      <BasketItem>
        <BasketItemInfo>
          <BasketItemName>
            Example Product
          </BasketItemName>
          <BasketItemPrice>
            ₺14,99
          </BasketItemPrice>
        </BasketItemInfo>
        <BasketItemRight>
          <BasketItemCounterButton>
            <svg width="10" height="3" viewBox="0 0 10 3" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect y="0.725586" width="10" height="2.04384" rx="1" fill="#1EA4CE" />
            </svg>
          </BasketItemCounterButton>
          <BasketItemNumber>
            1
          </BasketItemNumber>
          <BasketItemCounterButton>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.44053 10.4069L6.44053 6.1977H10.5595C10.8027 6.1977 11 5.9961 11 5.74751C11 5.49892 10.8027 5.29733 10.5595 5.29733H6.44053V1.08812C6.44053 0.839531 6.24326 0.637939 6 0.637939C5.75674 0.637939 5.55947 0.839531 5.55947 1.08812V5.29733L1.44053 5.29733C1.19727 5.29733 1 5.49892 1 5.74751C1 5.9961 1.19727 6.1977 1.44053 6.1977L5.55947 6.1977L5.55947 10.4069C5.55947 10.6555 5.75674 10.8571 6 10.8571C6.24326 10.8571 6.44053 10.6555 6.44053 10.4069" stroke="#1EA4CE" />
            </svg>

          </BasketItemCounterButton>
        </BasketItemRight>
      </BasketItem>
      <BasketItemDivider />
      <BasketItem>
        <BasketItemInfo>
          <BasketItemName>
            Example Product
          </BasketItemName>
          <BasketItemPrice>
            ₺14,99
          </BasketItemPrice>
        </BasketItemInfo>
        <BasketItemRight>
          <BasketItemCounterButton>
            <svg width="10" height="3" viewBox="0 0 10 3" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect y="0.725586" width="10" height="2.04384" rx="1" fill="#1EA4CE" />
            </svg>
          </BasketItemCounterButton>
          <BasketItemNumber>
            1
          </BasketItemNumber>
          <BasketItemCounterButton>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.44053 10.4069L6.44053 6.1977H10.5595C10.8027 6.1977 11 5.9961 11 5.74751C11 5.49892 10.8027 5.29733 10.5595 5.29733H6.44053V1.08812C6.44053 0.839531 6.24326 0.637939 6 0.637939C5.75674 0.637939 5.55947 0.839531 5.55947 1.08812V5.29733L1.44053 5.29733C1.19727 5.29733 1 5.49892 1 5.74751C1 5.9961 1.19727 6.1977 1.44053 6.1977L5.55947 6.1977L5.55947 10.4069C5.55947 10.6555 5.75674 10.8571 6 10.8571C6.24326 10.8571 6.44053 10.6555 6.44053 10.4069" stroke="#1EA4CE" />
            </svg>

          </BasketItemCounterButton>
        </BasketItemRight>
      </BasketItem>
      <BasketItemDivider />
      <BasketSumPriceButton>
        ₺39,97
      </BasketSumPriceButton>
    </BasketWrapper>
  )
}

export default Basket;