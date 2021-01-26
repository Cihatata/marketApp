import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import { updateBasket } from '../../state/action';
import * as Basket_ from './styled';
import { SET_PRICE, PAY } from '../../state/types';

const Basket = () => {
  const baskets = useSelector((state) => state.baskets);
  const sumPrice = useSelector((state) => state.sumPrice);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch({ type: SET_PRICE, payload: basketsSumPrice() })
  }, [baskets])
  
  // Click + and - / Product Number Increase or decrease
  const changeProductNumber = (slug, process) => {
    const res = updateBasket(baskets, dispatch, slug, process);
    toast[res.status](res.message);
  }

  // total price of items in the basket
  const basketsSumPrice = () => {
    let sum = 0;
    baskets.forEach((product) => {
      sum = sum + (product.price * product.number)
    })
    return sum.toFixed(2);
  }

  // Clear basket
  const pay = () => {
    if (baskets.length) {
      dispatch({ type: PAY });
      toast.success('Payment Complete');
    }
  }

  return (
    <Basket_.Wrapper data-testid="basket">
      {(baskets.length)
        ?
        baskets.map((basket, index) => {
          return (
            <div key={index}>
              <Basket_.Item data-testid={`basket-item-${index}`}>
                <Basket_.ItemInfo>
                  <Basket_.ItemName>
                    {basket.name}
                  </Basket_.ItemName>
                  <Basket_.ItemPrice>
                    ₺ {basket.price * basket.number}
                  </Basket_.ItemPrice>
                </Basket_.ItemInfo>
                <Basket_.ItemRight>
                  <Basket_.ItemCounterButton onClick={() => changeProductNumber(basket.slug, "-")}>
                    <svg width="10" height="3" viewBox="0 0 10 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect y="0.725586" width="10" height="2.04384" rx="1" fill="#1EA4CE" />
                    </svg>
                  </Basket_.ItemCounterButton>
                  <Basket_.ItemNumber>
                    {basket.number}
                  </Basket_.ItemNumber>
                  <Basket_.ItemCounterButton onClick={() => changeProductNumber(basket.slug, "+")}>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6.44053 10.4069L6.44053 6.1977H10.5595C10.8027 6.1977 11 5.9961 11 5.74751C11 5.49892 10.8027 5.29733 10.5595 5.29733H6.44053V1.08812C6.44053 0.839531 6.24326 0.637939 6 0.637939C5.75674 0.637939 5.55947 0.839531 5.55947 1.08812V5.29733L1.44053 5.29733C1.19727 5.29733 1 5.49892 1 5.74751C1 5.9961 1.19727 6.1977 1.44053 6.1977L5.55947 6.1977L5.55947 10.4069C5.55947 10.6555 5.75674 10.8571 6 10.8571C6.24326 10.8571 6.44053 10.6555 6.44053 10.4069" stroke="#1EA4CE" />
                    </svg>

                  </Basket_.ItemCounterButton>
                </Basket_.ItemRight>
              </Basket_.Item>
              <Basket_.ItemDivider />
            </div>
          )
        }

        )
        : <div>Empty Baskets</div>
      }
      <Basket_.ButtonWrapper>
        <Basket_.SumPriceButton
          data-testid="button-sumprice"
          onClick={pay}
        >
          ₺ {sumPrice}
        </Basket_.SumPriceButton>
      </Basket_.ButtonWrapper>
    </Basket_.Wrapper>
  )
}

export default Basket;