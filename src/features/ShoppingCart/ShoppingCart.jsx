import { MdOutlineDelete } from 'react-icons/md';
import { HiChevronRight } from 'react-icons/hi';
import { HiMinus } from 'react-icons/hi';
import { HiOutlinePlus } from 'react-icons/hi';
import master from '../../images/master.png';
import visa from '../../images/visa.png';
import paystack from '../../images/payStack.png';
import './ShoppingCart.css';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import MyStarRating from '../card/MyStarRating';
import {
  decreaseQuantity,
  deleteItemFromCart,
  increaseQuantity,
} from '../api/cartDataSlice';

function ShoppingCart() {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.cart);
  const total = useSelector((state) => state.cart?.total);
  console.log(total, items);

  function handleDec(x) {
    dispatch(decreaseQuantity(x));
  }

  function handleInc(x) {
    dispatch(increaseQuantity(x));
  }

  function handleDelete(x) {
    dispatch(deleteItemFromCart(x));
  }

  return (
    <section className="main-container">
      <div className="shopping-cart-payment-container">
        <ul className="shopping-cart-ul">
          <li className="shopping-cart-li">
            <NavLink to="/" className="nav-link">
              <span>Home</span>
              <span>
                <HiChevronRight className="shopping-cart-icon" />
              </span>
            </NavLink>
          </li>
          <li className="shopping-cart-li">
            <NavLink to="/productPage" className="nav-link">
              <span>Shop</span>
              <span>
                <HiChevronRight className="shopping-cart-icon" />
              </span>
            </NavLink>
          </li>
          <li className="shopping-cart-li inactive">Shopping Cart</li>
        </ul>
        <div className="shopping-cart-sub-container">
          <div className="shopping-item-container">
            <h2>Shopping Cart</h2>
            <div className="shopping-items">
              <ul className="shopping-item-head">
                <li>Item Details</li>
                <li>Quantity </li>
                <li>Price</li>
              </ul>

              <div className="shopping-item-body">
                <div className="shopping-item-container">
                  {items.map((item, i) => (
                    <div key={i}>
                      <div className="shopping-item">
                        <div className="shopped-detail">
                          <img
                            src={item.image}
                            alt="chair"
                            className="shopped-item-img"
                          />

                          <div className="shopping-rating-container">
                            <p className="shopping-graphic">{item.title}</p>
                            <p>{item.availability}</p>
                            <MyStarRating rating={item.rating} />
                          </div>
                        </div>
                        <div className="shopped-qty">
                          <div className="dec-container">
                            <HiMinus
                              className="icon-sign"
                              onClick={() => handleDec(item.id)}
                            />
                          </div>
                          <span className="symbol oty">{item.count}</span>
                          <div className="inc-container">
                            <HiOutlinePlus
                              className="icon-sign"
                              onClick={() => handleInc(item.id)}
                            />
                          </div>
                        </div>
                        <div className="shopped-amount">
                          <span className="amount">€ {item.totalPrice}</span>
                          <span className="amt-and-qty">
                            € {item.price} * {item.count} Item
                          </span>
                        </div>
                      </div>
                      <button className="delete-container">
                        <MdOutlineDelete className="delete-icon" />
                        <span
                          className="delete"
                          onClick={() => handleDelete(item.id)}
                        >
                          REMOVE
                        </span>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="payment-details-container">
            <div className="payment-detail-head">
              <div className="ordered-item">Order Summary</div>
              <div className="qtys">4 Items</div>
            </div>
            <div className="payment-details">
              <div className="items-container">
                <div className="items">Delivery Charges</div>
                <div className="add-address">
                  Add your delivery address to checkout to see delivery charges.
                </div>
              </div>

              <div className="items-container subtotal-container">
                <div className="subtotal">Subtotal</div>
                <div className="subtotal-amt">{total}</div>
              </div>
              <div className="items-container subtotal-container">
                <div className="total">Total</div>
                <div className="total-amt">#26500</div>
              </div>
              <span className="margin-left">Excluding Delivery Charges</span>

              <button className="payment-btn">Proceed to Checkout</button>
              <div className="bank-card">
                <img src={paystack} alt="pay stack" />
                <img src={master} alt="master" />
                <img src={visa} alt="visa" />
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </section>
  );
}

export default ShoppingCart;
