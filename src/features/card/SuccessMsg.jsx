// import { useSelector } from 'react-redux';
import { HiOutlineX } from 'react-icons/hi';
import './SuccessMsg.css';
// import { useState } from 'react';

function SuccessMsg({ products }) {
  // const [products] = useSelector((state) => state.cart.items);

  return (
    <div className="successMsg-container">
      <h3 className="success-heading">Successfully added to basket</h3>
      <HiOutlineX className="close-btn" />

      <div className="product-container-1">
        <div className="product-img-container-1">
          <img
            src={products?.images[0]}
            alt="product"
            className="product-img-1"
          />
        </div>
        <div className="product-details-1">
          <span className="product-title-1">{products?.title}</span>
          <span className="product-price-1">€ {products?.price}</span>
        </div>
      </div>
    </div>
  );
}

export default SuccessMsg;
