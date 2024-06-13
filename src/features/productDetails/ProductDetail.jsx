import HeroSectionHeader from '../heroSection/HeroSectionHeader';
import { HiChevronRight } from 'react-icons/hi';
import './ProductDetail.css';
import ProductColor from '../../images/product-colors.png';
import { HiOutlineHeart } from 'react-icons/hi';
import { HiOutlineShoppingCart } from 'react-icons/hi';
import { HiOutlineEye } from 'react-icons/hi';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import MyStarRating from '../card/MyStarRating';

function ProductDetail() {
  const { product } = useSelector((state) => state.data);
  const { items } = useSelector((state) => state.cart);

  return (
    <div className="container">
      <HeroSectionHeader />
      <ul className="product-detail-ul">
        <li>
          <NavLink to="/" className="nav-link" activeClassName="active">
            <span>Home</span> <HiChevronRight className="icon" />
          </NavLink>
        </li>
        <li>
          <NavLink to="/paymentPage" className="nav-link">
            Shop
          </NavLink>
        </li>
      </ul>
      {product.map((item, i) => (
        <div className="detail-section" key={i}>
          <div className="img-container">
            <img
              src={item?.images[0]}
              alt="detail-image"
              className="detail-img"
            />
          </div>

          <div className="details">
            <div className="price-details">
              <p>{item.brand}</p>
              <div className="rating-container">
                <MyStarRating rating={item.rating} />
                <span>10 Reviews</span>
              </div>
              <p className="item-price">${item?.price}</p>
              <p className="stock">
                <span className="available">Availability</span> :
                <span className="in-stock"> {item?.availabilityStatus}</span>
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
                <span className="sm-cart">
                  <HiOutlineShoppingCart className="icon" />
                  {items.length}
                </span>
                <HiOutlineEye className="icon" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductDetail;
