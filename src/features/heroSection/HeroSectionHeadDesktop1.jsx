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
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import './HeroSectionHeadDesktop.css';
import { useState } from 'react';
import { handleToggleSearchBar } from '../api/cartDataSlice';
import { setProduct } from '../api/dataSlice';

function HeroSectionHeadDesktop1() {
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const data = useSelector((state) => state.data.data);
  const cart = useSelector((state) => state.cart.items);
  const toggle = useSelector((state) => state.cart.toggleSearchBar);

  function handleClick(e) {
    if (e.key === 'Enter' && search) {
      const product = data.products?.filter(
        (product) => product.brand?.toLowerCase() === search.toLowerCase()
      );
      dispatch(setProduct(product));

      navigate('/productPage');
    }
  }

  function handleToggle() {
    dispatch(handleToggleSearchBar());
  }

  return (
    <header className="header">
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
      <div className="nav-container">
        <nav className="nav">
          <div className="left-nav">
            <div className="logo">Bandage</div>

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
          </div>
          <ul className="right-lists">
            <li className="list user">
              <HiOutlineUser /> <span className="span">Login / Register</span>
            </li>
            <li className="list input-search-container">
              {toggle && (
                <input
                  placeholder="search"
                  name="search"
                  type="text"
                  value={search}
                  className="searchBar"
                  onChange={(e) => setSearch(e.target.value)}
                  onKeyDown={handleClick}
                />
              )}
              <HiOutlineSearch
                className="searchBar-icon"
                onClick={handleToggle}
              />
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
      </div>
    </header>
  );
}

export default HeroSectionHeadDesktop1;
