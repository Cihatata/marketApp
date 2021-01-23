import * as Actions from '../constant';

const initialState = {
  products:[],
  myData: 'test'
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.GET_PRODUCTS:
      return {
        ...state,
        products: [...action.payload]
      }
    default:
      return state;
  }
}

export default reducer;