import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ReactPaginate from 'react-paginate';
import { ToastContainer } from 'react-toastify'
import PropTypes from 'prop-types'
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
import { SET_FILTER } from '../../state/types';

const Products = (props) => {

  const { setPageNumber, setIsClickBasket, setIsClickFilter } = props;
  const {products, totalProduct, filter} = useSelector((state) => state);
  const dispatch = useDispatch();

  const calculateTotalPage = () => {
    const totalPage = Math.ceil(totalProduct / PER_PAGE);
    return totalPage;
  }

  // mug or shirt
  const handleItemType = (e) => {
    const { name, value } = e.target;
    dispatch({ type: SET_FILTER, payload: { name, value } })
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
          onClick={handleItemType}
          color={(filter.itemType === "mug") ? "#F2F0FD" : "#1EA4CE"}
          bgColor={(filter.itemType === "mug") ? "#1EA4CE" : "#F2F0FD"}
          name="itemType"
          value="mug"
        >
          mug
        </ProductNavButton>
        <ProductNavButton
          data-testid="button-shirt"
          onClick={handleItemType}
          color={(filter.itemType === "shirt") ? "#F2F0FD" : "#1EA4CE"}
          bgColor={(filter.itemType === "shirt") ? "#1EA4CE" : "#F2F0FD"}
          name="itemType"
          value="shirt"
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

Products.propTypes = {
  setIsClickBasket: PropTypes.func.isRequired,
  setPageNumber: PropTypes.func.isRequired,
  setIsClickFilter: PropTypes.func.isRequired,
}

export default Products;