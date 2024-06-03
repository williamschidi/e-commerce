import HeroSectionHeader from '../heroSection/HeroSectionHeader';
import { HiChevronRight } from 'react-icons/hi';
import './ProductDetail.css';
import detailImage from '../../images/detail-img.jpg';
import star from '../../images/stars.png';
import ProductColor from '../../images/product-colors.png';
import { HiOutlineHeart } from 'react-icons/hi';
import { HiOutlineShoppingCart } from 'react-icons/hi';
import { HiOutlineEye } from 'react-icons/hi';
import { NavLink } from 'react-router-dom';

function ProductDetail() {
  return (
    <div className="container">
      <HeroSectionHeader />
      <ul className="product-detail-ul">
        <li>
          <span>Home</span> <HiChevronRight className="icon" />
        </li>
        <li>
          <NavLink
            to="/paymentPage"
            className="nav-link"
            activeClassName="active"
          >
            Shop
          </NavLink>
        </li>
      </ul>
      <div className="detail-section">
        <div className="img-container">
          <img src={detailImage} alt="detail-image" className="detail-img" />
        </div>
        <div className="details">
          <div className="price-details">
            <p>Floating Phone</p>
            <div className="rating-container">
              <img src={star} alt="ratings" className="rating" />
              <span>10 Reviews</span>
            </div>
            <p className="item-price">$1,139.33</p>
            <p className="stock">
              <span className="available">Availability</span>:
              <span className="in-stock">In Stock</span>
            </p>
          </div>
          <div className="color-details">
            <div>
              <img
                src={ProductColor}
                alt="product-color"
                className="product-color"
              />
            </div>
            <div className="icons-container">
              <button className="btn">Select Options</button>
              <HiOutlineHeart className="icon" />
              <HiOutlineShoppingCart className="icon" />
              <HiOutlineEye className="icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
