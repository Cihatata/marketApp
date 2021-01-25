import * as Actions from '../constant';

const initialState = {
  products:[],
  baskets: [],
  sumPrice: 0,
  totalProduct: 1,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.GET_PRODUCTS:
      return {
        ...state,
        products: [...action.payload]
      }
    case Actions.ADD_BASKET:
      return {
        ...state,
        baskets: [ ...state.baskets, {...action.payload, number: 1}]
      }
    case Actions.UPDATE_BASKET:
      return {
        ...state,
        baskets:  [...action.payload]
      }
    case Actions.SET_PRICE:
      return {
        ...state,
        sumPrice: Number(action.payload).toFixed(2),
      }
    case Actions.SET_TOTAL_PRODUCT:
      return {
        ...state,
        totalProduct: action.payload
      }
    case Actions.PAY: {
      return {
        ...state,
        baskets : [],
        sumPrice: 0
      }
    }
    default:
      return state;
  }
}

export default reducer;