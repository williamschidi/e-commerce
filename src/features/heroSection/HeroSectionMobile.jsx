import { HiMenu, HiOutlineSearch, HiOutlineShoppingCart } from 'react-icons/hi';
import './HeroSectionMobile.css';

function HeroSectionMobile() {
  return (
    <nav className="nav-mobile">
      <h2 className="title-mobile">Bondage</h2>
      <ul className="ul-hero-mobile">
        <li>
          <HiOutlineSearch className="icon mobile-icon" />
        </li>
        <li>
          <HiOutlineShoppingCart className="icon mobile-icon" />
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
