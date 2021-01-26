# Service

I create Fetch url then fetch a request to REST API in this directory. Filter elements are contained in static files(brandsData, tagsData, SortingElements). I explained the reason in the main Readme.

I am sending the answers returned from the API to the action.

```
${API_URL}/products?_page=${pageNumber}&_limit=${PER_PAGE}`&_sort=${sortBy}&_order=${ascOrDesc} // First Request

// if any tags are pressed 
${API_URL}/products?_page=${pageNumber}&_limit=${PER_PAGE}`&_sort=${sortBy}&_order=${ascOrDesc}&tags_like=${tags.map((tag) => `${tag}`)}

// if any brands are pressed
${API_URL}/products?_page=${pageNumber}&_limit=${PER_PAGE}`&_sort=${sortBy}&_order=${ascOrDesc}&manufacturer=${brand}
```