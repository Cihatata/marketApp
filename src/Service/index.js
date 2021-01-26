import { API_URL, PER_PAGE } from '../constant';

// Get Products
export const fetchRequest = async (pageNumber, sortingId, itemType, brands, tags) => {
  const FETCH_URL = createFetchUrl(pageNumber, sortingId, itemType, brands, tags);
  const response = await fetch(FETCH_URL);
  const raw = await response.json();
  const totalProductCount = response.headers.get("X-Total-Count");
  return { raw, totalProductCount};
}

// Create Request Url by selected Filter
const createFetchUrl = (pageNumber, sortingId, itemType, brands, tags) => {
  let  FETCH_URL = `${API_URL}/products?_page=${pageNumber}&_limit=${PER_PAGE}`
  const { sortBy, ascOrDesc } = sortingProducts(sortingId);
  //Sorting query
  FETCH_URL = FETCH_URL.concat(`&_sort=${sortBy}&_order=${ascOrDesc}`);
  // Mug or shirt query
  FETCH_URL = FETCH_URL.concat(`&itemType=${itemType}`)
  if (brands.length) {
    brands.forEach((brand) => {
      //Brand query
      FETCH_URL = FETCH_URL.concat(`&manufacturer=${brand}`);
    })
  }
  if (tags.length) {
    //sort required array params / if i cant sort, data is coming wrong
    tags.sort();
    // Tags query
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