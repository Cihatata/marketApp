import { API_URL, PER_PAGE, GET_PRODUCTS } from '../constant';


export const getProducts = async (pageNumber = 1, dispatch ) => {
  // const res = await fetch(`${API_URL}/products?_page=${pageNumber}&_limit=${PER_PAGE}`);
  const res = await fetch(`${API_URL}/products?_page=${pageNumber}&_limit=${PER_PAGE}&_sort=price&_order=asc`);
  const raw = await res.json();
  console.log(raw);
  dispatch({type: GET_PRODUCTS, payload: raw});
}