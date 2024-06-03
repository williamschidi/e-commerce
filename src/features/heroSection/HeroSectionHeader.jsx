import { useRef } from 'react';
import { BsEnvelope } from 'react-icons/bs';
import {
  FaFacebook,
  FaInstagram,
  FaRegHeart,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa';
import {
  HiMenu,
  HiOutlineChevronDown,
  HiOutlinePhone,
  HiOutlineSearch,
  HiOutlineShoppingCart,
  HiOutlineUser,
} from 'react-icons/hi';
import { useMediaQuery } from 'react-responsive';

import './HeroSectionHeader.css';
import { NavLink } from 'react-router-dom';

function HeroSectionHeader() {
  const isMobile = useMediaQuery({ maxWidth: 600 });
  const getRef1 = useRef(null);
  const getRef2 = useRef(null);

  function handleToggle() {
    if (getRef1.current) {
      getRef1.current.classList.toggle('show-modal');
    }
    if (getRef2) {
      getRef2.current.classList.toggle('show-modal');
    }
  }

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

        {!isMobile && (
          <ul className="right-lists">
            <li className="list user">
              <HiOutlineUser /> <span className="span">Login / Register</span>
            </li>
            <li className="list">
              <HiOutlineSearch />
            </li>
            <li className="list">
              <HiOutlineShoppingCart />
            </li>
            <li className="list">
              <FaRegHeart />
            </li>
          </ul>
        )}
        {isMobile && <HiMenu onClick={handleToggle} className="hamburger" />}
        {isMobile && (
          <>
            <ul ref={getRef1} className="slide-in-nav">
              <li className="list user">
                <span className="span">Login / Register</span>
              </li>
              <li className="list">
                <HiOutlineSearch />
              </li>
              <li className="list">
                <HiOutlineShoppingCart />
              </li>
              <li className="list">
                <FaRegHeart />
              </li>
            </ul>
            <ul className="slide-in-nav" ref={getRef2}>
              <li className="list">Home</li>
              <li className="list ">Shop</li>
              <li className="list">About</li>
              <li className="list">Blog</li>
              <li className="list">Contact</li>
              <li className="list">Pages</li>
            </ul>
          </>
        )}
      </nav>
    </header>
  );
}

export default HeroSectionHeader;
