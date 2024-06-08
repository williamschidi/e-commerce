import { useSelector } from 'react-redux';
import MyStarRating from './MyStarRating';

function ShoppingCartItemCard() {
  const { items } = useSelector((state) => state.cart);

  return items?.map((item, i) => (
    <div className="card-1" key={i}>
      <img src={item.image} alt="pic" />

      {item.availabilityStatus === 'Out of Stock' && (
        <p className="out-of-cost">OUT OF COST</p>
      )}
      <div className="product-detail">
        <p className="brand">{item.brand}</p>
        <p className="name">{item.title}</p>
        <p className="price">€ {item.price}</p>

        <div className="rating-container">
          <MyStarRating rating={item.rating} />

          <span className="rating">{item.rating}</span>
        </div>
      </div>
    </div>
  ));
}

export default ShoppingCartItemCard;
