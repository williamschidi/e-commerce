import { MdOutlineDelete } from 'react-icons/md';
import { HiChevronRight } from 'react-icons/hi';
import { HiMinus } from 'react-icons/hi';
import { HiOutlinePlus } from 'react-icons/hi';
import master from '../../images/master.png';
import visa from '../../images/visa.png';
import paystack from '../../images/payStack.png';
import './ShoppingCart.css';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import fullStar from '../../images/full-star.png';
import emptyStar from '../../images/empty-star.png';

function ShoppingCart() {
  const { items } = useSelector((state) => state.cart);
  const [counts, setCounts] = useState(items.map((item) => item.count));

  function handleDec(x) {
    counts.map((count) =>
      count === x ? setCounts(() => counts[x] - 1) : setCounts(count)
    );
  }

  function handleInc(x) {
    counts.map((count) =>
      count === x ? setCounts(() => counts[x] + 1) : setCounts(count)
    );
  }

  // function checkOccurrence() {
  //   const count = {};
  //   items.forEach((item) => {
  //     count[item.title] = (count[item?.title] || 0) + 1;
  //   });
  //   return count;
  // }

  // items && console.log(checkOccurrence());

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
                  {items.map((item, ind) => (
                    <>
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
                            <div className="rating-container">
                              <div>
                                <span>
                                  {Array.from(
                                    { length: Math.floor(item.rating) },
                                    (_, i) => (
                                      <img
                                        src={fullStar}
                                        alt="full-star"
                                        key={i}
                                        className="star-rating"
                                      />
                                    )
                                  )}
                                  {Array.from(
                                    { length: 5 - Math.floor(item.rating) },
                                    (_, i) => (
                                      <img
                                        src={emptyStar}
                                        alt="full-star"
                                        key={i}
                                        className="star-rating"
                                      />
                                    )
                                  )}
                                </span>
                              </div>

                              <span className="shopping-cart-review">
                                28 Reviews
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="shopped-qty">
                          <div className="dec-container">
                            <HiMinus
                              className="icon-sign"
                              // tab={item[ind + 1]}
                              onClick={() => handleDec(ind)}
                            />
                          </div>
                          <span className="symbol oty">1</span>
                          <div className="inc-container">
                            <HiOutlinePlus
                              className="icon-sign"
                              onClick={() => handleInc(ind)}
                            />
                          </div>
                        </div>
                        <div className="shopped-amount">
                          <span className="amount">€ {item.price}</span>
                          <span className="amt-and-qty">
                            € {item.price} * {counts[ind]} Item
                          </span>
                        </div>
                      </div>
                      <div className="delete-container">
                        <MdOutlineDelete className="delete-icon" />
                        <span className="delete">REMOVE</span>
                      </div>
                    </>
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
                <div className="subtotal-amt">#26500</div>
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
