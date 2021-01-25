import { 
  API_URL, 
  PER_PAGE, 
  GET_PRODUCTS, 
  UPDATE_BASKET, 
  ADD_BASKET,
  SET_TOTAL_PRODUCT,
} from '../constant';

// Fetch Data
export const getProducts = async (
  pageNumber = 1, 
  sortingId = 0, 
  dispatch, itemType = "mug", 
  brands = [], 
  tags = []
  ) => {
  const FETCH_URL = createFetchUrl(pageNumber, sortingId, itemType, brands, tags);
  const res = await fetch(FETCH_URL);
  dispatch({type: SET_TOTAL_PRODUCT, payload: res.headers.get("X-Total-Count")})
  const raw = await res.json();
  dispatch({ type: GET_PRODUCTS, payload: raw });
}

// Click + and -
export const updateBasket = (products, dispatch, slug, process) => {
  const index = products.findIndex((product) => product.slug === slug);
  let toasterMessage = {status:'', message:''};
  if (process === "+") {
    // increase product number
    products[index].number = products[index].number + 1;
    toasterMessage.status = "info";
    toasterMessage.message = "increase product number"
  } else {
    if (products[index].number !== 1) {
      // decrease product number
      products[index].number = products[index].number - 1;
      toasterMessage.status = "info";
      toasterMessage.message = "decrease product number"
    } else {
      //Remove from basket
      products.splice(index, 1);
      toasterMessage.status= "error";
      toasterMessage.message= "product removed from basket";
    }
  }
  // Update Basket
  dispatch({ type: UPDATE_BASKET, payload: products });
  return toasterMessage;
}

export const addProduct = (basket, selectedProduct, dispatch) => {
  const isExist = basket.find((product) => {
    return product.slug === selectedProduct.slug;
  })
  if (!isExist) {
    // Add if it is not in the basket
    dispatch({ type: ADD_BASKET, payload: selectedProduct })
    return {status: 'info', message: 'Product added to basket!'};

  } else {
    //  product exist
    return {status: 'warning', message: 'The product is already in the basket'};
  }
}

//Create Fetch Url by Filter Value
const createFetchUrl = (pageNumber, sortingId, itemType, brands, tags) => {
  let  FETCH_URL = `${API_URL}/products?_page=${pageNumber}&_limit=${PER_PAGE}`
  const { sortBy, ascOrDesc } = sortingProducts(sortingId);
  FETCH_URL = FETCH_URL.concat(`&_sort=${sortBy}&_order=${ascOrDesc}`);
  FETCH_URL = FETCH_URL.concat(`&itemType=${itemType}`)
  if (brands.length) {
    brands.forEach((brand) => {
      FETCH_URL = FETCH_URL.concat(`&manufacturer=${brand}`);
    })
  }
  if (tags.length) {
    //sort required array params / if i cant sort, data is coming wrong
    tags.sort();
    FETCH_URL = FETCH_URL.concat(`&tags_like=${tags.map((tag) => `${tag}`)}`)
  }
  return FETCH_URL;
}

//sorting Value
const sortingProducts = (id = 0) => {
  const sort = {
    sortBy: 'price',
    ascOrDesc: 'asc'
  }
  switch (id) {
    case 0:
      sort.sortBy = 'price';
      sort.ascOrDesc = 'asc';
      break;
    case 1:
      sort.sortBy = 'price';
      sort.ascOrDesc = 'desc';
      break;
    case 2:
      sort.sortBy = 'added';
      sort.ascOrDesc = 'asc';
      break;
    case 3:
      sort.sortBy = 'added';
      sort.ascOrDesc = 'desc';
      break;
    default:
      break;

  }
  return sort;
}