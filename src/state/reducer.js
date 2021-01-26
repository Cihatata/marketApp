import * as Actions from './types';

const initialState = {
  products:[],
  baskets: [],
  sumPrice: 0,
  totalProduct: 1,
  filter: {
    sortingId: 0,
    tags: [],
    brands: [],
    itemType: 'mug',
  },
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
    case Actions.SET_FILTER:
      return {
        ...state,
        filter: {
          ...state.filter,
          [action.payload.name]: action.payload.value,
        }
      }
    default:
      return state;
  }
}

export default reducer;