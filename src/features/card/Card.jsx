import { useDispatch } from 'react-redux';
import { addItemToCart, totalCost } from '../api/cartDataSlice';
import './Card.css';
import toast from 'react-hot-toast';
import SuccessMsg from './SuccessMsg';
import MyStarRating from './MyStarRating';

function Card({ item }) {
  const dispatch = useDispatch();
  function handleAddToCart(item) {
    dispatch(
      addItemToCart({
        id: item.id,
        image: item.images[0],
        title: item.title,
        price: item.price,
        rating: item.rating,
        availability: item.availabilityStatus,
        count: 1,
      })
    );
    dispatch(totalCost());

    toast.success(<SuccessMsg products={item} />);
  }

  return (
    <div className="card-1" onClick={() => handleAddToCart(item)}>
      <img src={item.images[0]} alt="pic" />

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
      <div className="card-btn-container ">
        <button
          className="card-btn"
          onClick={() => {
            handleAddToCart(item);
          }}
        >
          ADD TO BASKET
        </button>
      </div>
    </div>
  );
}

export default Card;
