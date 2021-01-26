import {
  GET_PRODUCTS,
  UPDATE_BASKET,
  ADD_BASKET,
  SET_TOTAL_PRODUCT,
} from './types';
import { fetchRequest } from '../Service'

// Fetch Data
export const getProducts = async (pageNumber = 1, filter, dispatch ) => {
  const { sortingId, itemType, brands, tags} = filter;
  const response = await fetchRequest(pageNumber, sortingId, itemType, brands, tags)
  dispatch({ type: SET_TOTAL_PRODUCT, payload: response.totalProductCount })
  dispatch({ type: GET_PRODUCTS, payload: response.raw });
}

// Click + and -
export const updateBasket = (products, dispatch, slug, process) => {
  const index = products.findIndex((product) => product.slug === slug);
  let toasterMessage;
  if (process === "+") {
    // increase product number
    products[index].number = products[index].number + 1;
    toasterMessage = generateToasterMessage('info', 'increase product number');
  } else {
    if (products[index].number !== 1) {
      // decrease product number
      products[index].number = products[index].number - 1;
      toasterMessage = generateToasterMessage('info', 'decrease product number');

    } else {
      //Remove from basket
      products.splice(index, 1);
      toasterMessage = generateToasterMessage('error', 'product removed from basket');
    }
  }
  // Update Basket
  dispatch({ type: UPDATE_BASKET, payload: products });
  return toasterMessage;
}

// add items to basket 
export const addProduct = (basket, selectedProduct, dispatch) => {
  const isExist = basket.find((product) => {
    return product.slug === selectedProduct.slug;
  })
  if (!isExist) {
    // Add if it is not in the basket
    dispatch({ type: ADD_BASKET, payload: selectedProduct })
    return generateToasterMessage('info', 'Product added to basket!')

  } else {
    //  product exist
    return generateToasterMessage('warning', 'The product is already in the basket')
  }
}

//Toaster Message
const generateToasterMessage = (status, message) => {
  return { status, message };
}