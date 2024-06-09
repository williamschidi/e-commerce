import { HiMenu, HiOutlineSearch, HiOutlineShoppingCart } from 'react-icons/hi';
import './HeroSectionMobile.css';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

function HeroSectionMobile() {
  const cart = useSelector((state) => state.cart.items);
  return (
    <nav className="nav-mobile">
      <h2 className="title-mobile">Bondage</h2>
      <ul className="ul-hero-mobile">
        <li>
          <HiOutlineSearch className="icon mobile-icon" />
        </li>
        <li>
          <NavLink to="/shopping-cart" className="icon mobile-icon">
            <HiOutlineShoppingCart />
            {cart.length > 0 ? (
              <small className="small">{cart.length}</small>
            ) : (
              ''
            )}
          </NavLink>
        </li>
        <li>
          <HiMenu className="icon mobile-icon" />
          <ul className="hamburger-nav ">
            <li>Home</li>
            <li>Product</li>
            <li>Pricing</li>
            <li>Contact</li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}

export default HeroSectionMobile;
