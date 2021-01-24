import React from 'react';
import { useSelector } from 'react-redux';
import ReactPaginate from 'react-paginate';
import { ToastContainer } from 'react-toastify' 
import { PER_PAGE } from '../../constant';
import {
  ProductSection,
  ProductHeader,
  ProductNavButton,
  ProductNavigation,
  ProductNavButtonMobile,
} from './styled';
import ProductCard from './ProductCard';
import PaginationButton from './PaginationButton';
import './pagination.css';

const Products = (props) => {
  const {
    setItemType,
    itemType,
    setPageNumber,
    setIsClickBasket,
    setIsClickFilter,
  } = props;
  const products = useSelector((state) => state.products);
  const totalProducts = useSelector((state) => state.totalProduct);

  const calculateTotalPage = () => {
    const totalPage = Math.ceil(totalProducts / PER_PAGE);
    return totalPage;
  }

  const handlePageClick = (data) => {
    setPageNumber(data.selected + 1);
  }
  return (
    <>
      <ProductHeader>Products</ProductHeader>
      <ToastContainer 
        position="top-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <ProductNavigation>
        <ProductNavButton
          data-testid="button-mug"
          onClick={() => setItemType('mug')}
          color={(itemType === "mug") ? "#F2F0FD" : "#1EA4CE"}
          bgColor={(itemType === "mug") ? "#1EA4CE" : "#F2F0FD"}
        >
          mug
        </ProductNavButton>
        <ProductNavButton
          data-testid="button-shirt"
          onClick={() => setItemType('shirt')}
          color={(itemType === "shirt") ? "#F2F0FD" : "#1EA4CE"}
          bgColor={(itemType === "shirt") ? "#1EA4CE" : "#F2F0FD"}
        >
          shirt
        </ProductNavButton>
        <ProductNavButtonMobile
          data-testid="button-filters"
          bgColor="#5d3ebc"
          color="#fff"
          onClick={() => setIsClickFilter(true)}
        >
          Filters
        </ProductNavButtonMobile>
        <ProductNavButtonMobile
          data-testid="button-basket"
          bgColor="#5d3ebc"
          color="#fff"
          onClick={() => setIsClickBasket(true)}
        >
          Basket
        </ProductNavButtonMobile>
      </ProductNavigation>
      <ProductSection data-testid="products">
        {products && products.map((product, index) =>
          <ProductCard key={index} product={product} />
        )}
      </ProductSection>

      <ReactPaginate
        previousLabel={<PaginationButton name="Prev" />}
        nextLabel={<PaginationButton name="Next" />}
        breakLabel={'...'}
        breakClassName={'break-me'}
        pageCount={calculateTotalPage()}
        marginPagesDisplayed={2}
        pageRangeDisplayed={4}
        onPageChange={handlePageClick}
        containerClassName={'pagination'}
        subContainerClassName={'pages pagination'}
        activeClassName={'active'}
      />

    </>
  );
}

export default Products;