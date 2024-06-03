import { MdOutlineDelete } from 'react-icons/md';
import { HiChevronRight } from 'react-icons/hi';
import master from '../../images/master.png';
import chair from '../../images/chair.jpg';
import visa from '../../images/visa.png';
import paystack from '../../images/payStack.png';
import rating from '../../images/Rating.png';
import './ShoppingCart.css';

function ShoppingCart() {
  return (
    <section className="main-container">
      <div className="shopping-cart-payment-container">
        <ul className="shopping-cart-ul">
          <li className="shopping-cart-li">
            <span>Home</span>
            <span>
              <HiChevronRight className="shopping-cart-icon" />
            </span>
          </li>
          <li className="shopping-cart-li">
            <span>Shop</span>
            <span>
              <HiChevronRight className="shopping-cart-icon" />
            </span>
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
                <div className="shopping-item">
                  <div className="shopped-detail">
                    <img src={chair} alt="chair" className="shopped-item-img" />
                    <div className="shopping-rating-container">
                      <p className="shopping-graphic">Graphic Design</p>
                      <p>In Stock</p>
                      <div className="rating-container">
                        <img
                          src={rating}
                          alt="rating"
                          className="shopping-cart-rating"
                        />
                        <span className="shopping-cart-review">28 Reviews</span>
                      </div>
                    </div>
                  </div>
                  <div className="shopped-qty">
                    <div className="dec-container">
                      <span className="symbol dec">-</span>
                    </div>
                    <span className="symbol oty">1</span>
                    <div className="inc-container">
                      <span className="symbol inc">+</span>
                    </div>
                  </div>
                  <div className="shopped-amount">
                    <span className="amount">#3000</span>
                    <span className="amt-and-qty">#3000 * 1Item</span>
                  </div>
                </div>
                <div className="delete-container">
                  <MdOutlineDelete className="delete-icon" />
                  <span className="delete">REMOVE</span>
                </div>
                <div className="shopping-item">
                  <div className="shopped-detail">
                    <img src={chair} alt="chair" className="shopped-item-img" />
                    <div className="shopping-rating-container">
                      <p className="shopping-graphic">Graphic Design</p>
                      <p>In Stock</p>
                      <div className="rating-container">
                        <img
                          src={rating}
                          alt="rating"
                          className="shopping-cart-rating"
                        />
                        <span className="shopping-cart-review">28 Reviews</span>
                      </div>
                    </div>
                  </div>
                  <div className="shopped-qty">
                    <div className="dec-container">
                      <span className="symbol dec">-</span>
                    </div>
                    <span className="symbol oty">1</span>
                    <div className="inc-container">
                      <span className="symbol inc">+</span>
                    </div>
                  </div>
                  <div className="shopped-amount">
                    <span className="amount">#3000</span>
                    <span className="amt-and-qty">#3000 * 1Item</span>
                  </div>
                </div>
                <div className="delete-container">
                  <MdOutlineDelete className="delete-icon" />
                  <span className="delete">REMOVE</span>
                </div>
                <div className="shopping-item">
                  <div className="shopped-detail">
                    <img src={chair} alt="chair" className="shopped-item-img" />
                    <div className="shopping-rating-container">
                      <p className="shopping-graphic">Graphic Design</p>
                      <p>In Stock</p>
                      <div className="rating-container">
                        <img
                          src={rating}
                          alt="rating"
                          className="shopping-cart-rating"
                        />
                        <span className="shopping-cart-review">28 Reviews</span>
                      </div>
                    </div>
                  </div>
                  <div className="shopped-qty">
                    <div className="dec-container">
                      <span className="symbol dec">-</span>
                    </div>
                    <span className="symbol oty">1</span>
                    <div className="inc-container">
                      <span className="symbol inc">+</span>
                    </div>
                  </div>
                  <div className="shopped-amount">
                    <span className="amount">#3000</span>
                    <span className="amt-and-qty">#3000 * 1Item</span>
                  </div>
                </div>
                <div className="delete-container">
                  <MdOutlineDelete className="delete-icon" />
                  <span className="delete">REMOVE</span>
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
