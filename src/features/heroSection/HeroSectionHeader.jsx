import { BsEnvelope } from 'react-icons/bs';
import {
  FaFacebook,
  FaInstagram,
  FaRegHeart,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa';
import {
  HiOutlineChevronDown,
  HiOutlinePhone,
  HiOutlineSearch,
  HiOutlineShoppingCart,
  HiOutlineUser,
} from 'react-icons/hi';
import { useMediaQuery } from 'react-responsive';

import './HeroSectionHeader.css';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

function HeroSectionHeader() {
  const cart = useSelector((state) => state.cart.items);
  const isMobile = useMediaQuery({ maxWidth: 600 });

  return (
    <header className="header">
      {!isMobile && (
        <div className="contacts">
          <div className="contact left-contact">
            <div className="tel-container">
              <HiOutlinePhone />
              <span>090 33882275</span>
            </div>
            <div className="mail-container">
              <BsEnvelope />
              <span className="email">williamchidi@gmail.com</span>
            </div>
          </div>
          <div className="contact center-contact">
            Follow us and get a chance to win 80% off
          </div>
          <div className="contact right-contact">
            <ul className="right-contact">
              <li>Follow Us :</li>
              <li>
                <FaInstagram />
              </li>
              <li>
                <FaYoutube />
              </li>
              <li>
                <FaFacebook />
              </li>
              <li>
                <FaTwitter />
              </li>
            </ul>
          </div>
        </div>
      )}
      <nav className="nav">
        <div className="left-nav">
          <div className="logo">Bandage</div>
          {!isMobile && (
            <ul className="left-lists">
              <li className="list">
                <NavLink
                  to="/"
                  className="nav-link"
                  activeClassName="active"
                ></NavLink>
                Home
              </li>
              <li className="list ">
                <NavLink
                  to="/productPage"
                  className="nav-link"
                  activeClassName="active"
                >
                  <span>Shop</span> <HiOutlineChevronDown />
                </NavLink>
              </li>
              <li className="list">About</li>
              <li className="list">Blog</li>
              <li className="list">Contact</li>
              <li className="list">Pages</li>
            </ul>
          )}
        </div>
        <ul className="right-lists">
          <li className="list user">
            <HiOutlineUser /> <span className="span">Login / Register</span>
          </li>
          <li className="list">
            <HiOutlineSearch />
          </li>
          <li className="list">
            <NavLink to="/shopping-cart" className="nav-link icon cart-icon">
              <HiOutlineShoppingCart />
              {cart.length > 0 ? (
                <small className="small">{cart.length}</small>
              ) : (
                ''
              )}
            </NavLink>
          </li>
          <li className="list">
            <FaRegHeart />
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default HeroSectionHeader;
{
  /* <span className="symbol oty">1</span> */
}
